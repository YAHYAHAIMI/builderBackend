const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {

    /**
     * 创建施工公司
     */
    createConstructionCompany: (data, callback) => {
        const sql = `INSERT INTO ConstructionCompanies (CompanyID, CompanyName, Address, ContactPhone, RegistrationDate, ResponsiblePerson, QualificationLevel, Region, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const companyData = [
            data.CompanyID,
            data.CompanyName,
            data.Address,
            data.ContactPhone,
            data.RegistrationDate,
            data.ResponsiblePerson,
            data.QualificationLevel,
            data.Region,
            currentTime(),
            currentTime()
        ];
        handleConnction(sql, companyData, callback);
    },

    /**
     * 获取所有施工公司
     */
    getAllConstructionCompanies: (callback) => {
        const sql = `SELECT * FROM ConstructionCompanies`;
        handleConnction(sql, [], callback);
    },

    /**
     * 根据ID获取施工公司
     */
    getConstructionCompanyById: (id, callback) => {
        const sql = `SELECT * FROM ConstructionCompanies WHERE id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * 根据ID更新施工公司
     */
    updateConstructionCompanyById: (data, callback) => {
        const sql = `UPDATE ConstructionCompanies SET CompanyID = ?, CompanyName = ?, Address = ?, ContactPhone = ?, RegistrationDate = ?, ResponsiblePerson = ?, QualificationLevel = ?, Region = ?, updated_at = ? WHERE id = ?`;
        const companyData = [
            data.CompanyID,
            data.CompanyName,
            data.Address,
            data.ContactPhone,
            data.RegistrationDate,
            data.ResponsiblePerson,
            data.QualificationLevel,
            data.Region,
            currentTime(),
            data.id
        ];
        handleConnction(sql, companyData, callback);
    },

    /**
     * 根据ID删除施工公司
     */
    deleteConstructionCompanyById: (id, callback) => {
        const sql = `DELETE FROM ConstructionCompanies WHERE id = ?`;
        handleConnction(sql, [id], callback);
    }

}
