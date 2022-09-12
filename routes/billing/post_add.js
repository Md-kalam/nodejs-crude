const express = require('express');
const {Validator} = require('node-input-validator');
// express ko add
const router = express.Router();
const billing = require('../../model/billing');

router.get('/add', async function (req, res) {


    try {
        const val = new Validator(req.body, {
            name: "required|string",
            contact_no: "required|string",
            address_details: "required|string"
        });
        const matched = await val.check();
 // ye wla condition nhi chale ye chalyega
        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors});

        } else { 
 // request aaayega to update hoga nhi toh books create aur add hoga
            billing.create({
                create_user_id: req.user._id,
                name: req.body.name,
                contact_no: req.body.contact_no,
                address_details: req.body.address_details,
                date: Date.now(),
                status: 1
            });
            // true hue toh yeh chalyegi
            return res.status(200).json({"status": 200, "message": "ok"})
        }


    } catch (err) {
        return res.status(404).json({status: 404, message: "internal error", error: err.message});

    }
});

module.exports = router;
