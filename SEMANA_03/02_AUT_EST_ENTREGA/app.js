const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'database.db'; //use o nome que você achar melhor para o banco de dados


app.use(express.json());

// READ
app.get('/user', (req, res) => {
    let user_key = req.query.user_key;
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `SELECT * FROM user WHERE user_key = ${user_key}`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.get('/formacao', (req, res) => {
    let user_key = req.query.user_key;
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `SELECT * FROM formacao WHERE user_key = ${user_key}`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

//CREATE

app.post('/create-user', (req, res) => {
    let nome = req.body.nome;
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `INSERT INTO user (nome) VALUES ( "${nome}")`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.post('/create-formacao', (req, res) => {
    let titulo = req.body.titulo;
    let instituicao = req.body.instituicao
    let user_key = req.body.user_key
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `INSERT INTO formacao (titulo, instituicao, user_key) VALUES ('${titulo}','${instituicao}',${user_key})`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

//UPDATE (ainda não consegui fazer certo, acredito)

app.put('/update-formacao', (req, res) => {
    let titulo = req.body.titulo;
    let instituicao = req.body.instituicao
    let user_key = req.body.user_key
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `UPDATE formacao SET titulo = '${titulo}', instituicao = '${instituicao}' WHERE user_key = ${user_key}`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

//DELETE

app.delete('/delete-formacao-pelo-titulo', (req, res) => {
    let titulo = req.body.titulo;
    let instituicao = req.body.instituicao
    let user_key = req.body.user_key
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `DELETE FROM formacao WHERE titulo = "${titulo}"`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});


/* Inicia o servidor */
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });



  