const { createConstructionSiteManagement, getAllConstructionSiteManagement, getConstructionSiteManagementById, deleteConstructionSiteManagementById } = require("./ConstructionSiteManagement.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * 创建施工现场管理
     */
    create: (req, res) => {
        const siteManagementData = req.body;

        isEmpty(siteManagementData) ?
            createConstructionSiteManagement(siteManagementData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 获取所有施工现场管理
     */
    getAll: (req, res) => {
        getAllConstructionSiteManagement((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     * 根据ID获取施工现场管理
     */
    getById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            getConstructionSiteManagementById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据ID删除施工现场管理
     */
    deleteById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            deleteConstructionSiteManagementById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
}
