const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {

    /**
     * 添加项目经理管理
     */
    addProjectManager: (data, callback) => {
        const sql = `INSERT INTO ProjectManagerManagement (ManagerID, ProjectID) VALUES (?, ?)`;
        const managerData = [
            data.ManagerID,
            data.ProjectID
        ];
        handleConnction(sql, managerData, callback);
    },

    /**
     * 获取所有项目经理管理
     */
    getAllProjectManagers: (callback) => {
        const sql = `SELECT * FROM ProjectManagerManagement`;
        handleConnction(sql, [], callback);
    },

    /**
     * 根据项目ID获取项目经理管理
     */
    getProjectManagersByProjectID: (projectID, callback) => {
        const sql = `SELECT * FROM ProjectManagerManagement WHERE ProjectID = ?`;
        handleConnction(sql, [projectID], callback);
    },

    /**
     * 根据项目ID删除项目经理管理
     */
    deleteProjectManagersByProjectID: (projectID, callback) => {
        const sql = `DELETE FROM ProjectManagerManagement WHERE ProjectID = ?`;
        handleConnction(sql, [projectID], callback);
    }

}
