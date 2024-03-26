const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {

    /**
     * 创建施工日志
     */
    createConstructionLog: (data, callback) => {
        const sql = `INSERT INTO ConstructionLogs (LogID, SiteID, Date, WorkContent, WorkHours, CompletionStatus, Note, Worker, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const constructionLogData = [
            data.LogID,
            data.SiteID,
            data.Date,
            data.WorkContent,
            data.WorkHours,
            data.CompletionStatus,
            data.Note,
            data.Worker,
            currentTime(),
            currentTime()
        ];
        handleConnction(sql, constructionLogData, callback);
    },


    getAllCLog: (callback) => {
        const sql = `select * from ConstructionLogs`;
        handleConnction(sql, [], callback);
    },

    /**
     * 根据施工日志ID获取施工日志
     */
    getConstructionLogById: (id, callback) => {
        const sql = `SELECT * FROM ConstructionLogs WHERE id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * 更新施工日志
     */
    updateConstructionLogById: (data, callback) => {
        const sql = `UPDATE ConstructionLogs SET LogID = ?, SiteID = ?, Date = ?, WorkContent = ?, WorkHours = ?, CompletionStatus = ?, Note = ?, Worker = ?, updated_at = ? WHERE id = ?`;
        const constructionLogData = [
            data.LogID,
            data.SiteID,
            data.Date,
            data.WorkContent,
            data.WorkHours,
            data.CompletionStatus,
            data.Note,
            data.Worker,
            currentTime(),
            data.id
        ];
        handleConnction(sql, constructionLogData, callback);
    },

    /**
     * 删除施工日志
     */
    deleteConstructionLogById: (id, callback) => {
        const sql = `DELETE FROM ConstructionLogs WHERE id = ?`;
        handleConnction(sql, [id], callback);
    }
}
