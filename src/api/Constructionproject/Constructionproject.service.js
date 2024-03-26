const { handleConnection } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {

    /**
     * 创建施工项目
     */
    createConstructionProject: (data, callback) => {
        const sql = `INSERT INTO ConstructionProjects (ProjectID, ProjectName, ProjectType, StartDate, EndDate, Budget, Status, SiteID, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const projectData = [
            data.ProjectID,
            data.ProjectName,
            data.ProjectType,
            data.StartDate,
            data.EndDate,
            data.Budget,
            data.Status,
            data.SiteID,
            currentTime(),
            currentTime()
        ];
        handleConnection(sql, projectData, callback);
    },

    /**
     * 获取所有施工项目
     */
    getAllConstructionProjects: (callback) => {
        const sql = `SELECT * FROM ConstructionProjects`;
        handleConnection(sql, [], callback);
    },

    /**
     * 根据ID获取施工项目
     */
    getConstructionProjectById: (id, callback) => {
        const sql = `SELECT * FROM ConstructionProjects WHERE id = ?`;
        handleConnection(sql, [id], callback);
    },

    /**
     * 根据ID更新施工项目
     */
    updateConstructionProjectById: (data, callback) => {
        const sql = `UPDATE ConstructionProjects SET ProjectID = ?, ProjectName = ?, ProjectType = ?, StartDate = ?, EndDate = ?, Budget = ?, Status = ?, SiteID = ?, updated_at = ? WHERE id = ?`;
        const projectData = [
            data.ProjectID,
            data.ProjectName,
            data.ProjectType,
            data.StartDate,
            data.EndDate,
            data.Budget,
            data.Status,
            data.SiteID,
            currentTime(),
            data.id
        ];
        handleConnection(sql, projectData, callback);
    },

    /**
     * 根据ID删除施工项目
     */
    deleteConstructionProjectById: (id, callback) => {
        const sql = `DELETE FROM ConstructionProjects WHERE id = ?`;
        handleConnection(sql, [id], callback);
    }

}
