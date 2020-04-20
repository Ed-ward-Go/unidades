var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "horizontal"
});

/* con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); */

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM users where name = 'Edward'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
