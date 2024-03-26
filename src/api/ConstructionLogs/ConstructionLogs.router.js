const router = require("express").Router();

const { create, getById, updateById, deleteById, getAll } = require("./ConstructionLogs.controller");

/**
 * @router: POST /api/construction-log
 * @desc: Create a new construction log
 * @access: private
 */
router.post("/", create);


router.get("/", getAll)

/**
 * @router: GET /api/construction-log/:id
 * @desc: Get construction log by id
 * @access: private
 */
router.get("/:id", getById);

/**
 * @router: PATCH /api/construction-log
 * @desc: Update construction log by id
 * @access: private
 */
router.patch("/", updateById);

/**
 * @router: DELETE /api/construction-log/:id
 * @desc: Delete construction log by id
 * @access: private
 */
router.delete("/:id", deleteById);

module.exports = router;
