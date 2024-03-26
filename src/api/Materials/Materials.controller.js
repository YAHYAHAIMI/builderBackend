const { createMaterial, getAllMaterials, getMaterialById, updateMaterialById, deleteMaterialById } = require("./Materials.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * 创建物料
     */
    create: (req, res) => {
        const materialData = req.body;

        isEmpty(materialData) ?
            createMaterial(materialData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 获取所有物料
     */
    getAll: (req, res) => {
        getAllMaterials((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     * 根据ID获取物料
     */
    getById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            getMaterialById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据ID更新物料
     */
    updateById: (req, res) => {
        const materialData = req.body;

        isEmpty(materialData) ?
            updateMaterialById(materialData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
    * 根据ID删除物料
    */
    deleteById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            deleteMaterialById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
}
