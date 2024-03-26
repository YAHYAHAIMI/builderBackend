const { handleConnection } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {

    /**
     * 创建物料
     */
    createMaterial: (data, callback) => {
        const sql = `INSERT INTO Materials (MaterialID, MaterialName, Specification, Unit, Supplier, UnitPrice, Stock, PurchaseDate, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const materialData = [
            data.MaterialID,
            data.MaterialName,
            data.Specification,
            data.Unit,
            data.Supplier,
            data.UnitPrice,
            data.Stock,
            data.PurchaseDate,
            currentTime(),
            currentTime()
        ];
        handleConnection(sql, materialData, callback);
    },

    /**
     * 获取所有物料
     */
    getAllMaterials: (callback) => {
        const sql = `SELECT * FROM Materials`;
        handleConnection(sql, [], callback);
    },

    /**
     * 根据ID获取物料
     */
    getMaterialById: (id, callback) => {
        const sql = `SELECT * FROM Materials WHERE id = ?`;
        handleConnection(sql, [id], callback);
    },

    /**
     * 根据ID更新物料
     */
    updateMaterialById: (data, callback) => {
        const sql = `UPDATE Materials SET MaterialID = ?, MaterialName = ?, Specification = ?, Unit = ?, Supplier = ?, UnitPrice = ?, Stock = ?, PurchaseDate = ?, updated_at = ? WHERE id = ?`;
        const materialData = [
            data.MaterialID,
            data.MaterialName,
            data.Specification,
            data.Unit,
            data.Supplier,
            data.UnitPrice,
            data.Stock,
            data.PurchaseDate,
            currentTime(),
            data.id
        ];
        handleConnection(sql, materialData, callback);
    },

    /**
     * 根据ID删除物料
     */
    deleteMaterialById: (id, callback) => {
        const sql = `DELETE FROM Materials WHERE id = ?`;
        handleConnection(sql, [id], callback);
    }

}
