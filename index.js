import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const tasklist = [];
const tasklist2 = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { tasklist: tasklist });
});
app.post("/", (req, res) => {
  let task = req.body.task;
  if (task) {
    tasklist.push(task.trim());
  }
  res.render("index.ejs", { tasklist: tasklist});

});

app.get("/today", (req, res) => {
 const currentDate = new Date();
  const day = currentDate.getDay();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate1 = new Date();
const currentDay =
  dayNames[day] +
  " " +
  currentDate.toLocaleString("default", { month: "long" }) +
  " " +
  currentDate.getDate();


  res.render("today.ejs", { tasklist2: tasklist2, date:currentDay });
  console.log(tasklist2);
});
app.post("/today", (req, res) => {
  const task2 = req.body.task;
  if (task2) {
    tasklist2.push(task2.trim());
  }
  res.render("today.ejs", { tasklist2: tasklist2 });
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
