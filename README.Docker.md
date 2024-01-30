

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

The next images show the different functions and the responsive design"

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


