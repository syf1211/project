const express = require('express')
const bodyParser = require('body-parser')
const connect = require('./dbUtil/dbConnect')
const cookie = require('cookie-parser');
const resSend = require('./dbUtil/resSend')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookie())

app.post('/api/login', (req, res) => {
  const {
    username,
    userpwd
  } = req.body
  let sql = 'select * from wages where username=? and userpwd=?'
  connect.query(sql, [username, userpwd], (error, result) => {
    if (error) {
      console.log('失败')
    } else {
      if( result.length >= 1 ) {
        res.cookie('token', 'sunyanfeisunjinyuzhengtaohong', { expires: new Date(Date.now() + 90000000000), httpOnly: true });
        res.send(result[0]);
      } else {
        res.status(401).send({
          msg: '用户名密码错误'
        });
      }
    }
  })
})

app.post('/api/addStaff', function (req, res) {
  const {
    name,
    tel,
    com,
    type,
    money,
    team,
    position,
    teamId
  } = req.body
  let sql = 'insert into staff (name, tel, com, type, money, team, position,teamId) values (?,?,?,?,?,?,?,?)'
  connect.query(sql, [
    name,
    tel,
    com,
    type,
    money,
    team,
    position,
    teamId
  ], ( error, result) => {
    if( error ) {
      console.log('失败')
    }else{
      console.log(result)
      resSend(req, res, result)
    }
  })
});

app.post('/api/removeStaff', function (req, res) {
  const {
    id,
    state
  } = req.body
  let sql = 'update staff set state=? where id=?'
  connect.query(sql, [
    state,
    id
  ], ( error, result) => {
    if( error ) {
      console.log('失败')
    }else{
      console.log(result)
      resSend(req, res, {
        data:result,
        msg:'成功开除此员工'
      })
    }
  })
});

app.get('/api/getStaffList', function (req, res) {
  const {
    page = 0,
    pageSize = 10
  } = req.query
  let sql = "select count(*) num from staff"
  connect.query(sql, [], ( error, result) => {
    if( error ) {
      console.log('失败')
    }else{
      let nums = result[0].num;
      sql = "select * from staff order by id desc limit ?,?";
      connect.query(sql, [
        parseInt(page*pageSize),
        parseInt(pageSize)
      ], ( error, result) => {
        if( error ) {
          console.log('失败')
        }else{
          resSend(req, res, {
            count: nums,
            data:result
          })
        }
      })
    }
  })
});

app.get('/api/home', function (req, res) {
  if (req.cookies.token) {
    res.send({
      aa: 'aaa'
    });
  } else {
    res.status(403).send({
      msg: '请登陆'
    });
  }
});

app.listen(8989, () => console.log('this is port 8998...'))
