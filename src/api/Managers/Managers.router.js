const router = require("express").Router();

const { create, getAll, getById, updateById, deleteById } = require("./Managers.controller");
const { checkToken } = require("../../auth/authToken");

/**
 * @router: POST /api/manager
 * @desc: Create a new manager
 * @access: private
 */
router.post("/", create);

/**
 * @router: GET /api/manager
 * @desc: Get all managers
 * @access: private
 */
router.get("/", getAll);

/**
 * @router: GET /api/manager/:id
 * @desc: Get manager by id
 * @access: private
 */
router.get("/:id", getById);

/**
 * @router: PATCH /api/manager
 * @desc: Update manager by id
 * @access: private
 */
router.patch("/", updateById);

/**
 * @router: DELETE /api/manager/:id
 * @desc: Delete manager by id
 * @access: private
 */
router.delete("/:id", deleteById);

module.exports = router;
