<h1 align="center">Welcome to My-Planner 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>
<p align="left">
   <img src="https://img.shields.io/badge/STATUS-%20DEVELOPNG-green">
</p>
<h4 align="center">
:construction: Project under construction :construction:
</h4>

## Features

**It is an activity planner, that allows you to create lists of activities and within the lists create tasks, with the ease of being able to drag and drop the lists to organize them as you wish and additionally allows you to move tasks between lists.**

- Intuitive and easy-to-use interface.
- Route redirection.
- Drag-and-drop functionality for seamless organization.
- Responsive design optimized for being using with desktop and mobile devices.

### Case Analysis

In this case the client required an application with a login and a task manager with drag and drop like Trello. According with the information provided the analysis is:

For the login page, there could be differents options:
- Authentication with username (email) and password which are stored in a database. Once the user types the credentials, those are verified in the database and if they match, the user can access.
- If the company has corporate mail, the authentication can be through it.
- Authentication with third parties such as: Gmail, Facebook and others.
- Password recovery. When the user asks for this, an email is sent to the registered account to reset the password and access.

About the planner Trello-type, the application could have Kanban groups which manages lists and inside those you can have tasks. Those tasks could be assigned to members, also they could manage the tasks with checklists, schedule and labels.

For this short sprint, we can start doing the login, Register and Kanban board features, the below we are going to describe them.
- Login Page: You can authenticate using the user credentials (email and password).
- Register Page: You can create an account in order to be able to login the application. You need to fill some fields like Full Name, email and password. There are some validations for Full Name field is requiered to have at least 10 characters, Password is requierd to   have at least 8 characters and email field is requiered to have a valid email format.
- Kanban Board Page: It will have three lists with preconfigured activities [Todo, Work in progress and Done], where you can drag and drop between the lists to organize them and sort tasks in a list or move a task to another list. Additionally, you can change the title     of the lists or description of the tasks, as well as delete lists and tasks.
  Finally, you can create new lists by clicking on the Add New List button.

This first sprint will be taken as a reference and will be shown to the end user to discover the set of functionalities they want for the application. Using agile methodologies and making partial deliveries with the purpose of building a solution that aligns with the needs.

## Technologies used

- NEXTJS
- TYPESCRIPT
- GIT
- MONGODB
- NEXTAUTH
- TAILWIND CSS
- DND-KIT
- DOCKER

## Project Structure

- app
  - api
    - auth
    - register
    - userExists
  - dashboard
  - register
- icons
- lib
- model
- public
- ui
  - dashboard
  - login
  - register

## Table Project Structure Description

| Name         | Description                        |
| ---          | ---                                |
| `app`        | Routing Convention                 |
| `api`        | API Router                         |
| `dashboard`  | Pages Router                       |
| `register`   | Pages Router                       |
| `icons`      | Utilities folder                   | 
| `lib`        | utilities for Database connecting  |
| `model`      | Schemas for Database               |
| `public`     | Static assets to be served         |
| `ui`         | utilities folder for components    |



## Getting Started

Follow the next steps:

1. Clone the repository to your local machine using git clone [https://github.com/ronnymarca81/adecco](https://github.com/ronnymarca81/adecco/blob/main/README.md)
2. Create a Database Mongo and get a connection string
3. Create .env at the same level of app folder and add enviroment variables
4. Install dependencies by running npm, yarn, pnpm
6. Run the development server with:

## .env
```sh
MONGODB_URI = put your connection string
NEXTAUTH_SECRET = put a random Nextauth-secret
NEXTAUTH_URL=http://localhost:3000/
```

## Install

```sh
npm install
# or
yarn install
# or
pnpm install
```

## Usage

```bash
npm run dev
# or
yarn run dev
# or
pnpm run dev
```

## How to Start

To access to the application at the first time:
1. Go to [http://localhost:3000/register](http://localhost:3000/register) or clic on register link in the login page.

![register](https://github.com/ronnymarca81/adecco/assets/107527808/55f9abaa-85d9-437f-9b94-fc1cbf05325c)

2. Complete the form with your Full name, email and password. (There are some constraints for Full Name field: must be at least 10 characters, email field: must have a valid email format and password field: must be at least 8 characters )
3. Click on the register button.


### To login:
1. Open [http://localhost:3000](http://localhost:3000) with your browser.

![login](https://github.com/ronnymarca81/adecco/assets/107527808/a4e88bdf-b53d-4174-a943-0ceb0f9f90aa)

2. Type your registered email and password.
3. Click on the login button.


Functions in the main dashboard allow the users to Drag and Drop the lists and sort tasks in the same list and Drag and Drop tasks to differents lists. To do that:

1. Clic on `Add New List` to create a new List. On it, the user will be able to customize the list name, modify by clicking on New List, or delete.
2. In the list, clic on `Add task` to register the details for each of the them. Also, delete it is possible.
3. Drap and drop each task inside the list or between them to manage your tasks.

### The next images show the different functions and the responsive design

![drag and drop](https://github.com/ronnymarca81/adecco/assets/107527808/581aca8e-e926-4a7c-aafe-db093307398f)
a. Dashboard with the different lists.

![drag and drop2](https://github.com/ronnymarca81/adecco/assets/107527808/f4965f35-e05f-4462-a9f2-d2ef546a3a61)
b. Drag and drop a list.

![drag and drop3](https://github.com/ronnymarca81/adecco/assets/107527808/977a499f-bece-4d31-8b5e-91e87f6760a7)
c. List dragged and dropped as the first column that shows how its name is name can be modified.

![drag and drop4](https://github.com/ronnymarca81/adecco/assets/107527808/750a7b1a-0c74-4d13-a404-2efb37350541)
d. Drag and drop a task between the lists.

![mobile view](https://github.com/ronnymarca81/adecco/assets/107527808/872378d9-5308-41aa-82c2-2138dc214254)

e. Mobile view showing the responsive design feature.

## To Sign Out

Close the user session and redirect to login page.


