const express = require('express');
const {Validator} = require('node-input-validator');
const router = express.Router();
const users = require('../../model/user/users');

router.get('/add', async function (req, res) {
    try {
        const val = new Validator(req.body, {
            email: "required|email",
            password: "required",
            name: "required|string",
            contact_no: "required|string"
        });

        const matched = await val.check();

        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors})

        } else { // request ko update users create

            users.create({
                create_user_id: req.body.create_user_id,
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                contact_no: req.body.contact_no,
                date: Date.now(),
                status: 1
            })

            return res.status(200).json({"status": 200, "message": "ok"})
        }

    } catch (err) {
        return res.status(404).json({status: 404, message: "server error", error: err.message})

    }
})

module.exports = router;
