const db = require("../config/db");

async function getAllAllocations() {
  const query = `
    SELECT ra.*, r.renter_name, p.property_name, cp.title
    FROM renter_allocation ra
    JOIN renters r ON ra.renter_id = r.renter_id
    JOIN properties p ON ra.property_id = p.property_id
    JOIN child_properties cp ON ra.childproperty_id = cp.childproperty_id
    WHERE ra.status = 'Active'
  `;
  const [rows] = await db.execute(query);
  return rows;
}

async function getAllocationById(id) {
  const query = `
    SELECT ra.*, r.renter_name, p.property_name, cp.title
    FROM renter_allocation ra
    JOIN renters r ON ra.renter_id = r.renter_id
    JOIN properties p ON ra.property_id = p.property_id
    JOIN child_properties cp ON ra.childproperty_id = cp.childproperty_id
    WHERE ra.allocation_id = ? AND ra.status = 'Active'
  `;
  const [rows] = await db.execute(query, [id]);
  return rows.length ? rows[0] : null;
}

async function createAllocation(allocationData) {
  const query = `
    INSERT INTO renter_allocation 
    (renter_id, property_id, childproperty_id, allocation_date, 
     rent_agreement, other_document, remarks) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    allocationData.renter_id,
    allocationData.property_id,
    allocationData.childproperty_id,
    allocationData.allocation_date,
    allocationData.rent_agreement,
    allocationData.other_document,
    allocationData.remarks,
  ];
  const [result] = await db.execute(query, values);
  return result.insertId;
}

async function updateAllocation(id, allocationData) {
  const query = `
    UPDATE renter_allocation 
    SET renter_id = ?, property_id = ?, childproperty_id = ?, 
        allocation_date = ?, rent_agreement = ?, other_document = ?, 
        remarks = ?, updated_at = CURRENT_TIMESTAMP
    WHERE allocation_id = ? AND status = 'Active'
  `;
  const values = [
    allocationData.renter_id,
    allocationData.property_id,
    allocationData.childproperty_id,
    allocationData.allocation_date,
    allocationData.rent_agreement,
    allocationData.other_document,
    allocationData.remarks,
    id,
  ];
  const [result] = await db.execute(query, values);
  return result.affectedRows > 0;
}

async function deleteAllocation(id) {
  const query = `UPDATE renter_allocation SET status = 'Inactive' WHERE allocation_id = ?`;
  const [result] = await db.execute(query, [id]);
  return result.affectedRows > 0;
}
module.exports = {
  getAllAllocations,
  getAllocationById,
  createAllocation,
  updateAllocation,
  deleteAllocation,
};