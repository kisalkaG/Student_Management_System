const mysql = require ('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'school',
    multipleStatements:true
});

connection.connect((err) => {
    if(!err){
        console.log('connection to mysql Succeed!');
    }else{
        console.log('connection to mysql failed!');
    }

});

module.exports = connection;

