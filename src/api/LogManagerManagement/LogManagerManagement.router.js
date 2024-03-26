const router = require("express").Router();
const { create, getAll, getById, deleteById } = require("./LogManagerManagement.controller");
const { checkToken } = require("../../auth/authToken");

router.post("/", create);
router.get("/", getAll);
router.get("/:ManagerID/:LogID", getById);
router.delete("/:ManagerID/:LogID", deleteById);

module.exports = router;
