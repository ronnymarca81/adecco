

### Requirements

You need to have docker desktop configured

## How to Start

1. Clone the repository to your local machine using git clone [https://github.com/ronnymarca81/adecco](https://github.com/ronnymarca81/adecco/blob/main/README.md)
2. Install dependencies by running npm, yarn, pnpm
   
## Install

```sh
npm install
# or
yarn install
# or
pnpm install
```

3. Open a terminal and go to your project folder, When you're ready, start your application by running:

### Building and running your application
   
```sh
docker compose up --build
```

Your application will be available at http://localhost:3000.

### To access to the application at the first time:
1. Go to [http://localhost:3000/register](http://localhost:3000/register) or clic on register link in the login page.

![register](https://github.com/ronnymarca81/adecco/assets/107527808/55f9abaa-85d9-437f-9b94-fc1cbf05325c)

2. Complete the form with your Full name, email and password. (There are some constraints for Full Name field: must be at least 10 characters, email field: must have a valid email format and password field: must be at least 8 characters )
3. Click on the register button.

To login:
1. Open [http://localhost:3000](http://localhost:3000) with your browser.

![login](https://github.com/ronnymarca81/adecco/assets/107527808/a4e88bdf-b53d-4174-a943-0ceb0f9f90aa)

2. Type your registered email and password.
3. Click on the login button.



