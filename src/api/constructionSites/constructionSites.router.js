const router = require("express").Router();

const { create, getAll, getById, updateById, deleteById, listByUserId } = require("./constructionSites.controller");
const { checkToken } = require("../../auth/authToken");

/**
 * @router: POST /api/construction-site
 * @desc: Create a new construction site
 * @access: private
 */
router.post("/", create);

/**
 * @router: GET /api/construction-site/user/:id
 * @desc: Get all construction sites by user id
 * @access: private
 */
router.get("/csr/:id", listByUserId);

/**
 * @router: GET /api/construction-site
 * @desc: Get all construction sites
 * @access: private
 */
router.get("/", getAll);

/**
 * @router: GET /api/construction-site/:id
 * @desc: Get construction site by id
 * @access: private
 */
router.get("/:id", getById);

/**
 * @router: PATCH /api/construction-site
 * @desc: Update construction site by id
 * @access: private
 */
router.patch("/", updateById);

/**
 * @router: DELETE /api/construction-site/:id
 * @desc: Delete construction site by id
 * @access: private
 */
router.delete("/:id", deleteById);

module.exports = router;
