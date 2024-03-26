const { addProjectManager, getAllProjectManagers, getProjectManagersByProjectID, deleteProjectManagersByProjectID } = require("./ProjectManagerManagement.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * 添加项目经理管理
     */
    add: (req, res) => {
        const managerData = req.body;

        isEmpty(managerData) ?
            addProjectManager(managerData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 获取所有项目经理管理
     */
    getAll: (req, res) => {
        getAllProjectManagers((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     * 根据项目ID获取项目经理管理
     */
    getByProjectID: (req, res) => {
        const projectID = req.params.projectID;

        isEmpty(projectID) ?
            getProjectManagersByProjectID(projectID, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据项目ID删除项目经理管理
     */
    deleteByProjectID: (req, res) => {
        const projectID = req.params.projectID;

        isEmpty(projectID) ?
            deleteProjectManagersByProjectID(projectID, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
}
