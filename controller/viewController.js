exports.getView = async (req, res, next) => {
	try {
		const response = await fetch(
			"http://localhost:3000/api/v1/funcionarios/"
		);

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const data = await response.json();
		const { funcionarios } = data.data;
		res.status(200).render("overview", {
			title: "Xuxu Linda",
			funcionarios,
		});
	} catch (error) {
		console.log(error);
	}
};
