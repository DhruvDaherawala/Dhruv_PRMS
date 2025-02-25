// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const PropertyAllocation = () => {
//   // --- State variables ---
//   const [allocations, setAllocations] = useState([]);
//   const [properties, setProperties] = useState([]);
//   const [renters, setRenters] = useState([]);

//   const API_URL = import.meta.env.VITE_API_URL;

//   // Form state (for create/update)
//   const [formData, setFormData] = useState({
//     allocation_id: "", // for editing only
//     renter_id: "",
//     property_id: "",
//     childproperty_id: "",
//     allocation_date: "",
//     remarks: "",
//     rent_agreement: null,    // file
//     other_document: null,    // file
//   });
//   const [isEditing, setIsEditing] = useState(false); // track create vs. update form
//   const [showForm, setShowForm] = useState(false);

//   // --- Fetch data on component mount ---
//   useEffect(() => {
//     fetchAllocations();
//     fetchProperties();
//     fetchRenters();
//   }, []);

//   // --- API calls ---
//   const fetchAllocations = async () => {
//     try {
//       const response = await axios.get(`${API_URL}allocations`);
//       setAllocations(response.data); // Adjust if your backend returns { success, data }
//     } catch (err) {
//       console.error("Error fetching allocations:", err);
//     }
//   };

//   const fetchProperties = async () => {
//     try {
//       const response = await axios.get(`${API_URL}property`);
//       setProperties(response.data); // or response.data.data if your backend wraps in { data: [...] }
//     } catch (err) {
//       console.error("Error fetching properties:", err);
//     }
//   };

//   const fetchRenters = async () => {
//     try {
//       const response = await axios.get(`${API_URL}renter`);
//       setRenters(response.data);
//     } catch (err) {
//       console.error("Error fetching renters:", err);
//     }
//   };

//   // --- Handlers ---
//   const handleFormChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       // It's a file input
//       setFormData((prev) => ({ ...prev, [name]: files[0] }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleCreateNew = () => {
//     setFormData({
//       allocation_id: "",
//       renter_id: "",
//       property_id: "",
//       childproperty_id: "",
//       allocation_date: "",
//       remarks: "",
//       rent_agreement: null,
//       other_document: null,
//     });
//     setIsEditing(false);
//     setShowForm(true);
//   };

//   const handleEdit = (allocation) => {
//     setFormData({
//       allocation_id: allocation.id || allocation.allocation_id, // adapt to your DB column name
//       renter_id: allocation.renterId || allocation.renter_id,
//       property_id: allocation.propertyId || allocation.property_id,
//       childproperty_id: allocation.childproperty_id || "", // if your DB has that
//       allocation_date: allocation.startDate || allocation.allocation_date || "",
//       remarks: allocation.remarks || "",
//       rent_agreement: null, // We only re-upload if user picks a new file
//       other_document: null,
//     });
//     setIsEditing(true);
//     setShowForm(true);
//   };

//   const handleDelete = async (allocation) => {
//     if (!window.confirm("Are you sure you want to delete this allocation?")) return;
//     try {
//       await axios.delete(`${API_URL}allocations/${allocation.id || allocation.allocation_id}`);
//       alert("Allocation deleted!");
//       fetchAllocations();
//     } catch (err) {
//       console.error("Error deleting allocation:", err);
//       alert("Failed to delete allocation.");
//     }
//   };

//   const handleSubmitForm = async (e) => {
//     e.preventDefault();

//     try {
//       // Build FormData to handle file uploads
//       const fd = new FormData();
//       // Add text fields
//       fd.append("renter_id", formData.renter_id);
//       fd.append("property_id", formData.property_id);
//       fd.append("childproperty_id", formData.childproperty_id);
//       fd.append("allocation_date", formData.allocation_date);
//       fd.append("remarks", formData.remarks);
//       // Add file fields if present
//       if (formData.rent_agreement) {
//         fd.append("rent_agreement", formData.rent_agreement);
//       }
//       if (formData.other_document) {
//         fd.append("other_document", formData.other_document);
//       }

//       if (isEditing) {
//         // Update existing
//         const allocationId = formData.allocation_id;
//         await axios.put(`${API_URL}allocations/${allocationId}`, fd, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         alert("Allocation updated successfully!");
//       } else {
//         // Create new
//         await axios.post(`${API_URL}allocations`, fd, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         alert("Allocation created successfully!");
//       }

