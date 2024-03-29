"use client";

import PlusIcon from "@/icons/PlusIcon";
import { useState, useMemo, useEffect } from "react";
import { Column, Id, Task } from "@/types";
import ColumnContaier from "./column-container";


import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "./task-card";
import ColumnContainer from "./column-container";

const defaultCols: Column[] = [
  {
    id: "todo",
    title: "Todo"
  },
  {
    id: "doing",
    title: "Work in progress"
  },
  {
    id: "done",
    title: "Done"
  }
];
const defaultTasks: Task[] = [
  {
    id: "1",
    columnId: "todo",
    content: "List admin APIs for dashboard"
  },
  {
    id: "2",
    columnId: "todo",
    content:
      "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation"
  },
  {
    id: "3",
    columnId: "doing",
    content: "Conduct security testing"
  },
  {
    id: "4",
    columnId: "doing",
    content: "Analyze competitors"
  },
  {
    id: "5",
    columnId: "done",
    content: "Create UI kit documentation"
  },
  {
    id: "6",
    columnId: "done",
    content: "Dev meeting"
  },
  {
    id: "7",
    columnId: "done",
    content: "Deliver dashboard prototype"
  },
  {
    id: "8",
    columnId: "todo",
    content: "Optimize application performance"
  },
  {
    id: "9",
    columnId: "todo",
    content: "Implement data validation"
  },
  {
    id: "10",
    columnId: "todo",
    content: "Design database schema"
  },
  {
    id: "11",
    columnId: "todo",
    content: "Integrate SSL web certificates into workflow"
  },
  {
    id: "12",
    columnId: "doing",
    content: "Implement error logging and monitoring"
  },
  {
    id: "13",
    columnId: "doing",
    content: "Design and implement responsive UI"
  }
];
export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(defaultCols);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  //Handler if the component should be rendered
  const [shouldRenderPortal, setShouldRenderPortal] = useState(false);

  //for managing logical on the client side

  useEffect(() => {
    // Verify if the document has been defined
    if (typeof document !== "undefined") {
      setShouldRenderPortal(true); // enable rendering of the component
    }
  }, []); //execute only one time onmount component

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10
      }
    })
  );

  const createNewColumn = () => {
    const columnToAdd: Column = {
      id: generateId(),
      title: `New List ${columns.length + 1}`
    };

    setColumns([...columns, columnToAdd]);
  };
  const generateId = () => {
    /* Generate a random Id number for column between 0 and 10000 */
    return Math.floor(Math.random() * 10001);
  };
  const deleteColumn = (id: Id) => {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);

    const newTasks = tasks.filter((t) => t.columnId !== id);
    setTasks(newTasks);
  };
  const updateColumn = (id: Id, title: string) => {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });

    setColumns(newColumns);
  };

  const createTask = (columnId: Id) => {
    const newTask: Task = {
      id: generateId(),
      columnId,
      content: `Task ${tasks.length + 1}`
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: Id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const updateTask = (id: Id, content: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });

    setTasks(newTasks);
  };
  /*
    Event for Drag and Drop
    */
  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  };
  const onDragEnd = (event: DragEndEvent) => {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current?.type === "Column";
    if (!isActiveAColumn) return;

    //console.log("DRAG END");

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;

    // I am dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";

    // I am dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        tasks[activeIndex].columnId = overId;
        //console.log("Dropping task over column", { activeIndex });
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <button
          onClick={() => {
            createNewColumn();
          }}
          className="
            h-[60px]
            w-[350px]
            min-w-[350px]
            cursor-pointer
            rounded-lg
            bg-blue-600
            text-white
            border-2
            border-columnBackgroundColor
            p-4
            ring-blue-500
            hover:ring-2
            flex
            gap-2
            "
        >
          <PlusIcon />
          Add New List
        </button>{" "}
      </div>
      <div className="m-auto flex py-10">
        <DndContext
          sensors={sensors}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
        >
          <div className="m-auto flex gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <SortableContext items={columnsId}>
                {columns.map((col) => (
                  <ColumnContaier
                    key={col.id}
                    column={col}
                    deleteColumn={deleteColumn}
                    updateColumn={updateColumn}
                    createTask={createTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    tasks={tasks.filter((task) => task.columnId === col.id)}
                  />
                ))}
              </SortableContext>
            </div>
          </div>
          {shouldRenderPortal &&
            createPortal(
              <DragOverlay>
                {activeColumn && (
                  <ColumnContainer
                    column={activeColumn}
                    deleteColumn={deleteColumn}
                    updateColumn={updateColumn}
                    createTask={createTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    tasks={tasks.filter(
                      (task) => task.columnId === activeColumn.id
                    )}
                  />
                )}
                {activeTask && (
                  <TaskCard
                    task={activeTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                  />
                )}
              </DragOverlay>,
              document.body
            )}
        </DndContext>
      </div>
    </>
  );
}
