const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'projects',
  insecureAuth: true
})
connection.connect((err) => {
 console.log('数据连接成功')
})
connection.on( 'error', ()=>{
  console.log('数据库连接失败')
} );

module.exports = connection;
