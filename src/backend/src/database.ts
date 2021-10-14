import mysql from 'mysql';

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hyperloop'
});

export default conn;