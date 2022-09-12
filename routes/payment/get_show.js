const express =  require('express');
const router = express.Router();
const payment = require('../../model/payment');

router.get('/show', async function(req, res) {
try {
    // find all data get
   const data = await payment.find({
    // sirf 1 get kryega 
    status : 1
   });
    return res.status(200).json({
        "status" : 200,
        "details_payment" : data
    })
} catch (err) {
    return res.status(404).json({status: 404, message: "server error", error: err.message})
    
}
})

module.exports = router; 