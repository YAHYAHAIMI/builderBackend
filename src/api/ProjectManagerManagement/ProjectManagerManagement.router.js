const router = require("express").Router();

const { add, getAll, getByProjectID, deleteByProjectID } = require("./ProjectManagerManagement.controller");
const { checkToken } = require("../../auth/authToken");

/**
 * @router: POST /api/project-manager-management
 * @desc: 添加项目经理管理
 * @access: private
 */
router.post("/", checkToken, add);

/**
 * @router: GET /api/project-manager-management
 * @desc: 获取所有项目经理管理
 * @access: private
 */
router.get("/", checkToken, getAll);

/**
 * @router: GET /api/project-manager-management/:projectID
 * @desc: 根据项目ID获取项目经理管理
 * @access: private
 */
router.get("/:projectID", checkToken, getByProjectID);

/**
 * @router: DELETE /api/project-manager-management/:projectID
 * @desc: 根据项目ID删除项目经理管理
 * @access: private
 */
router.delete("/:projectID", checkToken, deleteByProjectID);

module.exports = router;
