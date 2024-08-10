const express = require("express");
const {
	createFuncionario,
	getAllFuncionarios,
} = require("../controller/funcionarioController");
const router = express.Router();

router.get("/", getAllFuncionarios);
router.post("/add-func", createFuncionario);

module.exports = router;
