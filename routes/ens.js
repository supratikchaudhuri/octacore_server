const express = require("express");
const router = express.Router();
const ensController = require("../controllers/ens");

router.get('/resolve-ens', ensController.resolveENS)
router.get('/reverse-resolve-ens', ensController.reverseResolveENS)

module.exports = router;