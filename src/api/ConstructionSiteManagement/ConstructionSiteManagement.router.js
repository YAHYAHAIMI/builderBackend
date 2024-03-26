const router = require("express").Router();

const { create, getAll, getById, deleteById } = require("./ConstructionSiteManagement.controller");
const { checkToken } = require("../../auth/authToken");

/**
 * @router: POST /api/construction-site-management
 * @desc: Create a new construction site management
 * @access: private
 */
router.post("/", create);

/**
 * @router: GET /api/construction-site-management
 * @desc: Get all construction site managements
 * @access: private
 */
router.get("/", getAll);

/**
 * @router: GET /api/construction-site-management/:id
 * @desc: Get construction site management by id
 * @access: private
 */
router.get("/:id", getById);

/**
 * @router: DELETE /api/construction-site-management/:id
 * @desc: Delete construction site management by id
 * @access: private
 */
router.delete("/:id", deleteById);

module.exports = router;
