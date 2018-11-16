const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const uploadCloud = require('../config/cloudinary.js');








router.get('/signup', (req, res, next)=>{
    res.render('/signup')

});


router.post('/movie/add', uploadCloud.single('the-profile-pic'), (req, res, next) => {


  console.log(req.file.url);

    User.create({
      username: req.body.username,
      password: req.body.password,
      image: req.file.url
    })
      .then(()=>{
        res.redirect('/profile')
      })
      .catch((err)=>{
          next(err)
      })
});


router.get('/profile', (req, res, next)=>{
    res.render('profile')
    .then((allTheUsers)=>{
        res.render('profile', {users: allTheUsers})
    })
    .catch((err)=>{
      next(err);
    })
    
    
    
    
});







module.exports = router;