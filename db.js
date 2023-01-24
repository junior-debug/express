const mysql2 = require("mysql2/promise");

async function connectDB(consult) {
  const conection = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "asistencia",
    port: "3306",
  });

  const res = await conection.query(`${consult}`);
  console.log(res);
  return res;
}

module.exports = connectDB;
