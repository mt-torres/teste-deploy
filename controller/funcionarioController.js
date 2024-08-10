const Funcionario = require("../model/funcionarioModel");

exports.getAllFuncionarios = async (req, res) => {
	try {
		const funcionarios = await Funcionario.find();
		res.status(200).json({
			status: "Success",
			results: funcionarios.length,
			requestedAt: req.requestedTime,
			data: {
				funcionarios,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "Failed",
			message: err,
		});
	}
};

exports.createFuncionario = async (req, res) => {
	try {
		console.log(req.body);
		const newFuncionario = await Funcionario.create({
			name: req.body.name,
			email: req.body.email,
			role: req.body.role,
		});
		res.status(200).json({
			status: "Success",
			message: newFuncionario,
		});
	} catch (err) {
		res.status(400).json({
			status: "Failed",
			message: err,
		});
	}
};
