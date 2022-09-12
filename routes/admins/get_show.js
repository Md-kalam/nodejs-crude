const express =  require('express');
const router = express.Router();
const admins = require('../../model/user/admins');

router.get('/show', async function(req, res) {
try {
    // find all data get
   const data = await admin.find({
    // sirf 1 get kryega 
    status : 1
   });
    return res.status(200).json({
        "status" : 200,
        "details_admins" : data
    })
} catch (err) {
    return res.status(404).json({status: 404, message: "server error", error: err.message})
    
}
})

module.exports = router;