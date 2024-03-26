const router = require("express").Router();

const { create, getAll, getById, updateById, deleteById } = require("./Constrructionproject.controller");
const { checkToken } = require("../../auth/authToken");

/**
 * @router: POST /api/construction-project
 * @desc: Create a new construction project
 * @access: private
 */
router.post("/", create);

/**
 * @router: GET /api/construction-project
 * @desc: Get all construction projects
 * @access: private
 */
router.get("/", getAll);

/**
 * @router: GET /api/construction-project/:id
 * @desc: Get construction project by id
 * @access: private
 */
router.get("/:id", getById);

/**
 * @router: PATCH /api/construction-project
 * @desc: Update construction project by id
 * @access: private
 */
router.patch("/", updateById);

/**
 * @router: DELETE /api/construction-project/:id
 * @desc: Delete construction project by id
 * @access: private
 */
router.delete("/:id", deleteById);

module.exports = router;
