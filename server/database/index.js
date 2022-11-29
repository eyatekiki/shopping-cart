const db = require ('mysql2');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'Amouna&me123456789',
    database: 'mydb'
  };
  
  const conn = db.createConnection(config);

conn.connect ((err)=> {
    err ? console.log(err) : console.log("db connected");
});
module.exports =  conn
