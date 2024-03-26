const { handleConnection } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {

    /**
     * 创建物料管理日志
     */
    createMaterialManagementLog: (data, callback) => {
        const sql = `INSERT INTO MaterialManagement (ManagerID, MaterialID) VALUES (?, ?)`;
        const materialManagementData = [
            data.ManagerID,
            data.MaterialID
        ];
        handleConnection(sql, materialManagementData, callback);
    },

    getAllMLog: (callback) => {
        const sql = `SELECT * FROM MaterialManagement`;
        handleConnection(sql, [], callback);
    },

    /**
     * 根据ID获取物料管理日志
     */
    getMaterialManagementLogById: (ManagerID, MaterialID, callback) => {
        const sql = `SELECT * FROM MaterialManagement WHERE ManagerID = ? AND MaterialID = ?`;
        handleConnection(sql, [ManagerID, MaterialID], callback);
    },

    /**
     * 删除物料管理日志
     */
    deleteMaterialManagementLogById: (ManagerID, MaterialID, callback) => {
        const sql = `DELETE FROM MaterialManagement WHERE ManagerID = ? AND MaterialID = ?`;
        handleConnection(sql, [ManagerID, MaterialID], callback);
    }
}
