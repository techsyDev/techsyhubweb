const mysql = require("mysql")

const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "MOEEZ1609",
    database: "techsyhub"
})

module.exports = db