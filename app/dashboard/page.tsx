import dynamic from "next/dynamic";


const KanbanBoard = dynamic(() => import("@/ui/dashboard/kanban-board"), {
  ssr: false
});

export default function Page() {
  return (
    <KanbanBoard />
  )
}
