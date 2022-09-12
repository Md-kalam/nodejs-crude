const express = require('express');
const router = express.Router();


const userAddController = require('./users/post_add');
router.use('/users', userAddController)

const userUpdateController = require('./users/patch_update');
router.use('/users', userUpdateController)

const userDeleteController = require('./users/delete');
router.use('/users', userDeleteController)


router.get('/profile', function (req, res) { 

return res.status(200).json({
    status : 200,
    user: req.user
  })
})

module.exports = router;


// login hua ha nhi pata kaise userSecure aur unsecure use hua aha middleware banyega 