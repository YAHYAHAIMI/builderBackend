const router = require("express").Router();

const { create, getAll, getByIds, deleteByIds } = require("./EngineerManagement.controller");
const { checkToken } = require("../../auth/authToken");

/**
 * @router: POST /api/engineer-management
 * @desc: Create a new engineer management
 * @access: private
 */
router.post("/", checkToken, create);

/**
 * @router: GET /api/engineer-management
 * @desc: Get all engineer managements
 * @access: private
 */
router.get("/", checkToken, getAll);

/**
 * @router: GET /api/engineer-management/:ManagerID/:EngineerID
 * @desc: Get engineer management by ManagerID and EngineerID
 * @access: private
 */
router.get("/:ManagerID/:EngineerID", checkToken, getByIds);

/**
 * @router: DELETE /api/engineer-management/:ManagerID/:EngineerID
 * @desc: Delete engineer management by ManagerID and EngineerID
 * @access: private
 */
router.delete("/:ManagerID/:EngineerID", checkToken, deleteByIds);

module.exports = router;
