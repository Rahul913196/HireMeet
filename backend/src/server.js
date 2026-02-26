// const express = require("express")
import express from "express";
import path from "path";

import {ENV} from "./lib/env.js";

const app = express();

const __dirname = path.resolve()

app.get("/health", (req, res) => {
    res.status(200).json({msg:"api is up and running"})
});

app.get("/books", (req, res) => {
    res.status(200).json({msg:"this is the books endpoint"})
});

//MAKE OUR APP  READY FOR DEPLOYMENT 
if(ENV.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))


app.get("/{*any}", (req,res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});

}
app.listen(3000, () => console.log("Server is runnig on port:",ENV.PORT));

