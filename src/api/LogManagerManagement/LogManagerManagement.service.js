const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {
    
    createLogManagerManagement: (data, callback) => {
        const sql = `INSERT INTO LogManagerManagement (ManagerID, LogID) VALUES (?, ?)`;
        const logManagerData = [
            data.ManagerID, 
            data.LogID
        ];
        handleConnction(sql, logManagerData, callback);
    },

    getAllLogManagerManagement: (callback) => {
        const sql = `SELECT * FROM LogManagerManagement`;
        handleConnction(sql, [], callback);
    },

    getLogManagerManagementById: (ManagerID, LogID, callback) => {
        const sql = `SELECT * FROM LogManagerManagement WHERE ManagerID = ? AND LogID = ?`;
        handleConnction(sql, [ManagerID, LogID], callback);
    },

    deleteLogManagerManagementById: (ManagerID, LogID, callback) => {
        const sql = `DELETE FROM LogManagerManagement WHERE ManagerID = ? AND LogID = ?`;
        handleConnction(sql, [ManagerID, LogID], callback);
    }
};
