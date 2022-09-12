const express =  require('express');
const router = express.Router();
const post_visitor_history = require('../../model/post_visitor_history');

router.get('/show', async function(req, res) {
try {
    // find all data get
   const data = await post_visitor_history.find({
    // sirf 1 get kryega 
    status : 1
   });
    return res.status(200).json({
        "status" : 200,
        "details_post_visitor_history" : data
    })
} catch (err) {
    return res.status(404).json({status: 404, message: "server error", error: err.message})
    
}
})

module.exports = router; 