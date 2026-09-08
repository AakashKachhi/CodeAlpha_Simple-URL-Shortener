import express from "express";

import Router from "./routes/urls.route.js";

const app = express()

app.use(express.json())
app.use(express.static("public"));

app.use("/api/urls", Router)


export default app
