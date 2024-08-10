const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const port = 3000;
const DB = process.env.DATABASE.replace(
	"<password>",
	process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("Banco de dados conectado"));
const server = app.listen(port, () => {
	console.log(`Rodando na port ${port}`);
});

process.on("unhandledRejection", (err) => {
	console.log(err.name, err.message);
	console.log("unhandledRejection, o servidor será derrubado");
	server.close(() => {
		process.exit(1);
	});
});
