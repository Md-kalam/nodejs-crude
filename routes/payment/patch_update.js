const express = require('express');
const { Validator } = require('node-input-validator');

const router = express.Router();
const payment = require('../../model/payment');

router.patch('/update', async function (req, res) {

    try {
    //   update result ki id    
        const val = new Validator(req.body, {
            post_id: "required|string",
            name: "required|string",
            contact_no: "required|string",
            date: "required|string",
  

        });
        const matched = await val.check();
        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors});

        } else {
          payment.where({post_id: req.body.post_id}).updateOne({
            create_post_id: req.body.post._id,
            name: req.body.name,
            contact_no: req.body.contact_no,
            date: req.body.date,

          },function (err) {
            if (!err) {
    return res.status(200).json({"status": 200, "message" : "Update"})
            } else {
    return res.status(404).json({"status": 404, "message" : "not update"})         
            
            
        }
    
});

        }
 } catch (err) {
    return res.json(404).json({ status : 404, message: "server error", error: err.message});
}

});

module.exports = router;