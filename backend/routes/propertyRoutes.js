

// // const express = require("express");
// // const router = express.Router();
// // const multer = require("multer");
// // const mysql = require("mysql2");

// // // Configure Multer (file uploads to /uploads)
// // const upload = multer({ dest: "uploads/" });

// // // Create a MySQL connection (adjust credentials as needed)
// // const pool = mysql.createPool({
// //   host: "b9qb2i6wcb7ru3fkp9ar-mysql.services.clever-cloud.com",
// //   user: "uftpi1lxgdbzjy4h",
// //   password: "mpvfUpf2ZYHGw9gR2j32",
// //   database: "b9qb2i6wcb7ru3fkp9ar",
// //   port: 3306,
// //   waitForConnections: true,
// //   connectionLimit: 10, // You can adjust this number based on the concurrency requirements
// //   queueLimit: 0
// // });

// // // Promisify the pool query method so we can use async/await
// // const promisePool = pool.promise();

// // /**
// //  * GET /api/property
// //  * Fetch all properties from the DB (no child data here, just top-level)
// //  */
// // router.get("/", async (req, res) => {
// //   try {
// //     const [rows] = await promisePool.query("SELECT * FROM properties");
// //     return res.json(rows);
// //   } catch (err) {
// //     console.error("Error fetching properties:", err);
// //     return res.status(500).json({ error: "Failed to fetch properties" });
// //   }
// // });


// // router.post("/", upload.single("documents"), async (req, res) => {
// //   try {
// //     const { formData } = req.body;
// //     const parsedData = JSON.parse(formData);

// //     const { propertyName, ownerName, address, childProperties } = parsedData;

// //     // If a file was uploaded, store the filename/path
// //     let documentsPath = null;
// //     if (req.file) {
// //       documentsPath = req.file.filename;
// //     }

// //     // Insert into 'properties' table
// //     const insertPropertyQuery = `
// //       INSERT INTO properties (propertyName, ownerName, address, documents)
// //       VALUES (?, ?, ?, ?)
// //     `;

// //     const [result] = await promisePool.query(insertPropertyQuery, [
// //       propertyName,
// //       ownerName,
// //       address,
// //       documentsPath,
// //     ]);

// //     const newPropertyId = result.insertId;

// //     // If there are childProperties, insert each
// //     if (Array.isArray(childProperties) && childProperties.length > 0) {
// //       const insertChildQuery = `
// //         INSERT INTO child_properties
// //           (property_id, floor, title, description, rooms, washroom, gas, electricity, deposit, rent)
// //         VALUES ?
// //       `;

// //       const childValues = childProperties.map((child) => [
// //         newPropertyId,
// //         child.floor,
// //         child.title,
// //         child.description,
// //         child.rooms,
// //         child.washroom,
// //         child.gas,
// //         child.electricity,
// //         child.deposit,
// //         child.rent,
// //       ]);

// //       await promisePool.query(insertChildQuery, [childValues]);

// //       return res.status(201).json({ message: "Property created with floors successfully" });
// //     } else {
// //       return res.status(201).json({ message: "Property created (no floors)" });
// //     }
// //   } catch (error) {
// //     console.error("Error saving property:", error);
// //     return res.status(500).json({ error: "Failed to save property" });
// //   }
// // });

// // /**
// //  * GET /api/property/with-children/:id
// //  * Fetch a single property and all its child_properties in one go
// //  */
// // router.get("/with-children/:id", async (req, res) => {
// //   const { id } = req.params;

// //   const query = `
// //     SELECT
// //       p.id AS propertyId,
// //       p.propertyName,
// //       p.ownerName,
// //       p.address,
// //       p.documents,
// //       cp.id AS childId,
// //       cp.floor,
// //       cp.title,
// //       cp.description,
// //       cp.rooms,
// //       cp.washroom,
// //       cp.gas,
// //       cp.electricity,
// //       cp.deposit,
// //       cp.rent
// //     FROM properties p
// //     LEFT JOIN child_properties cp
// //       ON p.id = cp.property_id
// //     WHERE p.id = ?
// //   `;

// //   try {
// //     const [rows] = await promisePool.query(query, [id]);

// //     if (!rows.length) {
// //       return res.status(404).json({ error: "Property not found" });
// //     }

