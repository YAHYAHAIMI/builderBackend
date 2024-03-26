const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {

    /**
     * 创建施工现场管理
     */
    createConstructionSiteManagement: (data, callback) => {
        const sql = `INSERT INTO ConstructionSiteManagement (SiteID, ManagerID) VALUES (?, ?)`;
        const siteManagementData = [
            data.SiteID,
            data.ManagerID
        ];
        handleConnction(sql, siteManagementData, callback);
    },

    /**
     * 获取所有施工现场管理
     */
    getAllConstructionSiteManagement: (callback) => {
        const sql = `SELECT * FROM ConstructionSiteManagement`;
        handleConnction(sql, [], callback);
    },

    /**
     * 根据ID获取施工现场管理
     */
    getConstructionSiteManagementById: (id, callback) => {
        const sql = `SELECT * FROM ConstructionSiteManagement WHERE ConstructionSiteManagementID = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * 根据ID删除施工现场管理
     */
    deleteConstructionSiteManagementById: (id, callback) => {
        const sql = `DELETE FROM ConstructionSiteManagement WHERE ConstructionSiteManagementID = ?`;
        handleConnction(sql, [id], callback);
    }

}
