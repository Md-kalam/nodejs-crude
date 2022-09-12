const express = require('express');
const {Validator} = require('node-input-validator');
// express ko add
const router = express.Router();
const posts = require('../../model/posts');

router.get('/add', async function (req, res) {


    try {
        const val = new Validator(req.body, {
            name: "required|string",
            category_details: "required|string",
            image_lists: "required|"
           
        });
        const matched = await val.check();
 // ye wla condition nhi chale ye chalyega
        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors});

        } else { 
 // request aaayega to update hoga nhi toh books create aur add hoga
 posts.create({
                ad_id: req.body.ad_id,
                name: req.body.name,
                category_details: req.body.category_details,
                image_lists: req.body.image_lists,
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
