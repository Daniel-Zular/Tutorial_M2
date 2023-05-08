const express = require('express'); 
const app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var DBPATH = '../projeto.db';
var db = new sqlite3.Database(DBPATH); // caminho para os dados

app.use(bodyParser.json()); // ler em json
app.use(bodyParser.urlencoded({extended: true}));


