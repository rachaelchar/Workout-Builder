const express = require('express');
const path = require('path');
// const db = require('./models');
// const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

// app.use('/', routes);

// db.sequelize.sync({force: true}).then(() => {
// db.sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
// });

app.get("/test", (req, res) => {
  res.json("This is working");
});

// api routes

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
});