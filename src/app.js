import express from "express";
import sendMail from "./nodemailer";

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log(req.method, fullUrl, "body:", req.body);
  next();
});

app.use("/sendmail", async (req, res) => {
  try {
    await sendMail(req.body.email, req.body.id, req.body.key);
    res.send({ status: "OK" });
  } catch {
    res.send({ error: true, description: "haraka error" });
  }
});

export default app;
