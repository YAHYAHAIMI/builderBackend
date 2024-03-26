/**
* @author:  yahay 巴希尔
*/

const { createConnection } = require('mysql')

const conn = createConnection({
    // host : process.env.DB_HOSTNAME,
    // user : process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'builder'
})

conn.connect((err) => {
    if (err) {
        console.log(err)
        throw new Error('Database Connection Error!');
    }
    console.log('Connection Success');
})

module.exports = conn