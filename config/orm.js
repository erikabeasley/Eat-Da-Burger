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
var orm = {
    //Select All function
    selectAll: function
    //Insert One function
    insertOne: function
    //Update One function
    updateOne: function
}

//Export ORM object
module.exports = orm;