const { createLogManagerManagement, getAllLogManagerManagement, getLogManagerManagementById, deleteLogManagerManagementById } = require("./LogManagerManagement.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js');
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");

module.exports = {
    create: (req, res) => {
        const logManagerData = req.body;

        isEmpty(logManagerData) ?
            createLogManagerManagement(logManagerData, (err, data) => {
                if (err)
                    errorRes(res, 500, err);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },
    getAll: (req, res) => {
        getAllLogManagerManagement((err, data) => {
            if (err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },
    getById: (req, res) => {
        const ManagerID = req.params.ManagerID;
        const LogID = req.params.LogID;

        isEmpty(ManagerID) || isEmpty(LogID) ?
            getLogManagerManagementById(ManagerID, LogID, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            }) :
            errorRes(res, 500, EMPTY);
    },
    deleteById: (req, res) => {
        const ManagerID = req.params.ManagerID;
        const LogID = req.params.LogID;

        isEmpty(ManagerID) || isEmpty(LogID) ?
            deleteLogManagerManagementById(ManagerID, LogID, (err, data) => {
                if (err)
                    errorRes(res, 500, err);

                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            }) :
            errorRes(res, 500, EMPTY);
    }
};
