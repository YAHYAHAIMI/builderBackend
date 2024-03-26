const { createConstructionSite, getAllConstructionSites, getConstructionSiteById, updateConstructionSiteById, deleteConstructionSiteById, listConstructionSitesByUserId } = require("./constructionSites.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * 创建施工地点
     */
    create: (req, res) => {
        const constructionSiteData = req.body;

        isEmpty(constructionSiteData) ?
            createConstructionSite(constructionSiteData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },


    /**
     * 根据用户ID获取所有施工地点
     */
    listByUserId: (req, res) => {
        const userId = req.params.id;

        isEmpty(userId) ?
            listConstructionSitesByUserId(userId, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 获取所有施工地点
     */
    getAll: (req, res) => {
        getAllConstructionSites((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     * 根据ID获取施工地点
     */
    getById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            getConstructionSiteById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据ID更新施工地点
     */
    updateById: (req, res) => {
        const constructionSiteData = req.body;

        isEmpty(constructionSiteData) ?
            updateConstructionSiteById(constructionSiteData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据ID删除施工地点
     */
    deleteById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            deleteConstructionSiteById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
}