//       setShowForm(false);
//       fetchAllocations();
//     } catch (err) {
//       console.error("Error saving allocation:", err);
//       alert("Failed to save allocation.");
//     }
//   };

//   // Example of checking availability:
//   // Suppose you only want to show properties that are "Available".
//   // If you have a column property_status in your DB, you can filter:
//   // const availableProperties = properties.filter(p => p.property_status === "Available");
//   // Then use `availableProperties` in the dropdown.

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Property Allocation</h1>

//       {/* Allocation Table */}
//       <div className="bg-white p-4 rounded shadow mb-6">
//         <div className="flex justify-between mb-4">
//           <h2 className="text-xl font-semibold">Allocations</h2>
//           <button
//             onClick={handleCreateNew}
//             className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
//           >
//             Add New Allocation
//           </button>
//         </div>
//         {allocations.length === 0 ? (
//           <p>No allocations found.</p>
//         ) : (
//           <table className="min-w-full border">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="p-2 border">ID</th>
//                 <th className="p-2 border">Renter</th>
//                 <th className="p-2 border">Property</th>
//                 <th className="p-2 border">Allocation Date</th>
//                 <th className="p-2 border">Remarks</th>
//                 <th className="p-2 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {allocations.map((alloc) => (
//                 <tr key={alloc.allocation_id || alloc.id}>
//                   <td className="p-2 border">{alloc.allocation_id || alloc.id}</td>
//                   <td className="p-2 border">{alloc.renterId || alloc.renter_id}</td>
//                   <td className="p-2 border">{alloc.propertyId || alloc.property_id}</td>
//                   <td className="p-2 border">{alloc.startDate || alloc.allocation_date}</td>
//                   <td className="p-2 border">{alloc.remarks}</td>
//                   <td className="p-2 border">
//                     <button
//                       className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
//                       onClick={() => handleEdit(alloc)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="bg-red-500 text-white px-3 py-1 rounded"
//                       onClick={() => handleDelete(alloc)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* Allocation Form (Create / Edit) */}
//       {showForm && (
//         <div className="bg-white p-4 rounded shadow">
//           <h2 className="text-xl font-semibold mb-4">
//             {isEditing ? "Edit Allocation" : "Add New Allocation"}
//           </h2>
//           <form onSubmit={handleSubmitForm} className="space-y-4">
//             <div>
//               <label className="block font-medium mb-1">Renter</label>
//               <select
//                 name="renter_id"
//                 value={formData.renter_id}
//                 onChange={handleFormChange}
//                 className="border p-2 rounded w-full"
//               >
//                 <option value="">-- Select Renter --</option>
//                 {renters.map((r) => (
//                   <option key={r.renter_id || r.id} value={r.renter_id || r.id}>
//                     {r.renterName || r.renter_name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Property</label>
//               <select
//                 name="property_id"
//                 value={formData.property_id}
//                 onChange={handleFormChange}
//                 className="border p-2 rounded w-full"
//               >
//                 <option value="">-- Select Property --</option>
//                 {properties.map((p) => (
//                   <option key={p.property_id || p.id} value={p.property_id || p.id}>
//                     {p.propertyName || p.property_name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Child Property (Floor/Unit)</label>
//               <input
//                 type="text"
//                 name="childproperty_id"
//                 value={formData.childproperty_id}
//                 onChange={handleFormChange}
//                 className="border p-2 rounded w-full"
//                 placeholder="If you store a child property ID"
//               />
//               {/* 
//                 Or you can do a SELECT if you fetch child properties as well. 
//                 For example:
//                   <select name="childproperty_id" ...>
//                     <option value="">--Select Child Floor--</option>
//                     ...
//                   </select>
//               */}
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Allocation Date</label>
//               <input
//                 type="date"
//                 name="allocation_date"
//                 value={formData.allocation_date}
//                 onChange={handleFormChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Remarks</label>
//               <textarea
//                 name="remarks"
//                 value={formData.remarks}
//                 onChange={handleFormChange}
//                 className="border p-2 rounded w-full"
//               ></textarea>
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Rent Agreement (File)</label>
//               <input
//                 type="file"
//                 name="rent_agreement"
//                 onChange={handleFormChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Other Document (File)</label>
//               <input
//                 type="file"
//                 name="other_document"
//                 onChange={handleFormChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>

