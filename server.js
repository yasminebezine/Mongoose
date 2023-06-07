const express = require("express");
const connectDB = require("./config/connectDB");
const contact = require("./models/userModel");

const app = express();
const PORT =8080;

connectDB();

const addUserOne = async () => {
    const yasmine = new contact.UserSchema({
      userName: "Yasmine",
      userFavoritefood: "Pizza",
      userAge: 28,
    });
    await yasmine.save()
};
addUserOne()
const addUserTwo = async () => {
    const skander = new contact.UserSchema({
      userName: "skander",
      userFavoritefood: "hambourger",
      userAge: 22,
      
    });
      await skander.save()
  };
addUserTwo()

const updateUser = async () => {
await contact.UserSchema.findByIdAndUpdate("6480cc32ade58532b160b09c",{$set :{userName:"meriem"}});
}
updateUser()

const deleteUser = async ()=> {
    await contact.UserSchema.findByIdAndDelete("6480cc50a67caf1bb7f56565");
};
deleteUser ()

app.listen((err) =>
  err ? console.log(err) : console.log(`app listning on ${PORT}`)
);