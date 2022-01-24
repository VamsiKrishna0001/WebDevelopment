"use strict";

var express = require('express');

var router = express.Router();

var postApi = require('../../../controllers/api/v1/posts_api');

router.get('/', postApi.index);
module.exports = router;