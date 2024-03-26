const { handleConnection } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {
    /**
     * 创建工程师
     */
    createEngineer: (data, callback) => {
        const sql = `INSERT INTO Engineers (EngineerID, Name, Gender, Age, Contact, Company, Position, Salary, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const engineerData = [
            data.EngineerID,
            data.Name,
            data.Gender,
            data.Age,
            data.Contact,
            data.Company,
            data.Position,
            data.Salary,
            currentTime(),
            currentTime()
        ];
        handleConnection(sql, engineerData, callback);
    },

    /**
     * 获取所有工程师
     */
    getAllEngineers: (callback) => {
        const sql = `SELECT * FROM Engineers`;
        handleConnection(sql, [], callback);
    },

    /**
     * 根据ID获取工程师
     */
    getEngineerById: (id, callback) => {
        const sql = `SELECT * FROM Engineers WHERE id = ?`;
        handleConnection(sql, [id], callback);
    },

    /**
     * 根据ID更新工程师
     */
    updateEngineerById: (data, callback) => {
        const sql = `UPDATE Engineers SET EngineerID = ?, Name = ?, Gender = ?, Age = ?, Contact = ?, Company = ?, Position = ?, Salary = ?, updated_at = ? WHERE id = ?`;
        const engineerData = [
            data.EngineerID,
            data.Name,
            data.Gender,
            data.Age,
            data.Contact,
            data.Company,
            data.Position,
            data.Salary,
            currentTime(),
            data.id
        ];
        handleConnection(sql, engineerData, callback);
    },

    /**
     * 根据ID删除工程师
     */
    deleteEngineerById: (id, callback) => {
        const sql = `DELETE FROM Engineers WHERE id = ?`;
        handleConnection(sql, [id], callback);
    }
}
