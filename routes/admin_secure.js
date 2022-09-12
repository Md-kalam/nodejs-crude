const express = require('express');
const router = express.Router();


const adminAddController = require('./admins/post_add');
router.use('/admins', adminAddController)

const adminUpdateController = require('./admins/patch_update');
router.use('/admins', adminUpdateController)

const adminDeleteController = require('./admins/delete');
router.use('/admins', adminDeleteController)


router.get('/profile', function (req, res) { 

return res.status(200).json({
    status : 200,
    user: req.user
  })
})

module.exports = router;