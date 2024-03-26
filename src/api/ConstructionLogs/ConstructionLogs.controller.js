const { createConstructionLog, getConstructionLogById, updateConstructionLogById, deleteConstructionLogById, getAllCLog } = require("./ConstructionLogs.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * 创建施工日志
     */
    create: (req, res) => {
        const constructionLogData = req.body;

        isEmpty(constructionLogData) ?
            createConstructionLog(constructionLogData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    getAll: (req, res) => {
        getAllCLog((err, data) => {
            if (err)
                    errorRes(res, 500, err);
            successRes(res, 200, data);
        })
    },

    /**
     * 根据ID获取施工日志
     */
    getById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            getConstructionLogById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据ID更新施工日志
     */
    updateById: (req, res) => {
        const constructionLogData = req.body;

        isEmpty(constructionLogData) ?
            updateConstructionLogById(constructionLogData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据ID删除施工日志
     */
    deleteById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            deleteConstructionLogById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
}
