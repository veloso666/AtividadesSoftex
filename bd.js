const mysql = require('mysql');

const dbConfig = {
    host: '',    
    user: '',   
    password: '', 
    database: '' 
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conexão bem-sucedida ao banco de dados');
    }
});

 connection.end();


