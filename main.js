const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const port = 3000;
const router = require("./router/router");
const swaggerFile = require("./doc/swagger.json");
const app = express();
const swaggerUI = require("swagger-ui-express");
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(port, () => console.log("http://localhost:" + port));
