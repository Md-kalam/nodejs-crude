const express = require('express');
const { Validator } = require('node-input-validator');
const router = express.Router();
const admins = require('../../model/user/admins');

router.patch('/update', async function (req, res) {

    try {
    //   update result ki id    
        const val = new Validator(req.body, {
            id: "required|string",
            name: "required|string",
            email: "required|string",
            password: "required|string",
            role : "required|string"

        });
        const matched = await val.check();
        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors});

        } else {
          admins.where({id: req.body.id}).updateOne({
            create_users_id: req.body._id,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,

          },function (err) {
            if (!err) {
    return res.status(200).json({"status": 200, "message" : "Updated"})
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