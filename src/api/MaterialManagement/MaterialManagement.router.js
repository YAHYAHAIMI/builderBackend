const router = require("express").Router();

const { create, getById, deleteById, getAll } = require("./MaterialManagement.controller");

/**
 * @router: POST /api/material-management-log
 * @desc: Create a new material management log
 * @access: private
 */
router.post("/", create);

router.get("/", getAll)

/**
 * @router: GET /api/material-management-log/:ManagerID/:MaterialID
 * @desc: Get material management log by ManagerID and MaterialID
 * @access: private
 */
router.get("/:ManagerID/:MaterialID", getById);

/**
 * @router: DELETE /api/material-management-log/:ManagerID/:MaterialID
 * @desc: Delete material management log by ManagerID and MaterialID
 * @access: private
 */
router.delete("/:ManagerID/:MaterialID", deleteById);

module.exports = router;