// //     const property = {
// //       id: rows[0].propertyId,
// //       propertyName: rows[0].propertyName,
// //       ownerName: rows[0].ownerName,
// //       address: rows[0].address,
// //       documents: rows[0].documents,
// //       childProperties: [],
// //     };

// //     rows.forEach((row) => {
// //       if (row.childId) {
// //         property.childProperties.push({
// //           id: row.childId,
// //           floor: row.floor,
// //           title: row.title,
// //           description: row.description,
// //           rooms: row.rooms,
// //           washroom: row.washroom,
// //           gas: row.gas,
// //           electricity: row.electricity,
// //           deposit: row.deposit,
// //           rent: row.rent,
// //         });
// //       }
// //     });

// //     return res.json(property);
// //   } catch (err) {
// //     console.error("Error fetching property with children:", err);
// //     return res.status(500).json({ error: "Database error" });
// //   }
// // });


// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const multer = require("multer");

// // Use the shared promise-based pool
// const promisePool = require("../config/db");

// // Configure Multer (file uploads to /uploads)
// const upload = multer({ dest: "uploads/" });

// /**
//  * GET /api/property
//  * Fetch all properties (no child data)
//  */
// router.get("/", async (req, res) => {
//   try {
//     const [rows] = await promisePool.query("SELECT * FROM properties");
//     return res.json(rows);
//   } catch (err) {
//     console.error("Error fetching properties:", err);
//     return res.status(500).json({ error: "Failed to fetch properties" });
//   }
// });

// /**
//  * POST /api/property
//  * Create a new property with child properties
//  */
// router.post("/", upload.single("documents"), async (req, res) => {
//   try {
//     const { formData } = req.body;
//     const parsedData = JSON.parse(formData);

//     const { propertyName, ownerName, address, childProperties } = parsedData;

//     // If a file was uploaded, store the filename
//     let documentsPath = null;
//     if (req.file) {
//       documentsPath = req.file.filename;
//     }

//     // Insert into 'properties' table
//     const insertPropertyQuery = `
//       INSERT INTO properties (propertyName, ownerName, address, documents)
//       VALUES (?, ?, ?, ?)
//     `;
//     const [result] = await promisePool.query(insertPropertyQuery, [
//       propertyName,
//       ownerName,
//       address,
//       documentsPath,
//     ]);
//     const newPropertyId = result.insertId;

//     // If there are childProperties, insert them
//     if (Array.isArray(childProperties) && childProperties.length > 0) {
//       const insertChildQuery = `
//         INSERT INTO child_properties
//           (property_id, floor, title, description, rooms, washroom, gas, electricity, deposit, rent)
//         VALUES ?
//       `;

//       const childValues = childProperties.map((child) => [
//         newPropertyId,
//         child.floor,
//         child.title,
//         child.description,
//         child.rooms,
//         child.washroom,
//         child.gas,
//         child.electricity,
//         child.deposit,
//         child.rent,
//       ]);

//       await promisePool.query(insertChildQuery, [childValues]);
//       return res
//         .status(201)
//         .json({ message: "Property created with floors successfully" });
//     } else {
//       return res.status(201).json({ message: "Property created (no floors)" });
//     }
//   } catch (error) {
//     console.error("Error saving property:", error);
//     return res.status(500).json({ error: "Failed to save property" });
//   }
// });

// /**
//  * GET /api/property/with-children/:id
//  * Fetch a single property and its child properties
//  */
// router.get("/with-children/:id", async (req, res) => {
//   const { id } = req.params;
//   const query = `
//     SELECT
//       p.id AS propertyId,
//       p.propertyName,
//       p.ownerName,
//       p.address,
//       p.documents,
//       cp.id AS childId,
//       cp.floor,
//       cp.title,
//       cp.description,
//       cp.rooms,
//       cp.washroom,
//       cp.gas,
//       cp.electricity,
//       cp.deposit,
//       cp.rent
//     FROM properties p
//     LEFT JOIN child_properties cp ON p.id = cp.property_id
//     WHERE p.id = ?
//   `;

//   try {
//     const [rows] = await promisePool.query(query, [id]);
//     if (!rows.length) {
//       return res.status(404).json({ error: "Property not found" });
//     }

