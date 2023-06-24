import "./config";
import express from "express";
import expressConfig from "./express-config";

const app = express();

app.use(expressConfig);

const port = 5001;

app.listen(port, () =>
	console.log(`Aplicación corriendo en el puerto ${port}`)
);
