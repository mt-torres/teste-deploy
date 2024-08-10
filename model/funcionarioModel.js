const mongoose = require("mongoose");

const funcionarioSchema = new mongoose.Schema({
	name: {
		type: String,
		require: [true, "Por favor informe o nome do funcionário"],
	},
	email: {
		type: String,
		require: [true, "Please inform your email "],
		unique: true,
		lowercase: true,
		//validate: [validator.isEmail, "Please provide a valid email"],
	},
	role: {
		type: String,
		enum: ["Gerente", "Agente", "Contador", "Financeiro"],
		default: "Agente",
	},
});

const Funcionario = mongoose.model("Funcionario", funcionarioSchema);

module.exports = Funcionario;