//             <div className="flex space-x-4">
//               <button
//                 type="submit"
//                 className="bg-green-600 text-white px-4 py-2 rounded"
//               >
//                 {isEditing ? "Update Allocation" : "Create Allocation"}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setShowForm(false)}
//                 className="bg-gray-400 text-white px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyAllocation;
// // The above code snippet is from frontend/src/Component/PropertyAllocation.jsx
// // This component displays a list of property allocations, allows the user to create new allocations, and edit or delete existing ones. It also includes file upload fields for rent agreements and other documents.
// // The component fetches data from the backend API to populate dropdowns for renters and properties. It also includes a form to create or edit allocations.


// // ----------------------------------------------------------------------------------------------------------------------------/


import React, { useEffect, useState } from "react";
import axios from "axios";

const PropertyAllocation = () => {
  // --- State variables ---
  const [allocations, setAllocations] = useState([]);
  const [properties, setProperties] = useState([]);
  const [renters, setRenters] = useState([]);
  const [childProperties, setChildProperties] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  // Form state (for create/update)
  const [formData, setFormData] = useState({
    allocation_id: "", // for editing only
    renter_id: "",
    property_id: "",
    childproperty_id: "",
    allocation_date: "",
    remarks: "",
    rent_agreement: null, // file
    other_document: null, // file
  });
  const [isEditing, setIsEditing] = useState(false); // track create vs. update
  const [showForm, setShowForm] = useState(false);

  // --- Fetch data on component mount ---
  useEffect(() => {
    fetchAllocations();
    fetchProperties();
    fetchRenters();
    fetchChildProperties();
  }, []);

  // --- API calls ---
  const fetchAllocations = async () => {
    try {
      const response = await axios.get(`${API_URL}allocations`);
      // Adjust if your backend response shape is different
      setAllocations(response.data);
    } catch (err) {
      console.error("Error fetching allocations:", err);
    }
  };

  const fetchProperties = async () => {
    try {
      const response = await axios.get(`${API_URL}property`);
      setProperties(response.data);
    } catch (err) {
      console.error("Error fetching properties:", err);
    }
  };

  const fetchRenters = async () => {
    try {
      const response = await axios.get(`${API_URL}renter`);
      setRenters(response.data);
    } catch (err) {
      console.error("Error fetching renters:", err);
    }
  };

  const fetchChildProperties = async () => {
    try {
      const response = await axios.get(`${API_URL}childproperty`);
      setChildProperties(response.data);
    } catch (err) {
      console.error("Error fetching child properties:", err);
    }
  };

  // --- Handlers ---
  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // It's a file input
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCreateNew = () => {
    setFormData({
      allocation_id: "",
      renter_id: "",
      property_id: "",
      childproperty_id: "",
      allocation_date: "",
      remarks: "",
      rent_agreement: null,
      other_document: null,
    });
    setIsEditing(false);
    setShowForm(true);
  };

  const handleEdit = (allocation) => {
    setFormData({
      allocation_id: allocation.allocation_id || allocation.id, // adjust based on your DB column
      renter_id: allocation.renter_id || allocation.renterId,
      property_id: allocation.property_id || allocation.propertyId,
      childproperty_id: allocation.childproperty_id || "",
      allocation_date: allocation.allocation_date || allocation.startDate || "",
      remarks: allocation.remarks || "",
      rent_agreement: null, // re-upload only if needed
      other_document: null,
    });
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = async (allocation) => {
    if (!window.confirm("Are you sure you want to delete this allocation?")) return;
    try {
      const allocationId = allocation.allocation_id || allocation.id;
      await axios.delete(`${API_URL}allocations/${allocationId}`);
      alert("Allocation deleted!");
      fetchAllocations();
    } catch (err) {
      console.error("Error deleting allocation:", err);
      alert("Failed to delete allocation.");
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      // Build FormData to handle file uploads
      const fd = new FormData();
      // Append text fields
      fd.append("renter_id", formData.renter_id);
      fd.append("property_id", formData.property_id);
      fd.append("childproperty_id", formData.childproperty_id);
      fd.append("allocation_date", formData.allocation_date);
      fd.append("remarks", formData.remarks);
      // Append file fields if present
      if (formData.rent_agreement) {
        fd.append("rent_agreement", formData.rent_agreement);
      }
      if (formData.other_document) {
        fd.append("other_document", formData.other_document);
      }

      if (isEditing) {
        const allocationId = formData.allocation_id;
        await axios.put(`${API_URL}allocations/${allocationId}`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Allocation updated successfully!");
      } else {
        await axios.post(`${API_URL}allocations`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Allocation created successfully!");
      }

      setShowForm(false);
      fetchAllocations();
    } catch (err) {
      console.error("Error saving allocation:", err);
      alert("Failed to save allocation.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Property Allocation</h1>

      {/* Allocation Table */}
      <div className="bg-white p-4 rounded shadow mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Allocations</h2>
          <button
            onClick={handleCreateNew}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Add New Allocation
          </button>
        </div>
        {allocations.length === 0 ? (
          <p className="text-gray-600">No allocations found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Allocation ID</th>
                  <th className="px-4 py-2 border">Renter ID</th>
                  <th className="px-4 py-2 border">Property ID</th>
                  <th className="px-4 py-2 border">Child Property ID</th>
                  <th className="px-4 py-2 border">Allocation Date</th>
                  <th className="px-4 py-2 border">Rent Agreement</th>
                  <th className="px-4 py-2 border">Other Document</th>
                  <th className="px-4 py-2 border">Remarks</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {allocations.map((alloc) => (
                  <tr key={alloc.allocation_id || alloc.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border text-center">
                      {alloc.allocation_id || alloc.id}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {alloc.renter_id || alloc.renterId}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {alloc.property_id || alloc.propertyId}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {alloc.childproperty_id || "-"}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {alloc.allocation_date || alloc.startDate || "-"}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {alloc.rent_agreement ? (
                        <a
                          href={`${API_URL}uploads/${alloc.rent_agreement}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {alloc.other_document ? (
                        <a
                          href={`${API_URL}uploads/${alloc.other_document}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-2 border text-center">{alloc.remarks || "-"}</td>
                    <td className="px-4 py-2 border text-center">{alloc.status || "Active"}</td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        onClick={() => handleEdit(alloc)}
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(alloc)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Allocation Form (Create / Edit) */}
      {showForm && (
        <div className="bg-white p-6 rounded shadow max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            {isEditing ? "Edit Allocation" : "Add New Allocation"}
          </h2>
          <form onSubmit={handleSubmitForm} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Renter</label>
              <select
                name="renter_id"
                value={formData.renter_id}
                onChange={handleFormChange}
                className="w-full border p-2 rounded"
              >
                <option value="">-- Select Renter --</option>
                {renters.map((r) => (
                  <option key={r.renter_id || r.id} value={r.renter_id || r.id}>
                    {r.renterName || r.renter_name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Property</label>
              <select
                name="property_id"
                value={formData.property_id}
                onChange={handleFormChange}
                className="w-full border p-2 rounded"
              >
                <option value="">-- Select Property --</option>
                {properties.map((p) => (
                  <option key={p.property_id || p.id} value={p.property_id || p.id}>
                    {p.propertyName || p.property_name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Child Property (Floor/Unit)</label>
              <select
                name="childproperty_id"
                value={formData.childproperty_id}
                onChange={handleFormChange}
                className="w-full border p-2 rounded"
              >
                <option value="">-- Select Child Property --</option>
                {childProperties.map((cp) => (
                  <option key={cp.childproperty_id || cp.id} value={cp.childproperty_id || cp.id}>
                    {cp.title || cp.name || "-"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Allocation Date</label>
              <input
                type="date"
                name="allocation_date"
                value={formData.allocation_date}
                onChange={handleFormChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Remarks</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleFormChange}
                className="w-full border p-2 rounded"
              ></textarea>
            </div>

            <div>
              <label className="block font-medium mb-1">Rent Agreement (File)</label>
              <input
                type="file"
                name="rent_agreement"
                onChange={handleFormChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Other Document (File)</label>
              <input
                type="file"
                name="other_document"
                onChange={handleFormChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                {isEditing ? "Update Allocation" : "Create Allocation"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PropertyAllocation;
