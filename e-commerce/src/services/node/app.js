const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/shopcart");

  console.log("connected!");
};

main().catch((err) => console.log("ERROR: ", err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  prof: String,
});

const users = mongoose.model("users", userSchema);

app.post("/user", async (req, res) => {
  const user = new users();

  user.username = req.body.user;
  user.password = req.body.pass;
  user.prof = req.body.val;

  await user.save();

  res.status(200).send(true);
});

app.post("/exist", async (req, res) => {
    let i = 0;

    await users.find().then((result) => {
      // console.log("----------------> ", result);
      result.forEach((element) => {
        if (
          element.username == req.body.user
        ) {
          i = 1;
          return;
        }
      });
    });
  
    if (i) {
      res.send(true);
    } else {
      res.send(false);
    }

//   res.status(200).send(true);
});

app.post("/check", async (req, res) => {
    let i = 0;

    await users.find().then((result) => {
      // console.log("----------------> ", result);
      result.forEach((element) => {
        if (
          element.username == req.body.user &&
          element.password == req.body.pass
        ) {
          i = 1;
          return;
        }
      });
    });
  
    if (i) {
      res.send(true);
    } else {
      res.send(false);
    }

//   res.status(200).send(true);
});

app.listen(8000, () => {
  console.log(`I'm running on port 8000`);
});