//     // Build the property object
//     const property = {
//       id: rows[0].propertyId,
//       propertyName: rows[0].propertyName,
//       ownerName: rows[0].ownerName,
//       address: rows[0].address,
//       documents: rows[0].documents,
//       childProperties: [],
//     };

//     // Push each child row into property.childProperties
//     rows.forEach((row) => {
//       if (row.childId) {
//         property.childProperties.push({
//           id: row.childId,
//           floor: row.floor,
//           title: row.title,
//           description: row.description,
//           rooms: row.rooms,
//           washroom: row.washroom,
//           gas: row.gas,
//           electricity: row.electricity,
//           deposit: row.deposit,
//           rent: row.rent,
//         });
//       }
//     });

//     return res.json(property);
//   } catch (err) {
//     console.error("Error fetching property with children:", err);
//     return res.status(500).json({ error: "Database error" });
//   }
// });

// /**
//  * PUT /api/property/:id
//  * Edit an existing property (and its child properties)
//  */
// router.put("/:id", upload.single("documents"), async (req, res) => {
//   try {
//     const propertyId = req.params.id;
//     const { formData } = req.body;
//     const parsedData = JSON.parse(formData);

//     const { propertyName, ownerName, address, childProperties } = parsedData;

//     // If a file was uploaded, store the filename
//     let documentsPath = null;
//     if (req.file) {
//       documentsPath = req.file.filename;
//     }

//     // Update the main property
//     const updatePropertyQuery = `
//       UPDATE properties
//       SET propertyName = ?, ownerName = ?, address = ?, documents = ?
//       WHERE id = ?
//     `;
//     await promisePool.query(updatePropertyQuery, [
//       propertyName,
//       ownerName,
//       address,
//       documentsPath,
//       propertyId,
//     ]);

//     // Remove existing child_properties for this property
//     await promisePool.query(
//       "DELETE FROM child_properties WHERE property_id = ?",
//       [propertyId]
//     );

//     // Re-insert childProperties if any
//     if (Array.isArray(childProperties) && childProperties.length > 0) {
//       const insertChildQuery = `
//         INSERT INTO child_properties
//           (property_id, floor, title, description, rooms, washroom, gas, electricity, deposit, rent)
//         VALUES ?
//       `;
//       const childValues = childProperties.map((child) => [
//         propertyId,
//         child.floor,
//         child.title,
//         child.description,
//         child.rooms,
//         child.washroom,
//         child.gas,
//         child.electricity,
//         child.deposit,
//         child.rent,
//       ]);
//       await promisePool.query(insertChildQuery, [childValues]);
//     }

//     return res.status(200).json({ message: "Property updated successfully" });
//   } catch (error) {
//     console.error("Error updating property:", error);
//     return res.status(500).json({ error: "Failed to update property" });
//   }
// });

// /**
//  * DELETE /api/property/:id
//  * (Optional) Delete an existing property and its child properties
//  */
// router.delete("/:id", async (req, res) => {
//   try {
//     const propertyId = req.params.id;

//     // First delete child properties
//     await promisePool.query(
//       "DELETE FROM child_properties WHERE property_id = ?",
//       [propertyId]
//     );

//     // Then delete the property
//     await promisePool.query("DELETE FROM properties WHERE id = ?", [
//       propertyId,
//     ]);

//     return res.status(200).json({ message: "Property deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting property:", error);
//     return res.status(500).json({ error: "Failed to delete property" });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const multer = require("multer");
const propertyController = require("../controllers/propertyController");

// Configure Multer for file uploads (saved to /uploads folder)
const upload = multer({ dest: "uploads/" });

// 1. GET all properties (no child data)
router.get("/", propertyController.getAllProperties);

// 2. POST create a new property (with optional child properties)
router.post("/", upload.single("documents"), propertyController.createProperty);

// 3. GET a property (by ID) along with its child properties
router.get("/with-children/:id", propertyController.getPropertyWithChildren);

// 4. PUT update an existing property (and replace its child properties)
router.put("/:id", upload.single("documents"), propertyController.updateProperty);

// 5. DELETE a property (and its child properties)
router.delete("/:id", propertyController.deleteProperty);

module.exports = router;
