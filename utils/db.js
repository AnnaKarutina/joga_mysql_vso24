const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'joga_mysql'
})

connection.connect((error) => {
    if(error) throw error;
    console.log('MySQL server connected')
})

module.exports = connection