const { createConstructionCompany, getAllConstructionCompanies, getConstructionCompanyById, updateConstructionCompanyById, deleteConstructionCompanyById } = require("./ConstructionCompanies.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * 创建施工公司
     */
    create: (req, res) => {
        const companyData = req.body;

        isEmpty(companyData) ?
            createConstructionCompany(companyData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 获取所有施工公司
     */
    getAll: (req, res) => {
        getAllConstructionCompanies((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     * 根据ID获取施工公司
     */
    getById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            getConstructionCompanyById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据ID更新施工公司
     */
    updateById: (req, res) => {
        const companyData = req.body;

        isEmpty(companyData) ?
            updateConstructionCompanyById(companyData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
    * 根据ID删除施工公司
    */
    deleteById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            deleteConstructionCompanyById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
}
