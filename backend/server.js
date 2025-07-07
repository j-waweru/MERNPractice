const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const dotenv = require("dotenv").config();
const connectDB = require("./connect/database.js");
const port = process.env.PORT;
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", require("./routes/taskRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));

app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
