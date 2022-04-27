import express from "express";
import session from "express-session";
import sendMail from "./nodemailer";

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/sendmail", function (req, res) {
  sendMail(req.body.email, req.body.id, req.body.key);
  res.send("hi");
});

export default app;
