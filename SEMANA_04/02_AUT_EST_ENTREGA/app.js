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

app.get('/experiencia', (req, res) => {
    let user_key = req.query.user_key;
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `SELECT * FROM experiencia WHERE user_key = ${user_key}`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.get('/realizacoes', (req, res) => {
    let user_key = req.query.user_key;
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `SELECT * FROM realizacoes WHERE user_key = ${user_key}`;
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

app.post('/create-experiencia', (req, res) => {
    let titulo = req.body.titulo;
    let empresa = req.body.instituicao
    let user_key = req.body.user_key
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `INSERT INTO experiencia (titulo, empresa, user_key) VALUES ('${titulo}','${empresa}',${user_key})`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.post('/create-realizacao', (req, res) => {
    let titulo = req.body.titulo;
    let data = req.body.instituicao
    let user_key = req.body.user_key
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `INSERT INTO realizacoes (titulo, data, user_key) VALUES ('${titulo}','${data}',${user_key})`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

//UPDATE

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

app.put('/update-experiencia', (req, res) => {
    let titulo = req.body.titulo;
    let empresa = req.body.instituicao
    let user_key = req.body.user_key
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `UPDATE experiencia SET titulo = '${titulo}', empresa = '${empresa}' WHERE user_key = ${user_key}`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.put('/update-realizacoes', (req, res) => {
    let titulo = req.body.titulo;
    let data = req.body.instituicao
    let user_key = req.body.user_key
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `UPDATE experiencia SET titulo = '${titulo}', data = '${data}' WHERE user_key = ${user_key}`;
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

app.delete('/delete-experiencia-pelo-titulo', (req, res) => {
    let titulo = req.body.titulo;
    let instituicao = req.body.instituicao
    let user_key = req.body.user_key
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `DELETE FROM experiencia WHERE titulo = "${titulo}"`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.delete('/delete-realizacao-pelo-titulo', (req, res) => {
    let titulo = req.body.titulo;
    let instituicao = req.body.instituicao
    let user_key = req.body.user_key
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `DELETE FROM realizacoes WHERE titulo = "${titulo}"`;
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.delete('/delete-user-pela-key', (req, res) => {
    let user_key = req.body.user_key
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `DELETE FROM user WHERE user_key = ${user_key}`;
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



  