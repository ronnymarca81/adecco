# Adecco

This repository contains an application with a login to enter it and a trello-type task manager with drag and drop.

## Technologies used

- NEXTJS
- TYPESCRIPT
- GIT
- MONGODB
- NEXTAUTH
- TAILWIND

## Features

What your application does,
Why you used the technologies you used,
Some of the challenges you faced and features you hope to implement in the future.

- Intuitive and easy-to-use interface.
- Route redirection.
- Drag-and-drop functionality for seamless organization.
- Responsive design optimized for being using with desktop and mobile devices.

### Case Analysis

In this case for the login page, there could be differents options:
- Authentication with username (email) and password which are stored in a database. Once the user types the credentials, those are verified in the database and if they match, the user can access.
- If the company has corporate mail, the authentication can be through it.
- Authentication with third parties such as: Gmail, Facebook and others.
- Password recovery. When the user asks for this, an email is sent to the registered account to reset the password and access.

About the planner Trello-type, the application could have Kanban groups which manages lists and inside those you can have tasks. Those tasks could be assigned to members, also they could manage the tasks with checklists, schedule and labels.

For this short sprint?? the login is through authentication the user credentials (email and password), as well as recovering the access via email. Users can create one dashboard/kanban for each of their projects, on it they can add cards/columns with a task list. Each task can be drag and drop between the differents cards according its state to manage the project. 

The others features could be added by company request.

*****Justify more about the proposal, why the technologies

## Getting Started// Installation and run

Follow the next steps:

1. Clone the repository to your local machine using git clone [https://github.com/ronnymarca81/adecco](https://github.com/ronnymarca81/adecco/blob/main/README.md)
2. Install dependencies by running yarn
3. Run the development server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

** You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

**This application uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Usage

Provide instructions and examples so users/contributors can use the project. This will make it easy for them in case they encounter a problem – they will always have a place to reference what is expected.
You can also make use of visual aids by including materials like screenshots to show examples of the running project and also the structure and design principles used in your project.
Also if your project will require authentication like passwords or usernames, this is a good section to include the credentials.

To access to the application at the first time:
1. Go to [http://localhost:3000/register](http://localhost:3000/register) or clic on register link in the login page.

![register](https://github.com/ronnymarca81/adecco/assets/107527808/edf851b8-7387-4e6e-84bc-52307f359542)

3. Complete the form with your Full name, email and password
4. Click on the register button


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
