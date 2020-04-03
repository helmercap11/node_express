/**
 * Script de configuração da base de dados
 */

 // dependências
 const mysql = require('mysql');

 // Dados do servidor de base de dados
 let connection = mysql.createConnection( {
     host: 'localhost',
     user: 'root',
     password: '123456789',
     port: 3306,
     database: 'com'
 });

 // Exportar o objecto de connection para o uso nos controllers
 module.exports = connection;

 // Exportar p script de conexão com a base de daos
 module.exports.init = () => {

    // inicia a conexão com a base de dados
    connection.connect((error) => {
        if(error) {
            console.log('Erro ao conectar a base de dados');
            console.log(error);
        }else {
            console.log('Base de dados conectada com sucesso');
        }
    });
 }