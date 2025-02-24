const {
    getAllAllocations,
    getAllocationById,
    createAllocation,
    updateAllocation,
    deleteAllocation,
  } = require("../models/renterAllocationModel");
  
  const multer = require("multer");
  const path = require("path");
  
  // Configure multer for file uploads
  const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      );
    },
  });
  
  const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const isValidExt = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const isValidMime = allowedTypes.test(file.mimetype);
  
    isValidExt && isValidMime
      ? cb(null, true)
      : cb(new Error("Only JPEG, JPG, PNG, and PDFs are allowed"));
  };
  
  const upload = multer({
    storage,
    limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
    fileFilter,
  }).fields([
    { name: "rent_agreement", maxCount: 1 },
    { name: "other_document", maxCount: 1 },
  ]);
  
  // Get all allocations
  exports.getAllAllocationsController = async (req, res) => {
    try {
      const allocations = await getAllAllocations();
      return res.json({ success: true, data: allocations });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Get allocation by ID
  exports.getAllocationByIdController = async (req, res) => {
    try {
      const allocation = await getAllocationById(req.params.id);
      if (!allocation) {
        return res
          .status(404)
          .json({ success: false, message: "Allocation not found" });
      }
      return res.json({ success: true, data: allocation });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Create allocation
  exports.createAllocationController = async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ success: false, message: err.message });
      }
  
      try {
        const {
          renter_id,
          property_id,
          childproperty_id,
          allocation_date,
          remarks,
        } = req.body;
  
        const allocationData = {
          renter_id,
          property_id,
          childproperty_id,
          allocation_date,
          remarks,
          rent_agreement: req.files?.rent_agreement?.[0]?.filename || null,
          other_document: req.files?.other_document?.[0]?.filename || null,
        };
  
        const allocationId = await createAllocation(allocationData);
        return res.status(201).json({
          success: true,
          message: "Allocation created successfully",
          allocationId,
        });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
    });
  };
  
  // Update allocation
  exports.updateAllocationController = async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ success: false, message: err.message });
      }
  
      try {
        const {
          renter_id,
          property_id,
          childproperty_id,
          allocation_date,
          remarks,
        } = req.body;
  
        const allocationData = {
          renter_id,
          property_id,
          childproperty_id,
          allocation_date,
          remarks,
          rent_agreement: req.files?.rent_agreement?.[0]?.filename || null,
          other_document: req.files?.other_document?.[0]?.filename || null,
        };
  
        const success = await updateAllocation(req.params.id, allocationData);
        if (!success) {
          return res
            .status(404)
            .json({ success: false, message: "Allocation not found" });
        }
  
        return res.json({
          success: true,
          message: "Allocation updated successfully",
        });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
    });
  };
  
  // Delete allocation
  exports.deleteAllocationController = async (req, res) => {
    try {
      const success = await deleteAllocation(req.params.id);
      if (!success) {
        return res
          .status(404)
          .json({ success: false, message: "Allocation not found" });
      }
      return res.json({
        success: true,
        message: "Allocation deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };