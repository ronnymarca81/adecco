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

## :hammer :Features

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

## Project Structure

- app
- icons
- lib
- model
- public
- ui

*****Justify more about the proposal, why the technologies
The technologies used facilites...

The others features could be analysis with the client and added by requeriment.

## Getting Started// Installation and run

Follow the next steps:

1. Clone the repository to your local machine using git clone [https://github.com/ronnymarca81/adecco](https://github.com/ronnymarca81/adecco/blob/main/README.md)
2. Install dependencies by running yarn
3. Run the development server with:

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

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

** You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

**This application uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Usage

**Provide instructions and examples so users/contributors can use the project. This will make it easy for them in case they encounter a problem – they will always have a place to reference what is expected.
You can also make use of visual aids by including materials like screenshots to show examples of the running project and also the structure and design principles used in your project.
Also if your project will require authentication like passwords or usernames, this is a good section to include the credentials.**

To login:
1. Open [http://localhost:3000](http://localhost:3000) with your browser

![login](https://github.com/ronnymarca81/adecco/assets/107527808/a4e88bdf-b53d-4174-a943-0ceb0f9f90aa)

2. Type your registered email and password.
3. Click on the login button.

To access to the application at the first time:
1. Go to [http://localhost:3000/register](http://localhost:3000/register) or clic on register link in the login page. Puedes cambiar aca y que diga register en vez de login??

![register](https://github.com/ronnymarca81/adecco/assets/107527808/8a456ca8-b630-4648-8038-0834c153bda7)

2. Complete the form with your Full name, email and password.
3. Click on the register button.

Functions in the main dashboard allow the users to create different projects and manage them. To do that:

1. Clic on `Add Column` to create a new card. On it, the user will be able to customize the card name, modify by clicking on Column, or delete.
2. In the card, clic on `Add task` to register the details for each of the them. Also, delete it is possible.
3. Drap and drop each task inside the card or between them to manage your tasks. 

![drag and drop](https://github.com/ronnymarca81/adecco/assets/107527808/bfe11e98-9ade-4e68-a59f-79fca3bde117)


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
