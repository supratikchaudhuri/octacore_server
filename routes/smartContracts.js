const express = require("express");
const router = express.Router();
const smartContractController = require("../controllers/smartContracts");

router.get(`/approvalEvents`, smartContractController.getApprovalEvents)
router.get('/transferEvents', smartContractController.getTransferEvents)

module.exports = router;