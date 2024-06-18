import mysql from 'mysql'

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employeems"
})

con.connect(function(err) {
  if(err) {
    console.log("connecion error")
  } else {
    console.log('connected')
  }
})

export default con;