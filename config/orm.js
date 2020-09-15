//Import MYSQL connection
var connection = require("../config/connection.js");

//Function to loop through array and turn to string
const questionMarks = (num) => {
    let arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

//Funtion to convert strings to sql syntax
const objToSql = (ob) => {
    let arr = [];
    for (const key in ob) {
      let value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
        arr.push(`${key}=${value}`);
      }
    }
    return arr.toString();
};


//Methods for retrieving and storing data in db
const orm = {    
    selectAll: (tableInput, cb) => {      
        let queryStr = `SELECT * FROM ${tableInput};`;

        connection.query(queryStr, (err, res) => {        
            if (err) throw err;  

            cb(res);      
        });    
    },
    insertOne: (table, cols, vals, cb) => {
        let queryStr = `INSERT INTO ${table} (${cols.toString()}) `;
        queryStr += `VALUES (${printQuestionMarks(vals.length)})`;
    
        connection.query(queryStr, vals, (err, res) => {
          if (err) throw err;
    
          cb(res);
        });
    },
    updateOne: (table, objColsVals, condition, cb) => {
        let queryStr = `UPDATE ${table}`;
        queryStr += ` SET ${objToSql(objColsVals)}`;
        queryStr += ` WHERE ${condition}`;
    
        connection.query(queryStr, (err, res) => {
          if (err) throw err;
    
          cb(res);
        });
    }
    };


//Export ORM object
module.exports = orm;