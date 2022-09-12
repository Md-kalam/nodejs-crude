const express = require('express');
const router = express.Router();
const {Validator} = require('node-input-validator');
const Admins = require('../../model/user/admins');

router.post('/', async function (req, res) { // validation
    try {
        const val = new Validator(req.body, {
            email: "required|email",
            password: "required",
            name: "required|string",
            role: "required|string"
        });
        // postman data pass karna
        const matched = await val.check();
        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors})
        } else {
            // jab crash hoga PS man if else condition lagyega
            // database delete krna phir phir request wohi aayega
            // server crash nhi hoga
            const isUserExist = await Admins.exists({email: req.body.email});
            if (isUserExist) {
                return res.status(405).json({status: 405, message: "User get Exist"})

            } else { // users ko save bhi karana hai
                Admins.create({
                    email: req.body.email,
                    password: req.body.password,
                    name: req.body.name,
                    role: req.body.role,
                    date: Date.now(),
                    status: 1
                });

            }
            return res.status(200).json({status: 200, message: "ok"})
        }
    } catch (err) {
        return res.status(404).json({status: 404, message: "server error", error: err.message})

    }

})


module.exports = router;
