const express = require("express");
const app = express();
const axios = require("axios");
app.use(express.json());
const port = 3000;

app.use(function (req, res, next) {
	if (!("JSONResponse" in res)) {
		return next();
	}

	res.set("Cache-Control", "public, max-age=5000");
	res.json(res.JSONResponse);
});

app.get("/", (req, res) => {
	console.log("Hit on node");

	res.send("Hello World!");
});

app.post("/", (req, res) => {
	console.log("Hit on node", req.body);
	// axios call to jsonplaceholder api
	axios
		.get("https://jsonplaceholder.typicode.com/todos")
		.then((response) => {
			res.json(response.data);
		})
		.catch((error) => {
			res.json(error);
		});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
