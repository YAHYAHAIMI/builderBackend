const { createEngineerManagement, getAllEngineerManagements, getEngineerManagementByIds, deleteEngineerManagementByIds } = require("./EngineerManagement.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * 创建工程管理
     */
    create: (req, res) => {
        const managementData = req.body;

        isEmpty(managementData) ?
            createEngineerManagement(managementData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 获取所有工程管理
     */
    getAll: (req, res) => {
        getAllEngineerManagements((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     * 根据ManagerID和EngineerID获取工程管理
     */
    getByIds: (req, res) => {
        const { ManagerID, EngineerID } = req.params;

        isEmpty(ManagerID) || isEmpty(EngineerID) ?
            getEngineerManagementByIds(ManagerID, EngineerID, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据ManagerID和EngineerID删除工程管理
     */
    deleteByIds: (req, res) => {
        const { ManagerID, EngineerID } = req.params;

        isEmpty(ManagerID) || isEmpty(EngineerID) ?
            deleteEngineerManagementByIds(ManagerID, EngineerID, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }

}
