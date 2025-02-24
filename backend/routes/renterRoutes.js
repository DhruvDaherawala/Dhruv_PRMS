// // routes/renterRoutes.js
// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const renterController = require("../controllers/renterController");

// // Configure Multer
// const upload = multer({ dest: "uploads/" });

// // GET all renters
// router.get("/", renterController.getAllRenters);

// // POST create a new renter (with file uploads)
// router.post(
//   "/",
//   upload.fields([
//     { name: "aadhaarCard", maxCount: 1 },
//     { name: "panCard", maxCount: 1 },
//     { name: "passportPhoto", maxCount: 1 },
//     { name: "otherDocument", maxCount: 1 },
//   ]),
//   renterController.createRenter
// );

// // PUT update a renter
// router.put("/:id", renterController.updateRenter);

// // DELETE a renter
// router.delete("/:id", renterController.deleteRenter);

// module.exports = router;



// ----------------------------------------------------------------------------------







const express = require("express");
const router = express.Router();
const multer = require("multer");
const renterController = require("../controllers/renterController");

// Use memory storage instead of writing to "uploads/"
const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET all renters
router.get("/", renterController.getAllRenters);

// POST create a new renter (with file uploads in memory)
router.post(
  "/",
  upload.fields([
    { name: "aadhaarCard", maxCount: 1 },
    { name: "panCard", maxCount: 1 },
    { name: "passportPhoto", maxCount: 1 },
    { name: "otherDocument", maxCount: 1 },
  ]),
  renterController.createRenter
);

// PUT update a renter
router.put("/:id", renterController.updateRenter);

// DELETE a renter
router.delete("/:id", renterController.deleteRenter);

module.exports = router;
