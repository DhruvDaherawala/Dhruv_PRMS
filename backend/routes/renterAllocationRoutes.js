const express = require("express");
const router = express.Router();
const multer = require("multer");
const pool = require("../config/db");
// Configure Multer (for file uploads)
const upload = multer({ dest: "uploads/" });
router.get("/", (req, res) => {
  const query = "SELECT * FROM renter_allocation";
  pool.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching allocations:", err);
      return res.status(500).json({ error: "Failed to fetch allocations" });
    }
    return res.json(results);
  });
});
router.get("/:id", (req, res) => {
  const allocationId = req.params.id;
  const query = "SELECT * FROM renter_allocation WHERE allocation_id = ?";

  pool.query(query, [allocationId], (err, result) => {
    if (err) {
      console.error("Error fetching allocation:", err);
      return res.status(500).json({ error: "Failed to fetch allocation" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Allocation not found" });
    }
    return res.json(result[0]);
  });
});
router.post(
  "/",
  upload.fields([
    { name: "agreementDocument", maxCount: 1 },
    { name: "idProof", maxCount: 1 },
  ]),
  (req, res) => {
    try {
      const { renterId, propertyId, rentAmount, startDate, endDate } = req.body;
      const agreementDocument =
        req.files["agreementDocument"]?.[0]?.filename || null;
      const idProof = req.files["idProof"]?.[0]?.filename || null;

      const insertQuery = `
        INSERT INTO renter_allocation (renterId, propertyId, rentAmount, startDate, endDate, agreementDocument, idProof)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

      pool.query(
        insertQuery,
        [
          renterId,
          propertyId,
          rentAmount,
          startDate,
          endDate,
          agreementDocument,
          idProof,
        ],
        (err) => {
          if (err) {
            console.error("Error inserting allocation:", err);
            return res
              .status(500)
              .json({ error: "Failed to create allocation" });
          }
          return res
            .status(201)
            .json({ message: "Allocation created successfully" });
        }
      );
    } catch (error) {
      console.error("Error creating allocation:", error);
      return res.status(500).json({ error: "Failed to process request" });
    }
  }
);
router.put("/:id", (req, res) => {
  const allocationId = req.params.id;
  const { renterId, propertyId, rentAmount, startDate, endDate } = req.body;

  const updateQuery = `
    UPDATE renter_allocation 
    SET renterId = ?, propertyId = ?, rentAmount = ?, startDate = ?, endDate = ?
    WHERE id = ?
  `;

  pool.query(
    updateQuery,
    [renterId, propertyId, rentAmount, startDate, endDate, allocationId],
    (err, result) => {
      if (err) {
        console.error("Error updating allocation:", err);
        return res.status(500).json({ error: "Failed to update allocation" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Allocation not found" });
      }
      return res
        .status(200)
        .json({ message: "Allocation updated successfully" });
    }
  );
});
router.delete("/:id", (req, res) => {
  const allocationId = req.params.id;
  const deleteQuery = "DELETE FROM renter_allocation WHERE id = ?";

  pool.query(deleteQuery, [allocationId], (err, result) => {
    if (err) {
      console.error("Error deleting allocation:", err);
      return res.status(500).json({ error: "Failed to delete allocation" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Allocation not found" });
    }
    return res.status(200).json({ message: "Allocation deleted successfully" });
  });
});
module.exports = router;