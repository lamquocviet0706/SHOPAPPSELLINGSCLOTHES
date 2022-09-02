var express = require('express');
var router = express.Router();
var UserController = require('../controller/user')
const jwt = require('jsonwebtoken')
const authenticate = require('../middle/authentication')
/* GET home page. */
router.get('/', [authenticate.CheckLogin], function(req, res, next) {
  res.redirect('/index')
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/', async function(req, res, next) {
  const {username,password}=req.body
  const user = await UserController.login(username,password)
  if(user)
  {
    const access_token = jwt.sign({username:'viet'},process.env.JWT_SECRET_KEY)
    req.session.access_token = access_token
    res.redirect('index');
    console.log(username,password)
  }
  else
  {
      res.redirect('/')
  }
});
router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err)
  {
    res.redirect('/login')
  })
});
module.exports = router;
