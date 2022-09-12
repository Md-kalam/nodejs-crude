const express = require('express');
const {Validator} = require('node-input-validator');
// express ko add
const router = express.Router();
const chat_history = require('../../model/chat_history');

router.get('/add', async function (req, res) {


    try {
        const val = new Validator(req.body, {
            post_id: "required|string",
            is_buyers: "required|string",
            user_details: "required|string"
        });
        const matched = await val.check();
 // ye wla condition nhi chale ye chalyega
        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors});

        } else { 
 // request aaayega to update hoga nhi toh books create aur add hoga
            chat_history.create({
                post_id: req.body.post_id,
                is_buyers: req.body.is_buyers,
                user_details: req.body.user_details,
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
