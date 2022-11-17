const express = require("express");
const BBDD = require("./server/config/mongoose");
var cors = require("cors");

const app = express();

// const path = require('path')
// app.use(express.static(path.join(__dirname,'/angular/dist')));
app.use(express.static(__dirname + "/tarea-mean-v18"));

app.use(express.json());
app.use(cors());

const routers = require("./server/config/routers");
app.use(routers);

const puerto = require('./server/config/puerto.js')(app);