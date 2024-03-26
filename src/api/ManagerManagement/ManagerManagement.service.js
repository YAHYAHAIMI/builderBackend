const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {

    /**
     * 创建管理人员关联
     */
    createManagerManagement: (data, callback) => {
        const sql = `INSERT INTO ManagerManagement (CompanyID, ManagerID) VALUES (?, ?)`;
        const managerManagementData = [
            data.CompanyID,
            data.ManagerID
        ];
        handleConnction(sql, managerManagementData, callback);
    },

    /**
     * 获取所有管理人员关联
     */
    getAllManagerManagement: (callback) => {
        const sql = `SELECT * FROM ManagerManagement`;
        handleConnction(sql, [], callback);
    },

    /**
     * 根据公司ID和管理人员ID获取管理人员关联
     */
    getManagerManagementByIds: (companyId, managerId, callback) => {
        const sql = `SELECT * FROM ManagerManagement WHERE CompanyID = ? AND ManagerID = ?`;
        handleConnction(sql, [companyId, managerId], callback);
    },

    /**
     * 根据公司ID更新管理人员关联
     */
    updateManagerManagementByCompanyId: (companyId, newManagerId, callback) => {
        const sql = `UPDATE ManagerManagement SET ManagerID = ? WHERE CompanyID = ?`;
        handleConnction(sql, [newManagerId, companyId], callback);
    },

    /**
     * 根据公司ID和管理人员ID删除管理人员关联
     */
    deleteManagerManagementByIds: (companyId, managerId, callback) => {
        const sql = `DELETE FROM ManagerManagement WHERE CompanyID = ? AND ManagerID = ?`;
        handleConnction(sql, [companyId, managerId], callback);
    }

}
