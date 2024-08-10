const express = require("express");
const viewRouter = require("./routes/viewRoutes");
const funcionarioRoutes = require("./routes/funcionarioRoutes");
const app = express();
const path = require("path");

app.set("view engine", "pug");

app.use(express.json({ limit: "10kb" })); //middleware
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
	req.requestedTime = new Date().toISOString(); //retorna a data do momento de uma requisição
	next();
});

app.use("/", viewRouter); // visualização
app.use("/api/v1/funcionarios", funcionarioRoutes); // API

module.exports = app;
