const { createEngineer, getAllEngineers, getEngineerById, updateEngineerById, deleteEngineerById } = require("./Engineers.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * 创建工程师
     */
    create: (req, res) => {
        const engineerData = req.body;

        isEmpty(engineerData) ?
            createEngineer(engineerData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 获取所有工程师
     */
    getAll: (req, res) => {
        getAllEngineers((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     * 根据ID获取工程师
     */
    getById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            getEngineerById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据ID更新工程师
     */
    updateById: (req, res) => {
        const engineerData = req.body;

        isEmpty(engineerData) ?
            updateEngineerById(engineerData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
    * 根据ID删除工程师
    */
    deleteById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            deleteEngineerById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
}
