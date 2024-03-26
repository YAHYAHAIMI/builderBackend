const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {

    /**
     * Create a new manager
     */
    createManager: (data, callback) => {
        const sql = `INSERT INTO Managers (ManagerID, Name, Gender, Age, Contact, ManagedSite, Position, Salary, EntryDate, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const managerData = [
            data.ManagerID,
            data.Name,
            data.Gender,
            data.Age,
            data.Contact,
            data.ManagedSite,
            data.Position,
            data.Salary,
            data.EntryDate,
            currentTime(),
            currentTime()
        ];
        handleConnction(sql, managerData, callback);
    },

    /**
     * Get all managers
     */
    getAllManagers: (callback) => {
        const sql = `SELECT * FROM Managers`;
        handleConnction(sql, [], callback);
    },

    /**
     * Get manager by ID
     */
    getManagerById: (id, callback) => {
        const sql = `SELECT * FROM Managers WHERE id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * Update manager by ID
     */
    updateManagerById: (data, callback) => {
        const sql = `UPDATE Managers SET ManagerID = ?, Name = ?, Gender = ?, Age = ?, Contact = ?, ManagedSite = ?, Position = ?, Salary = ?, EntryDate = ?, updated_at = ? WHERE id = ?`;
        const managerData = [
            data.ManagerID,
            data.Name,
            data.Gender,
            data.Age,
            data.Contact,
            data.ManagedSite,
            data.Position,
            data.Salary,
            data.EntryDate,
            currentTime(),
            data.id
        ];
        handleConnction(sql, managerData, callback);
    },

    /**
     * Delete manager by ID
     */
    deleteManagerById: (id, callback) => {
        const sql = `DELETE FROM Managers WHERE id = ?`;
        handleConnction(sql, [id], callback);
    }

}
