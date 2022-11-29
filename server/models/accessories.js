const db = require("../database/index");
module.exports = {
  getAll: (cb) => {
    let syntax = `SELECT * FROM accessories`;
    db.query(syntax, (err, res) => {
      cb(err,res)
    })
  },
  addAccessorie: (cb, values) => {
    console.log(values)
    let syntax = `INSERT INTO accessories SET name=?, description=?, price=? , images=?`; 
    db.query(syntax, values, (err, results) => {
      cb(err,results)
    });
    
  }, 
  deleteAccessorie: ( cb,id) => {
    let syntax = `DELETE FROM accessories WHERE id accessories = ?`;
    db.query(syntax,[id],(err, results) => {
        err ? cb(err, null) : cb(null, results);
      }) 

  },
  update: (cb,values) => {

    let syntax = `UPDATE accessories set name=?, description=?, price = ?, images=? WHERE idaccessories = ?`;
    db.query(syntax,values,(err, results) => {
        err ? cb(err, null) : cb(null, results);
      }) 

  },
  getOne : (cb,id)=>{
    console.log(id);
    let syntax = `SELECT *  FROM accessories WHERE idaccessories = ?`;
    db.query(syntax,JSON.parse([id]),(err, results) => {
        err ? cb(err, null) : cb(null, results);
      }) 
  }
};

