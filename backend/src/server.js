// const express = require("express")
import express from "express";

import {ENV} from "./lib/env.js";

const app = express();

console.log(ENV.PORT);
console.log(ENV.DB_URL);

app.get("/", (req, res) => {
    res.status(200).json({msg:"success from server"})
});

app.listen(3000, () => console.log("Server is runnig on port:",ENV.PORT));

