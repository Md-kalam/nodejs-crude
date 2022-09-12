const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { Validator } = require('node-input-validator');
const Users = require('../../model/user/users');

router.post('/', async function (req, res) {
    try {
        const val = new Validator(req.body, {
            email: "required|email",
            password: "required"

        });
        
        const matched = await val.check();
        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors})
        } else {
                                            // (user email check)
            const user = await Users.findOne({email: req.body.email});
            if (user) { // valid ko compare kia                                  //(user details)
                const validPass = await bcrypt.compare(req.body.password, user.password)

                if (validPass) {
                   var token = jwt.sign({user_details: user}, process.env.JWT_KEY, { expiresIn: 60 * 60 });

                   return res.status(200).json({status: 200, "auth-token": token})
                } else {
                    return res.status(404).json({status: 404, message: "invalid email or password"});

                }

            } else { // users ko save bhi karana hai
                return res.status(404).json({status: 404, message: "invalid email or password"});


            }

        }
    } catch (err) {
        return res.status(404).json({status: 404, message: "server error", error: err.message})

    }
});

module.exports = router;
