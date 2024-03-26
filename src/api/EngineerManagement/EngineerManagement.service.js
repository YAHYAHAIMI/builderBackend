const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {

    /**
     * 创建工程管理
     */
    createEngineerManagement: (data, callback) => {
        const sql = `INSERT INTO EngineerManagement (ManagerID, EngineerID) VALUES (?, ?)`;
        const managementData = [
            data.ManagerID,
            data.EngineerID
        ];
        handleConnction(sql, managementData, callback);
    },

    /**
     * 获取所有工程管理
     */
    getAllEngineerManagements: (callback) => {
        const sql = `SELECT * FROM EngineerManagement`;
        handleConnction(sql, [], callback);
    },

    /**
     * 根据ManagerID和EngineerID获取工程管理
     */
    getEngineerManagementByIds: (ManagerID, EngineerID, callback) => {
        const sql = `SELECT * FROM EngineerManagement WHERE ManagerID = ? AND EngineerID = ?`;
        handleConnction(sql, [ManagerID, EngineerID], callback);
    },

    /**
     * 根据ManagerID和EngineerID删除工程管理
     */
    deleteEngineerManagementByIds: (ManagerID, EngineerID, callback) => {
        const sql = `DELETE FROM EngineerManagement WHERE ManagerID = ? AND EngineerID = ?`;
        handleConnction(sql, [ManagerID, EngineerID], callback);
    }

}
