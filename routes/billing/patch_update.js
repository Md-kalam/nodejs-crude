const express = require('express');
const { Validator } = require('node-input-validator');
const router = express.Router();
const billing = require('../../model/billing');

router.patch('/update', async function (req, res) {

    try {
    //   update result ki id    
        const val = new Validator(req.body, {
            id: "required|string",
            name: "required|string",
            contact_no: "required|string",
            address_details: "required|string",
            payment_details : "required|string"

        });
        const matched = await val.check();
        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors});

        } else {
          billing.where({id: req.body.id}).updateOne({
            create_users_id: req.body._id,
            name: req.body.name,
            contact_no: req.body.contact_no,
            address_details: req.body.address_details,
            payment_details: req.body.payment_details,

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