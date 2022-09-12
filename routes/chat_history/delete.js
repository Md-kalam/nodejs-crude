const express = require('express');
const { Validator } = require('node-input-validator');
const router = express.Router();
const chat_history = require('../../model/chat_history');

router.delete('/delete', async function (req, res) {

    try {
        const val = new Validator(req.body, {
// id sirf require             
            id: "required|string",
        });
        if (! matched) {
        return res.status(422).json({status: 422, error: val.errors});
            
    } else {
        chat_history.findOneAndRemove({
            id: req.body.id
    }, function (err) {
       if (! err) {
        return res.status(200).json({"status": 200, "message": "Deleted"})
       } else {
        return res.status(404).json({"status": 404, "message": "not update"})
       }
    });

  }

    } catch (err) {
        return res.status(404).json({status: 404, message: "server error", error: err.message});

    }
});

module.exports = router; 