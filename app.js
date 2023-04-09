// const express = require('express')
import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter'


const app = express()
app.use(cors())
app.use(express.json())
HelloController(app)
UsersController(app)
TuitsController(app)

// mongoose.connect('mongodb://127.0.0.1:27017/tuiter')
mongoose.connect(CONNECTION_STRING)
app.listen(process.env.PORT || 4000)