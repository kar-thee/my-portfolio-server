const express = require("express");
const app = express();

require("dotenv").config();

const cors = require("cors");

app.use(cors());
app.use(express.json());

const mailRoutes = require("./routes/MailRoutes");

app.use("/api/mail", mailRoutes);

app.use("/", (req, res) => {
  res.send({
    msg: "Welcome to Portfolio-server",
    usp: "For sending mail",
    websiteLink: "https://kartheekeyan.com",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
