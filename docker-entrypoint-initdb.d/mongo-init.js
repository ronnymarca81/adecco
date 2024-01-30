db = db.getSiblingDB("adecco");

db.createUser({
  user: "usertest",
  pwd: "7roPAwscdreP4UaR",
  roles: [
    {
      role: "readWrite",
      db: "adecco"
    }
  ]
});

db = db.getSiblingDB("adecco");

db.users.insertOne({
  name: "exampleuser",
  email: "example@email.com",
  password: "examplepassword"
});
