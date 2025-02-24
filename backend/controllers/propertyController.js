// // // // controllers/propertyController.js
// // // const { createProperty } = require("../models/propertyModel");

// // // exports.createPropertyController = async (req, res) => {
// // //   try {
// // //     // If you are sending files using Multer, they might be in req.file or req.files
// // //     // For the main 'documents' file:
// // //     let documentsPath = null;
// // //     if (req.file) {
// // //       documentsPath = req.file.filename; // or req.file.path, depending on your config
// // //     }

// // //     // Parse the JSON data (assuming childProperties is sent as a JSON string)
// // //     const {
// // //       propertyName,
// // //       ownerName,
// // //       address,
// // //       childProperties
// // //     } = JSON.parse(req.body.formData);

// // //     const propertyId = await createProperty(
// // //       {
// // //         propertyName,
// // //         ownerName,
// // //         address,
// // //         documents: documentsPath,
// // //       },
// // //       childProperties
// // //     );

// // //     return res.status(201).json({ success: true, propertyId });
// // //   } catch (error) {
// // //     console.error("Error in createPropertyController:", error);
// // //     return res.status(500).json({ success: false, message: "Server Error" });
// // //   }
// // // };


// // // controllers/propertyController.js
// // const { createProperty } = require("../models/propertyModel");

// // exports.createPropertyController = async (req, res) => {
// //   try {
// //     let documentsPath = null;
// //     if (req.file) {
// //       documentsPath = req.file.filename;
// //     }

// //     const {
// //       propertyName,
// //       ownerName,
// //       address,
// //       childProperties
// //     } = JSON.parse(req.body.formData);

// //     // Insert property + child properties in DB
// //     const propertyId = await createProperty(
// //       {
// //         propertyName,
// //         ownerName,
// //         address,
// //         documents: documentsPath,
// //       },
// //       childProperties
// //     );

// //     return res.status(201).json({ success: true, propertyId });
// //   } catch (error) {
// //     console.error("Error in createPropertyController:", error);
// //     return res.status(500).json({ success: false, message: "Server Error" });
// //   }
// // };

// const { createProperty } = require("../models/propertyModel");

// exports.createPropertyController = async (req, res) => {
//   try {
//     let documentsPath = null;
//     if (req.file) {
//       documentsPath = req.file.filename;
//     }

//     const { propertyName, ownerName, address, childProperties } = JSON.parse(
//       req.body.formData
//     );

//     const propertyId = await createProperty(
//       {
//         propertyName,
//         ownerName,
//         address,
//         documents: documentsPath,
//       },
//       childProperties
//     );

//     return res.status(201).json({ success: true, propertyId });
//   } catch (error) {
//     console.error("Error in createPropertyController:", error);
//     return res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

const propertyModel = require("../models/propertyModel");

/**
 * GET all properties
 * Endpoint: GET /api/property
 */
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await propertyModel.getAllProperties();
    return res.json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return res.status(500).json({ error: "Failed to fetch properties" });
  }
};

/**
 * POST create a new property
 * Endpoint: POST /api/property
 */
exports.createProperty = async (req, res) => {
  try {
    // formData is sent as JSON string in req.body
    const { formData } = req.body;
    const parsedData = JSON.parse(formData);
    const { propertyName, ownerName, address, childProperties } = parsedData;

    // If a file was uploaded, store the filename in documentsPath
    let documentsPath = null;
    if (req.file) {
      documentsPath = req.file.filename;
    }

    // Create the property (and any child properties)
    const newPropertyId = await propertyModel.createProperty(
      {
        propertyName,
        ownerName,
        address,
        documents: documentsPath,
      },
      childProperties
    );

    return res.status(201).json({
      message: "Property created successfully",
      propertyId: newPropertyId,
    });
  } catch (error) {
    console.error("Error creating property:", error);
    return res.status(500).json({ error: "Failed to create property" });
  }
};

/**
 * GET property with children
 * Endpoint: GET /api/property/with-children/:id
 */
exports.getPropertyWithChildren = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await propertyModel.getPropertyWithChildren(id);

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    return res.json(property);
  } catch (error) {
    console.error("Error fetching property with children:", error);
    return res.status(500).json({ error: "Database error" });
  }
};

/**
 * PUT update an existing property
 * Endpoint: PUT /api/property/:id
 */
exports.updateProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;
    const { formData } = req.body;
    const parsedData = JSON.parse(formData);
    const { propertyName, ownerName, address, childProperties } = parsedData;

    // If a file was uploaded, store the filename
    let documentsPath = null;
    if (req.file) {
      documentsPath = req.file.filename;
    }

    // Update the property (and re-insert child properties)
    await propertyModel.updateProperty(propertyId, {
      propertyName,
      ownerName,
      address,
      documents: documentsPath,
      childProperties,
    });

    return res.status(200).json({ message: "Property updated successfully" });
  } catch (error) {
    console.error("Error updating property:", error);
    return res.status(500).json({ error: "Failed to update property" });
  }
};

/**
 * DELETE a property
 * Endpoint: DELETE /api/property/:id
 */
exports.deleteProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;
    const isDeleted = await propertyModel.deleteProperty(propertyId);

    if (!isDeleted) {
      return res.status(404).json({ error: "Property not found" });
    }
    return res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    console.error("Error deleting property:", error);
    return res.status(500).json({ error: "Failed to delete property" });
  }
};
