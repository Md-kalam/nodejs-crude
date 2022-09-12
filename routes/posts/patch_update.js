const express = require('express');
const { Validator } = require('node-input-validator');

const router = express.Router();
const Posts = require('../../model/posts');

router.patch('/update', async function (req, res) {

    try {
    //   update result ki id    
        const val = new Validator(req.body, {
            ad_id: "required|string",
            name: "required|string",
            category_details: "required|string",
            image_lists: "required|string",


        });
        const matched = await val.check();
        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors});

        } else {
            post_visitor_history.where({ad_id: req.body.ad_id}).updateOne({
            create_ad_id: req.body.ad._id,
            name: req.body.name,
            category_details: req.body.category_details,
            image_lists: req.body.image_lists,

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