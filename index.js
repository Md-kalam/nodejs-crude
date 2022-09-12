const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
//parse application/json
app.use(bodyParser.json());

require('./module/mongo_db');

// Admin Secure API link
const adminSecure_API = require('./routes/admin_secure')
app.use('/admin_secure', adminSecure_API)


// Admin UnSecure API link
const admin_unSecure_API = require('./routes/admin_unsecure')
app.use('/admin_unsecure', admin_unSecure_API)


// User Secure API link
const userSecure_API = require('./routes/user_secure')
const middlewareSecure = require('./middleware/token_validator');
app.use('/user_secure', middlewareSecure, userSecure_API)

// User UnSecure API link
const userUnSecure_API = require('./routes/user_unsecure')
app.use('/user_unsecure', userUnSecure_API)

app.listen(3000);