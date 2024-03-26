const { createConstructionProject, getAllConstructionProjects, getConstructionProjectById, updateConstructionProjectById, deleteConstructionProjectById } = require("./Constructionproject.service.js");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * 创建施工项目
     */
    create: (req, res) => {
        const projectData = req.body;

        isEmpty(projectData) ?
            createConstructionProject(projectData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 获取所有施工项目
     */
    getAll: (req, res) => {
        getAllConstructionProjects((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     * 根据ID获取施工项目
     */
    getById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            getConstructionProjectById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * 根据ID更新施工项目
     */
    updateById: (req, res) => {
        const projectData = req.body;

        isEmpty(projectData) ?
            updateConstructionProjectById(projectData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
    * 根据ID删除施工项目
    */
    deleteById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            deleteConstructionProjectById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
}
