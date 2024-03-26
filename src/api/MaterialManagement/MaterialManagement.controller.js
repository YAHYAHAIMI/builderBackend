const { createMaterialManagementLog, getMaterialManagementLogById, deleteMaterialManagementLogById, getAllMLog } = require("./MaterialManagement.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * 创建物料管理日志
     */
    create: (req, res) => {
        const materialManagementData = req.body;

        isEmpty(materialManagementData) ?
            createMaterialManagementLog(materialManagementData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    getAll: (req, res) => {
        getAllMLog((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        })
    },

    /**
     * 根据ID获取物料管理日志
     */
    getById: (req, res) => {
        const ManagerID = req.params.ManagerID;
        const MaterialID = req.params.MaterialID;

        isEmpty(ManagerID) && isEmpty(MaterialID) ?
            getMaterialManagementLogById(ManagerID, MaterialID, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据ID删除物料管理日志
     */
    deleteById: (req, res) => {
        const ManagerID = req.params.ManagerID;
        const MaterialID = req.params.MaterialID;

        isEmpty(ManagerID) && isEmpty(MaterialID) ?
            deleteMaterialManagementLogById(ManagerID, MaterialID, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
}
