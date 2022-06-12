const express = require("express");
const exphbs = require("express-handlebars");

const server = express();

//Static Files
server.use("/static", express.static(`${__dirname}/static`));
server.use("/scripts", express.static(`${__dirname}/scripts`));

// data parsing middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.set("view engine", ".hbs");
server.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);

// main routes
server.use("/", require("./routes/main"));

//err handling
server.use((req, res) => {
  res.status(404).send("<i>something broke</i>");
});

//port
const HTTP_PORT = process.env.PORT || 8080;
server.listen(HTTP_PORT, (err) => {
  if (err) console.log(err);
  else console.log(`=> Server started on port | ${HTTP_PORT} |`);
});
