const router = require("express").Router();
const { create, getAll, getByIds, updateByCompanyId, deleteByIds } = require("./ManagerManagement.controller");

/**
 * @router: POST /api/manager-management
 * @desc: Create a new manager management entry
 * @access: private
 */
router.post("/", create);

/**
 * @router: GET /api/manager-management
 * @desc: Get all manager management entries
 * @access: private
 */
router.get("/", getAll);

/**
 * @router: GET /api/manager-management/:companyId/:managerId
 * @desc: Get manager management entry by company ID and manager ID
 * @access: private
 */
router.get("/:companyId/:managerId", getByIds);

/**
 * @router: PATCH /api/manager-management/:companyId
 * @desc: Update manager management entry by company ID
 * @access: private
 */
router.patch("/:companyId", updateByCompanyId);

/**
 * @router: DELETE /api/manager-management/:companyId/:managerId
 * @desc: Delete manager management entry by company ID and manager ID
 * @access: private
 */
router.delete("/:companyId/:managerId", deleteByIds);

module.exports = router;
