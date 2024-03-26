const router = require("express").Router();

const { create, getAll, getById, updateById, deleteById } = require("./Materials.controller");
const { checkToken } = require("../../auth/authToken");

/**
 * @router: POST /api/materials
 * @desc: Create a new material
 * @access: private
 */
router.post("/", create);

/**
 * @router: GET /api/materials
 * @desc: Get all materials
 * @access: private
 */
router.get("/", getAll);

/**
 * @router: GET /api/materials/:id
 * @desc: Get material by id
 * @access: private
 */
router.get("/:id", getById);

/**
 * @router: PATCH /api/materials
 * @desc: Update material by id
 * @access: private
 */
router.patch("/", updateById);

/**
 * @router: DELETE /api/materials/:id
 * @desc: Delete material by id
 * @access: private
 */
router.delete("/:id", deleteById);

module.exports = router;
