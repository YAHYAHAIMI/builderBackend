const { createManagerManagement, getAllManagerManagement, getManagerManagementByIds, updateManagerManagementByCompanyId, deleteManagerManagementByIds } = require("./ManagerManagement.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * 创建管理人员关联
     */
    create: (req, res) => {
        const managerManagementData = req.body;

        isEmpty(managerManagementData) ?
            createManagerManagement(managerManagementData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 获取所有管理人员关联
     */
    getAll: (req, res) => {
        getAllManagerManagement((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     * 根据公司ID和管理人员ID获取管理人员关联
     */
    getByIds: (req, res) => {
        const { companyId, managerId } = req.params;

        isEmpty(companyId) && isEmpty(managerId) ?
            getManagerManagementByIds(companyId, managerId, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据公司ID更新管理人员关联
     */
    updateByCompanyId: (req, res) => {
        const { companyId } = req.params;
        const newManagerId = req.body.ManagerID;

        isEmpty(companyId) ?
            updateManagerManagementByCompanyId(companyId, newManagerId, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
    * 根据公司ID和管理人员ID删除管理人员关联
    */
    deleteByIds: (req, res) => {
        const { companyId, managerId } = req.params;

        isEmpty(companyId) && isEmpty(managerId) ?
            deleteManagerManagementByIds(companyId, managerId, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
}
