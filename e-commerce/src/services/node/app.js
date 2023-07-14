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

const prodSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  qty: Number,
  cat: String,
  des: String,
  uploadedBy: String,
  status: String
});

const product = mongoose.model("product", prodSchema);

app.post("/user", async (req, res) => {
  const user = new users();

  user.username = req.body.user;
  user.password = req.body.pass;
  user.prof = req.body.val;

  await user.save();

  res.status(200).send(true);
});

app.post("/exist", async (req, res) => {
    let i = "";

    await users.find().then((result) => {
      // console.log("----------------> ", result);
      result.forEach((element) => {
        if (
          element.username == req.body.user
        ) {
          i = element._id;
          return;
        }
      });
    });
  
    if (i!="") {
      res.send(i);
    } else {
      res.send(false);
    }

//   res.status(200).send(true);
});

app.post("/check", async (req, res) => {
    let i = "";

    await users.find().then((result) => {
      // console.log("----------------> ", result);
      result.forEach((element) => {
        if (
          element.username == req.body.user &&
          element.password == req.body.pass
        ) {
          i = element._id;
          return;
        }
      });
    });
  
    if (i!="") {
      res.send(i);
    } else {
      res.send(false);
    }

//   res.status(200).send(true);
});

app.post("/addProduct", async (req, res) => {
  const prod = new product();
  
  prod.productName=req.body.name;
  prod.price=req.body.price;
  prod.qty=req.body.qty;
  prod.cat=req.body.cat;
  prod.des=req.body.des;
  prod.uploadedBy=req.body.uploadedBy;
  prod.status=req.body.status

  await prod.save();

  res.status(200).send(true);

//   res.status(200).send(true);
});

app.post("/getProduct", async (req, res) => {

  await product.find({}).then((result) => {
    res.status(200).send(result)
  });

//   res.status(200).send(true);
});

app.post("/delete", async (req, res) => {

  // console.log(req.body.id);

  await product.deleteOne({_id: req.body.id}).then((result) => {
    console.log("chal gya")
  });

//   res.status(200).send(true);
});

app.post("/stat", async (req, res) => {

  await users.findOne({_id: req.body.id}).then((result) => {
    res.status(200).send(result.prof);
  });

//   res.status(200).send(true);
});

app.post("/update", async (req, res) => {

  console.log(req.body)

  await product.updateOne({_id: req.body.id},{$set: req.body.data})

  res.status(200).send(true);
});

app.listen(8000, () => {
  console.log(`I'm running on port 8000`);
});
