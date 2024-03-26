const router = require("express").Router();

const { create, getAll, getById, updateById, deleteById } = require("./Engineers.controller");
const { checkToken } = require("../../auth/authToken");

/**
 * @router: POST /api/engineers
 * @desc: 创建新工程师
 * @access: 私密的
 */
router.post("/", create);

/**
 * @router: GET /api/engineers
 * @desc: 获取所有工程师
 * @access: 私密的
 */
router.get("/", getAll);

/**
 * @router: GET /api/engineers/:id
 * @desc: 根据ID获取工程师
 * @access: 私密的
 */
router.get("/:id", getById);

/**
 * @router: PATCH /api/engineers
 * @desc: 根据ID更新工程师
 * @access: 私密的
 */
router.patch("/", updateById);

/**
 * @router: DELETE /api/engineers/:id
 * @desc: 根据ID删除工程师
 * @access: 私密的
 */
router.delete("/:id", deleteById);

module.exports = router;
