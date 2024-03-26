const router = require("express").Router();

const { create, getAll, getById, updateById, deleteById } = require("./ConstructionCompanies.controller");
const { checkToken } = require("../../auth/authToken");

/**
 * @router: POST /api/construction-company
 * @desc: Create a new construction company
 * @access: private
 */
router.post("/", create);

/**
 * @router: GET /api/construction-company
 * @desc: Get all construction companies
 * @access: private
 */
router.get("/", getAll);

/**
 * @router: GET /api/construction-company/:id
 * @desc: Get construction company by id
 * @access: private
 */
router.get("/:id", getById);

/**
 * @router: PATCH /api/construction-company
 * @desc: Update construction company by id
 * @access: private
 */
router.patch("/", updateById);

/**
 * @router: DELETE /api/construction-company/:id
 * @desc: Delete construction company by id
 * @access: private
 */
router.delete("/:id", deleteById);

module.exports = router;
