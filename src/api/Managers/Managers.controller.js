const { createManager, getAllManagers, getManagerById, updateManagerById, deleteManagerById } = require("./Managers.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {

    /**
     * Create a new manager
     */
    create: (req, res) => {
        const managerData = req.body;

        isEmpty(managerData) ?
            createManager(managerData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * Get all managers
     */
    getAll: (req, res) => {
        getAllManagers((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     * Get manager by ID
     */
    getById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            getManagerById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
     * Update manager by ID
     */
    updateById: (req, res) => {
        const managerData = req.body;

        isEmpty(managerData) ?
            updateManagerById(managerData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    },

    /**
    * Delete manager by ID
    */
    deleteById: (req, res) => {
        const id = req.params.id;

        isEmpty(id) ?
            deleteManagerById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
}
