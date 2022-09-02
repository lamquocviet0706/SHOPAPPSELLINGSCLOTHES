var express = require('express');
var router = express.Router();
var AoContrller = require('../controller/Ao')
const authenticate = require('../middle/authentication')
const upload = require('../middle/upload')
// get Products lits 
router.get('/', [authenticate.CheckLogin], async function(req, res, next) {
    const ao = await AoContrller.get();
    res.render('Ao', { ao: ao });
  });

  //edit
  router.get('/edit/:id', [authenticate.CheckLogin],async function(req, res, next) {
    const {params:{id}} = req
    const ao = await AoContrller.getOne(id);
    res.render('AoEdit', { ao: ao });
  });

  //delete
  router.delete("/delete/:id", [authenticate.CheckLogin], async function(req, res, next) {
    const {params:{id}} = req
    await AoContrller.delete(id)
    res.json({result: true})
  });

//update
  router.post("/update/:id", [authenticate.CheckLogin, upload.single('avatar')], async  function(req, res, next) {
    let {params,body,file} = req
    if(file){
      let avatar ='http://192.168.0.109:2001/images/' +file.originalname
      body = {...body,avatar}
    }
    await AoContrller.update(params,body)
    res.redirect('/Ao')
  });
//ínert
router.post("/insert", [authenticate.CheckLogin], async function(req, res, next) {
  let {body} = req
  await AoContrller.insert(body)
  res.redirect('/Ao')
});


router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err)
  {
    res.status(200).json({status: true});
  })
});
module.exports = router;