const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");


module.exports = {

    /**
     * 创建施工地点
     */
    createConstructionSite: (data, callback) => {
        const sql = `INSERT INTO ConstructionSites (ConstructionSiteID, SiteName, Address, Supervisor, StartDate, CompletionDate, Budget, Status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const constructionSiteData = [
            data.ConstructionSiteID,
            data.SiteName,
            data.Address,
            data.Supervisor,
            data.StartDate,
            data.CompletionDate,
            data.Budget,
            data.Status,
            currentTime(),
            currentTime()
        ];
        handleConnction(sql, constructionSiteData, callback);
    },


    /**
     * 根据用户ID获取所有施工地点
     */
    listConstructionSitesByUserId: (userId, callback) => {
        const sql = `SELECT id, ConstructionSiteID, SiteName, Address, Supervisor, StartDate, CompletionDate, Budget, Status FROM ConstructionSites WHERE Supervisor = ?`;
        handleConnction(sql, [userId], callback);
    },

    /**
     * 获取所有施工地点
     */
    getAllConstructionSites: (callback) => {
        const sql = `SELECT * FROM ConstructionSites`;
        handleConnction(sql, [], callback);
    },

    /**
     * 根据ID获取施工地点
     */
    getConstructionSiteById: (id, callback) => {
        const sql = `SELECT id, ConstructionSiteID, SiteName, Address, Supervisor, StartDate, CompletionDate, Budget, Status FROM ConstructionSites WHERE id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * 根据ID更新施工地点
     */
    updateConstructionSiteById: (data, callback) => {
        const sql = `UPDATE ConstructionSites SET ConstructionSiteID = ?, SiteName = ?, Address = ?, Supervisor = ?, StartDate = ?, CompletionDate = ?, Budget = ?, Status = ?, updated_at = ? WHERE id = ?`;
        const constructionSiteData = [
            data.ConstructionSiteID,
            data.SiteName,
            data.Address,
            data.Supervisor,
            data.StartDate,
            data.CompletionDate,
            data.Budget,
            data.Status,
            currentTime(),
            data.id
        ];
        handleConnction(sql, constructionSiteData, callback);
    },

    /**
     * 根据ID删除施工地点
     */
    deleteConstructionSiteById: (id, callback) => {
        const sql = `DELETE FROM ConstructionSites WHERE id = ?`;
        handleConnction(sql, [id], callback);
    }

}
