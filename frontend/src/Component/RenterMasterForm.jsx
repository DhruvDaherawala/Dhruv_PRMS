// // <<<<<<< HEAD
// // // // import { useState, useEffect } from "react";
// // // // import axios from "axios";

// // // // export default function RenterMasterForm() {
// // // //   const [renters, setRenters] = useState([]);
// // // //   const [showForm, setShowForm] = useState(false);

// // // //   const [formData, setFormData] = useState({
// // // //     renterName: "",
// // // //     fullAddress: "",
// // // //     age: "",
// // // //     numberOfStayers: "",
// // // //     aadhaarCard: null,
// // // //     panCard: null,
// // // //     passportPhoto: null,
// // // //     otherDocument: null,
// // // //     contact1: "",
// // // //     contact2: "",
// // // //     remarks: "",
// // // //   });

// // // //   // Fetch existing renters on mount
// // // //   useEffect(() => {
// // // //     fetchRenters();
// // // //   }, []);

// // // //   // GET request to fetch existing renters
// // // //   const fetchRenters = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:3001/api/renter");
// // // //       setRenters(response.data);
// // // //     } catch (error) {
// // // //       console.error("Error fetching renters:", error);
// // // //     }
// // // //   };

// // // //   // Handle text inputs
// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({ ...formData, [name]: value });
// // // //   };

// // // //   // Handle file inputs
// // // //   const handleFileChange = (e) => {
// // // //     const { name, files } = e.target;
// // // //     setFormData({ ...formData, [name]: files[0] });
// // // //   };

// // // //   // Submit form data to server
// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     try {
// // // //       const form = new FormData();

// // // //       // Append non-file fields
// // // //       Object.entries(formData).forEach(([key, value]) => {
// // // //         if (value && typeof value !== "object") {
// // // //           form.append(key, value);
// // // //         }
// // // //       });

// // // //       // Append files
// // // //       if (formData.aadhaarCard) {
// // // //         form.append("aadhaarCard", formData.aadhaarCard);
// // // //       }
// // // //       if (formData.panCard) {
// // // //         form.append("panCard", formData.panCard);
// // // //       }
// // // //       if (formData.passportPhoto) {
// // // //         form.append("passportPhoto", formData.passportPhoto);
// // // //       }
// // // //       if (formData.otherDocument) {
// // // //         form.append("otherDocument", formData.otherDocument);
// // // //       }

// // // //       // POST to server
// // // //       await axios.post("http://localhost:3001/api/renter", form, {
// // // //         headers: { "Content-Type": "multipart/form-data" },
// // // //       });

// // // //       alert("Renter data saved successfully!");
// // // //       // Refresh renters table
// // // //       fetchRenters();

// // // //       // Reset form
// // // //       setFormData({
// // // //         renterName: "",
// // // //         fullAddress: "",
// // // //         age: "",
// // // //         numberOfStayers: "",
// // // //         aadhaarCard: null,
// // // //         panCard: null,
// // // //         passportPhoto: null,
// // // //         otherDocument: null,
// // // //         contact1: "",
// // // //         contact2: "",
// // // //         remarks: "",
// // // //       });
// // // //       setShowForm(false);
// // // //     } catch (error) {
// // // //       console.error("Error saving renter data:", error);
// // // //       alert("Failed to save renter data!");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-6xl mx-auto p-4 space-y-6">
// // // //       {/* Table of existing renters */}
// // // //       <div className="bg-white shadow rounded-md p-6">
// // // //         <div className="flex items-center justify-between mb-4">
// // // //           <h2 className="text-xl font-bold text-gray-800">
// // // //             Registered Renters
// // // //           </h2>
// // // //           <button
// // // //             onClick={() => setShowForm(!showForm)}
// // // //             className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
// // // //           >
// // // //             {showForm ? "Close Form" : "Add Renter"}
// // // //           </button>
// // // //         </div>

// // // //         {renters.length === 0 ? (
// // // //           <p className="text-gray-600">No renters found.</p>
// // // //         ) : (
// // // //           <table className="min-w-full divide-y divide-gray-200">
// // // //             <thead className="bg-gray-50">
// // // //               <tr>
// // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Renter Name
// // // //                 </th>
// // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Age
// // // //                 </th>
// // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Address
// // // //                 </th>
// // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Contact1
// // // //                 </th>
// // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Contact2
// // // //                 </th>
// // // //                 <th className="px-6 py-3 w-24"></th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody className="bg-white divide-y divide-gray-200">
// // // //               {renters.map((renter) => (
// // // //                 <tr key={renter.id}>
// // // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // // //                     {renter.renterName}
// // // //                   </td>
// // // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // // //                     {renter.age}
// // // //                   </td>
// // // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // // //                     {renter.fullAddress}
// // // //                   </td>
// // // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // // //                     {renter.contact1}
// // // //                   </td>
// // // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // // //                     {renter.contact2}
// // // //                   </td>
// // // //                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // // //                     <button className="text-indigo-600 hover:text-indigo-900">
// // // //                       Details
// // // //                     </button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         )}
// // // //       </div>

// // // //       {/* Toggleable form to add a new renter */}
// // // //       {showForm && (
// // // //         <div className="bg-white p-6 rounded-2xl shadow-xl">
// // // //           <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
// // // //             Add New Renter
// // // //           </h2>
// // // //           <form onSubmit={handleSubmit} className="space-y-6">
// // // //             {/* Row 1: Renter Name + Age */}
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //               <input
// // // //                 type="text"
// // // //                 name="renterName"
// // // //                 placeholder="Renter Name"
// // // //                 value={formData.renterName}
// // // //                 onChange={handleInputChange}
// // // //                 className={formInputStyle}
// // // //               />
// // // //               <input
// // // //                 type="text"
// // // //                 name="age"
// // // //                 placeholder="Age"
// // // //                 value={formData.age}
// // // //                 onChange={handleInputChange}
// // // //                 className={formInputStyle}
// // // //               />
// // // //             </div>

// // // //             {/* Full Address */}
// // // //             <textarea
// // // //               name="fullAddress"
// // // //               placeholder="Full Address"
// // // //               value={formData.fullAddress}
// // // //               onChange={handleInputChange}
// // // //               className={`${formInputStyle} h-32`}
// // // //             ></textarea>

// // // //             {/* Row 2: Number of Stayers + Contact Number 1 */}
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //               <input
// // // //                 type="number"
// // // //                 name="numberOfStayers"
// // // //                 placeholder="Number of Stayers"
// // // //                 value={formData.numberOfStayers}
// // // //                 onChange={handleInputChange}
// // // //                 className={formInputStyle}
// // // //               />
// // // //               <input
// // // //                 type="text"
// // // //                 name="contact1"
// // // //                 placeholder="Contact Number 1"
// // // //                 value={formData.contact1}
// // // //                 onChange={handleInputChange}
// // // //                 className={formInputStyle}
// // // //               />
// // // //             </div>

// // // //             {/* Row 3: Contact Number 2 + Remarks */}
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //               <input
// // // //                 type="text"
// // // //                 name="contact2"
// // // //                 placeholder="Contact Number 2"
// // // //                 value={formData.contact2}
// // // //                 onChange={handleInputChange}
// // // //                 className={formInputStyle}
// // // //               />
// // // //               <textarea
// // // //                 name="remarks"
// // // //                 placeholder="Remarks"
// // // //                 value={formData.remarks}
// // // //                 onChange={handleInputChange}
// // // //                 className={`${formInputStyle} h-32`}
// // // //               ></textarea>
// // // //             </div>

// // // //             {/* Row 4: Aadhaar Card + PAN Card */}
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //               <div>
// // // //                 <label className="block mb-1 text-sm font-medium">
// // // //                   Aadhaar Card
// // // //                 </label>
// // // //                 <input
// // // //                   type="file"
// // // //                   name="aadhaarCard"
// // // //                   onChange={handleFileChange}
// // // //                   className={formInputStyle}
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block mb-1 text-sm font-medium">PAN Card</label>
// // // //                 <input
// // // //                   type="file"
// // // //                   name="panCard"
// // // //                   onChange={handleFileChange}
// // // //                   className={formInputStyle}
// // // //                 />
// // // //               </div>
// // // //             </div>

// // // //             {/* Row 5: Passport Photo + Other Document */}
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //               <div>
// // // //                 <label className="block mb-1 text-sm font-medium">
// // // //                   Passport Size Photo
// // // //                 </label>
// // // //                 <input
// // // //                   type="file"
// // // //                   name="passportPhoto"
// // // //                   onChange={handleFileChange}
// // // //                   className={formInputStyle}
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block mb-1 text-sm font-medium">
// // // //                   Other Document
// // // //                 </label>
// // // //                 <input
// // // //                   type="file"
// // // //                   name="otherDocument"
// // // //                   onChange={handleFileChange}
// // // //                   className={formInputStyle}
// // // //                 />
// // // //               </div>
// // // //             </div>

// // // //             {/* Submit Button */}
// // // //             <button
// // // //               type="submit"
// // // //               className="w-full bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition"
// // // //             >
// // // //               Submit
// // // //             </button>
// // // //           </form>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // // Tailwind Styles
// // // // const formInputStyle =
// // // //   "w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200";















// // // New version -----------------------------------









// // // import { useState, useEffect } from "react";
// // // import axios from "axios";

// // // export default function RenterMasterForm() {
// // //   const [renters, setRenters] = useState([]);
// // //   const [showForm, setShowForm] = useState(false);

// // //   // Form data
// // //   const [formData, setFormData] = useState({
// // //     renterName: "",
// // //     fullAddress: "",
// // //     age: "",
// // //     numberOfStayers: "",
// // //     aadhaarCard: null,
// // //     panCard: null,
// // //     passportPhoto: null,
// // //     otherDocument: null,
// // //     contact1: "",
// // //     contact2: "",
// // //     remarks: "",
// // //   });

// // //   // Fetch existing renters on mount
// // //   useEffect(() => {
// // //     fetchRenters();
// // //   }, []);

// // //   // GET request to fetch existing renters
// // //   const fetchRenters = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:3001/api/renter");
// // //       setRenters(response.data);
// // //     } catch (error) {
// // //       console.error("Error fetching renters:", error);
// // //     }
// // //   };

// // //   // Handle text inputs
// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   // Handle file inputs
// // //   const handleFileChange = (e) => {
// // //     const { name, files } = e.target;
// // //     setFormData({ ...formData, [name]: files[0] });
// // //   };

// // //   // Submit form data to server
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const form = new FormData();

// // //       // Append non-file fields
// // //       Object.entries(formData).forEach(([key, value]) => {
// // //         if (value && typeof value !== "object") {
// // //           form.append(key, value);
// // //         }
// // //       });

// // //       // Append files
// // //       if (formData.aadhaarCard) {
// // //         form.append("aadhaarCard", formData.aadhaarCard);
// // //       }
// // //       if (formData.panCard) {
// // //         form.append("panCard", formData.panCard);
// // //       }
// // //       if (formData.passportPhoto) {
// // //         form.append("passportPhoto", formData.passportPhoto);
// // //       }
// // //       if (formData.otherDocument) {
// // //         form.append("otherDocument", formData.otherDocument);
// // //       }

// // //       // POST to server
// // //       await axios.post("http://localhost:3001/api/renter", form, {
// // //         headers: { "Content-Type": "multipart/form-data" },
// // //       });

// // //       alert("Renter data saved successfully!");

// // //       // Refresh renters table
// // //       fetchRenters();

// // //       // Reset form
// // //       setFormData({
// // //         renterName: "",
// // //         fullAddress: "",
// // //         age: "",
// // //         numberOfStayers: "",
// // //         aadhaarCard: null,
// // //         panCard: null,
// // //         passportPhoto: null,
// // //         otherDocument: null,
// // //         contact1: "",
// // //         contact2: "",
// // //         remarks: "",
// // //       });
// // //       setShowForm(false);
// // //     } catch (error) {
// // //       console.error("Error saving renter data:", error);
// // //       alert("Failed to save renter data!");
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-6xl mx-auto p-4 space-y-6">
// // //       {/* Table of existing renters */}
// // //       <div className="bg-white shadow rounded-md p-6">
// // //         <div className="flex items-center justify-between mb-4">
// // //           <h2 className="text-xl font-bold text-gray-800">Registered Renters</h2>
// // //           <button
// // //             onClick={() => setShowForm(!showForm)}
// // //             className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
// // //           >
// // //             {showForm ? "Close Form" : "Add Renter"}
// // //           </button>
// // //         </div>

// // //         {renters.length === 0 ? (
// // //           <p className="text-gray-600">No renters found.</p>
// // //         ) : (
// // //           <table className="min-w-full divide-y divide-gray-200">
// // //             <thead className="bg-gray-50">
// // //               <tr>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Renter Name
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Age
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Address
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Contact1
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Contact2
// // //                 </th>
// // //                 <th className="px-6 py-3 w-24"></th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="bg-white divide-y divide-gray-200">
// // //               {renters.map((renter) => (
// // //                 <tr key={renter.id}>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                     {renter.renterName}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                     {renter.age}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                     {renter.fullAddress}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                     {renter.contact1}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                     {renter.contact2}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // //                     {/* 'Details' button - can open a modal or new page */}
// // //                     <button className="text-indigo-600 hover:text-indigo-900">
// // //                       Details
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>

// // //       {/* Toggleable form to add a new renter */}
// // //       {showForm && (
// // //         <div className="bg-white p-6 rounded-2xl shadow-xl">
// // //           <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
// // //             Add New Renter
// // //           </h2>
// // //           <form onSubmit={handleSubmit} className="space-y-6">
// // //             {/* Row 1: Renter Name + Age */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <input
// // //                 type="text"
// // //                 name="renterName"
// // //                 placeholder="Renter Name"
// // //                 value={formData.renterName}
// // //                 onChange={handleInputChange}
// // //                 className={formInputStyle}
// // //               />
// // //               <input
// // //                 type="text"
// // //                 name="age"
// // //                 placeholder="Age"
// // //                 value={formData.age}
// // //                 onChange={handleInputChange}
// // //                 className={formInputStyle}
// // //               />
// // //             </div>

// // //             {/* Full Address */}
// // //             <textarea
// // //               name="fullAddress"
// // //               placeholder="Full Address"
// // //               value={formData.fullAddress}
// // //               onChange={handleInputChange}
// // //               className={`${formInputStyle} h-32`}
// // //             ></textarea>

// // //             {/* Row 2: Number of Stayers + Contact Number 1 */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <input
// // //                 type="number"
// // //                 name="numberOfStayers"
// // //                 placeholder="Number of Stayers"
// // //                 value={formData.numberOfStayers}
// // //                 onChange={handleInputChange}
// // //                 className={formInputStyle}
// // //               />
// // //               <input
// // //                 type="text"
// // //                 name="contact1"
// // //                 placeholder="Contact Number 1"
// // //                 value={formData.contact1}
// // //                 onChange={handleInputChange}
// // //                 className={formInputStyle}
// // //               />
// // //             </div>

// // //             {/* Row 3: Contact Number 2 + Remarks */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <input
// // //                 type="text"
// // //                 name="contact2"
// // //                 placeholder="Contact Number 2"
// // //                 value={formData.contact2}
// // //                 onChange={handleInputChange}
// // //                 className={formInputStyle}
// // //               />
// // //               <textarea
// // //                 name="remarks"
// // //                 placeholder="Remarks"
// // //                 value={formData.remarks}
// // //                 onChange={handleInputChange}
// // //                 className={`${formInputStyle} h-32`}
// // //               ></textarea>
// // //             </div>

// // //             {/* Row 4: Aadhaar Card + PAN Card */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div>
// // //                 <label className="block mb-1 text-sm font-medium">
// // //                   Aadhaar Card
// // //                 </label>
// // //                 <input
// // //                   type="file"
// // //                   name="aadhaarCard"
// // //                   onChange={handleFileChange}
// // //                   className={formInputStyle}
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="block mb-1 text-sm font-medium">PAN Card</label>
// // //                 <input
// // //                   type="file"
// // //                   name="panCard"
// // //                   onChange={handleFileChange}
// // //                   className={formInputStyle}
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Row 5: Passport Photo + Other Document */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div>
// // //                 <label className="block mb-1 text-sm font-medium">
// // //                   Passport Size Photo
// // //                 </label>
// // //                 <input
// // //                   type="file"
// // //                   name="passportPhoto"
// // //                   onChange={handleFileChange}
// // //                   className={formInputStyle}
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="block mb-1 text-sm font-medium">
// // //                   Other Document
// // //                 </label>
// // //                 <input
// // //                   type="file"
// // //                   name="otherDocument"
// // //                   onChange={handleFileChange}
// // //                   className={formInputStyle}
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Submit Button */}
// // //             <button
// // //               type="submit"
// // //               className="w-full bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition"
// // //             >
// // //               Submit
// // //             </button>
// // //           </form>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // // Tailwind Styles
// // // const formInputStyle =
// // //   "w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200";







// // // -----------------------------------------------


// // =======
// // <<<<<<< HEAD
// // import { useState } from "react";
// // =======
// // >>>>>>> 738ee38fb6ac3bb4acb5a0cf71dc154fd9997351
// // import { useState, useEffect } from "react";
// // >>>>>>> 37c93552acc524bd2dac8bac41677a031a4aa8b6
// // import axios from "axios";
// // import DetailModal from "./DetailModal";

// // export default function RenterMasterForm() {
// //   const [renters, setRenters] = useState([]);
// //   const [showForm, setShowForm] = useState(false);
// //   const API_URL = import.meta.env.VITE_API_URL;

// // <<<<<<< HEAD
// //   // For detail modal
// //   const [selectedRenter, setSelectedRenter] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// // =======
// //   const [formData, setFormData] = useState({
    
// //     renterName: "",
// //     fullAddress: "",
// //     age: "",
// //     numberOfStayers: "",
// //     aadhaarCard: null,
// //     panCard: null,
// //     passportPhoto: null,
// //     otherDocument: null,
// //     contact1: "",
// //     contact2: "",
// //     remarks: "",
// //   });
// // >>>>>>> 738ee38fb6ac3bb4acb5a0cf71dc154fd9997351

// //   useEffect(() => {
// //     fetchRenters();
// //   }, []);

// //   const fetchRenters = async () => {
// //     try {
// //       const response = await axios.get(`${API_URL}/renter`);
// //       setRenters(response.data);
// //     } catch (error) {
// //       console.error("Error fetching renters:", error);
// //     }
// //   };

// //   const handleDetailsClick = (r) => {
// //     setSelectedRenter(r);
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedRenter(null);
// //   };

// // <<<<<<< HEAD
// //   // Called when user saves from the modal
// //   const handleSaveFromModal = async (updatedData) => {
// //     try {
// //       // PUT /api/renter/:id
// //       await axios.put(`${API_URL}/renter/${updatedData.id}`, updatedData);
// //       alert("Renter updated successfully!");
// // =======
// //   // Submit form data to server
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const form = new FormData();
// // <<<<<<< HEAD
// // =======

// //       // Append non-file fields
// // >>>>>>> 37c93552acc524bd2dac8bac41677a031a4aa8b6
// //       Object.entries(formData).forEach(([key, value]) => {
// //         if (value && typeof value !== "object") {
// //           form.append(key, value);
// //         }
// //       });

// //       if (formData.aadhaarCard) form.append("aadhaarCard", formData.aadhaarCard);
// //       if (formData.panCard) form.append("panCard", formData.panCard);
// //       if (formData.passportPhoto) form.append("passportPhoto", formData.passportPhoto);
// //       if (formData.otherDocument) form.append("otherDocument", formData.otherDocument);

// // <<<<<<< HEAD
// //       const response = await axios.post("http://localhost:3001/api/renter", form, {
// // =======
// //       // POST to server
// //       await axios.post("http://localhost:3001/api/renter", form, {
// // >>>>>>> 37c93552acc524bd2dac8bac41677a031a4aa8b6
// //         headers: { "Content-Type": "multipart/form-data" },
// //       });

// //       alert("Renter data saved successfully!");
// //       // Refresh renters table
// // >>>>>>> 738ee38fb6ac3bb4acb5a0cf71dc154fd9997351
// //       fetchRenters();
// //     } catch (error) {
// //       console.error("Error updating renter:", error);
// //       alert("Failed to update renter!");
// //     } finally {
// //       closeModal();
// //     }
// //   };

// //   return (
// // <<<<<<< HEAD
// //     <div className="bg-white p-10 rounded-2xl shadow-xl max-w-4xl mx-auto mt-10">
// //       <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Renter Master Form</h2>

// //       <form onSubmit={handleSubmit} className=" space-y-6">
// //         <FloatingLabelInput label="Renter Full Name" name="renterName" value={formData.renterName} onChange={handleInputChange} />
// //         <FloatingLabelInput label="Age" name="age" value={formData.age} onChange={handleInputChange} />
// //         <FloatingLabelTextarea label="Full Address" name="fullAddress" value={formData.fullAddress} onChange={handleInputChange} />

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
// //           <FloatingLabelInput label="Number of Stayers" name="numberOfStayers" value={formData.numberOfStayers} onChange={handleInputChange} />
// //           <FloatingLabelInput label="Contact Number 1" name="contact1" value={formData.contact1} onChange={handleInputChange} />
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           <FloatingLabelInput label="Contact Number 2" name="contact2" value={formData.contact2} onChange={handleInputChange} />
// //           <FloatingLabelInput label="Remarks" name="remarks" value={formData.remarks} onChange={handleInputChange} />
// //         </div>

// //         <FileInput label="Aadhaar Card" name="aadhaarCard" onChange={handleFileChange} />
// //         <FileInput label="PAN Card" name="panCard" onChange={handleFileChange} />
// //         <FileInput label="Passport Size Photo" name="passportPhoto" onChange={handleFileChange} />
// //         <FileInput label="Other Document" name="otherDocument" onChange={handleFileChange} />

// //         <button type="submit" className="w-full bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition">Submit</button>
// //       </form>
// // =======
// //     <div className="max-w-6xl mx-auto p-4 space-y-6">
// //       <div className="bg-white shadow rounded-md p-6">
// //         <div className="flex items-center justify-between mb-4">
// //           <h2 className="text-xl font-bold text-gray-800">
// //             Registered Renters
// //           </h2>
// //           <button
// //             onClick={() => setShowForm(!showForm)}
// //             className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
// //           >
// //             {showForm ? "Close Form" : "Add Renter"}
// //           </button>
// //         </div>

// //         {renters.length === 0 ? (
// //           <p className="text-gray-600">No renters found.</p>
// //         ) : (
// //           <table className="min-w-full divide-y divide-gray-200">
// //             <thead className="bg-gray-50">
// //               <tr>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
// //                   ID
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
// //                   Renter Name
// //                 </th>
// //                 <th className="px-6 py-3 w-24"></th>
// //               </tr>
// //             </thead>
// //             <tbody className="bg-white divide-y divide-gray-200">
// //               {renters.map((r) => (
// //                 <tr key={r.id}>
// //                   <td className="px-6 py-4 text-sm text-gray-700">{r.id}</td>
// //                   <td className="px-6 py-4 text-sm text-gray-700">
// //                     {r.renterName}
// //                   </td>
// //                   <td className="px-6 py-4 text-right text-sm font-medium">
// //                     <button
// //                       onClick={() => handleDetailsClick(r)}
// //                       className="text-indigo-600 hover:text-indigo-900"
// //                     >
// //                       Details
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>

// //       {/* Add Renter Form code goes here... */}

// // <<<<<<< HEAD
// //       <DetailModal
// //         isOpen={isModalOpen}
// //         title="Renter Details"
// //         rowData={selectedRenter}
// //         onClose={closeModal}
// //         onSave={handleSaveFromModal}
// //       />
// // =======
// //             {/* Full Address */}
// //             <textarea
// //               name="fullAddress"
// //               placeholder="Full Address"
// //               value={formData.fullAddress}
// //               onChange={handleInputChange}
// //               className={`${formInputStyle} h-32`}
// //             ></textarea>

// //             {/* Row 2: Number of Stayers + Contact Number 1 */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <input
// //                 type="number"
// //                 name="numberOfStayers"
// //                 placeholder="Number of Stayers"
// //                 value={formData.numberOfStayers}
// //                 onChange={handleInputChange}
// //                 className={formInputStyle}
// //               />
// //               <input
// //                 type="text"
// //                 name="contact1"
// //                 placeholder="Contact Number 1"
// //                 value={formData.contact1}
// //                 onChange={handleInputChange}
// //                 className={formInputStyle}
// //               />
// //             </div>

// //             {/* Row 3: Contact Number 2 + Remarks */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <input
// //                 type="text"
// //                 name="contact2"
// //                 placeholder="Contact Number 2"
// //                 value={formData.contact2}
// //                 onChange={handleInputChange}
// //                 className={formInputStyle}
// //               />
// //               <textarea
// //                 name="remarks"
// //                 placeholder="Remarks"
// //                 value={formData.remarks}
// //                 onChange={handleInputChange}
// //                 className={`${formInputStyle} h-32`}
// //               ></textarea>
// //             </div>

// //             {/* Row 4: Aadhaar Card + PAN Card */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label className="block mb-1 text-sm font-medium">
// //                   Aadhaar Card
// //                 </label>
// //                 <input
// //                   type="file"
// //                   name="aadhaarCard"
// //                   onChange={handleFileChange}
// //                   className={formInputStyle}
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block mb-1 text-sm font-medium">PAN Card</label>
// //                 <input
// //                   type="file"
// //                   name="panCard"
// //                   onChange={handleFileChange}
// //                   className={formInputStyle}
// //                 />
// //               </div>
// //             </div>

// //             {/* Row 5: Passport Photo + Other Document */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label className="block mb-1 text-sm font-medium">
// //                   Passport Size Photo
// //                 </label>
// //                 <input
// //                   type="file"
// //                   name="passportPhoto"
// //                   onChange={handleFileChange}
// //                   className={formInputStyle}
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block mb-1 text-sm font-medium">
// //                   Other Document
// //                 </label>
// //                 <input
// //                   type="file"
// //                   name="otherDocument"
// //                   onChange={handleFileChange}
// //                   className={formInputStyle}
// //                 />
// //               </div>
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               className="w-full bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition"
// //             >
// //               Submit
// //             </button>
// //           </form>
// //         </div>
// //       )}
// // >>>>>>> 37c93552acc524bd2dac8bac41677a031a4aa8b6
// // >>>>>>> 738ee38fb6ac3bb4acb5a0cf71dc154fd9997351
// //     </div>
// //   );
// // }

// // <<<<<<< HEAD





// // =======
// // <<<<<<< HEAD
// // const FloatingLabelInput = ({ label, name, value, onChange }) => {
// //   return (
// //     <div className="relative w-full">
// //       <input type="text" name={name} value={value} onChange={onChange} placeholder=" "
// //         className="peer w-full p-4 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none bg-white" />
// //       <label className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500 px-1 bg-white">
// //         {label}
// //       </label>
// //     </div>
// //   );
// // };

// // const FloatingLabelTextarea = ({ label, name, value, onChange }) => {
// //   return (
// //     <div className="relative w-full">
// //       <textarea name={name} value={value} onChange={onChange} placeholder=" "
// //         className="peer w-full p-4 h-32 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none bg-white" ></textarea>
// //       <label className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500 px-1 bg-white">
// //         {label}
// //       </label>
// //     </div>
// //   );
// // };

// // const FileInput = ({ label, name, onChange }) => {
// //   return (
// //     <div className="relative w-full">
// //       <label className="block text-gray-700 font-semibold mb-1">{label}</label>
// //       <input type="file" name={name} onChange={onChange} className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 file:bg-indigo-600 file:text-white file:px-4 file:py-2 file:border-none file:rounded-lg hover:file:bg-indigo-700" />
// //     </div>
// //   );
// // };
 
// // =======
// // // Tailwind Styles
// // const formInputStyle =
// //   "w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200";
// // >>>>>>> 37c93552acc524bd2dac8bac41677a031a4aa8b6
// // >>>>>>> 738ee38fb6ac3bb4acb5a0cf71dc154fd9997351





// // ------------------------------------------------------------------------------------------------























// // // import { useState, useEffect } from "react";
// // // import axios from "axios";

// // // export default function RenterMasterForm() {
// // //   const [renters, setRenters] = useState([]);
// // //   const [showForm, setShowForm] = useState(false);

// // //   const [formData, setFormData] = useState({
// // //     renterName: "",
// // //     fullAddress: "",
// // //     age: "",
// // //     numberOfStayers: "",
// // //     aadhaarCard: null,
// // //     panCard: null,
// // //     passportPhoto: null,
// // //     otherDocument: null,
// // //     contact1: "",
// // //     contact2: "",
// // //     remarks: "",
// // //   });

// // //   // Fetch existing renters on mount
// // //   useEffect(() => {
// // //     fetchRenters();
// // //   }, []);

// // //   // GET request to fetch existing renters
// // //   const fetchRenters = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:3001/api/renter");
// // //       setRenters(response.data);
// // //     } catch (error) {
// // //       console.error("Error fetching renters:", error);
// // //     }
// // //   };

// // //   // Handle text inputs
// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   // Handle file inputs
// // //   const handleFileChange = (e) => {
// // //     const { name, files } = e.target;
// // //     setFormData({ ...formData, [name]: files[0] });
// // //   };

// // //   // Submit form data to server
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const form = new FormData();

// // //       // Append non-file fields
// // //       Object.entries(formData).forEach(([key, value]) => {
// // //         if (value && typeof value !== "object") {
// // //           form.append(key, value);
// // //         }
// // //       });

// // //       // Append files
// // //       if (formData.aadhaarCard) {
// // //         form.append("aadhaarCard", formData.aadhaarCard);
// // //       }
// // //       if (formData.panCard) {
// // //         form.append("panCard", formData.panCard);
// // //       }
// // //       if (formData.passportPhoto) {
// // //         form.append("passportPhoto", formData.passportPhoto);
// // //       }
// // //       if (formData.otherDocument) {
// // //         form.append("otherDocument", formData.otherDocument);
// // //       }

// // //       // POST to server
// // //       await axios.post("http://localhost:3001/api/renter", form, {
// // //         headers: { "Content-Type": "multipart/form-data" },
// // //       });

// // //       alert("Renter data saved successfully!");
// // //       // Refresh renters table
// // //       fetchRenters();

// // //       // Reset form
// // //       setFormData({
// // //         renterName: "",
// // //         fullAddress: "",
// // //         age: "",
// // //         numberOfStayers: "",
// // //         aadhaarCard: null,
// // //         panCard: null,
// // //         passportPhoto: null,
// // //         otherDocument: null,
// // //         contact1: "",
// // //         contact2: "",
// // //         remarks: "",
// // //       });
// // //       setShowForm(false);
// // //     } catch (error) {
// // //       console.error("Error saving renter data:", error);
// // //       alert("Failed to save renter data!");
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-6xl mx-auto p-4 space-y-6">
// // //       {/* Table of existing renters */}
// // //       <div className="bg-white shadow rounded-md p-6">
// // //         <div className="flex items-center justify-between mb-4">
// // //           <h2 className="text-xl font-bold text-gray-800">
// // //             Registered Renters
// // //           </h2>
// // //           <button
// // //             onClick={() => setShowForm(!showForm)}
// // //             className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
// // //           >
// // //             {showForm ? "Close Form" : "Add Renter"}
// // //           </button>
// // //         </div>

// // //         {renters.length === 0 ? (
// // //           <p className="text-gray-600">No renters found.</p>
// // //         ) : (
// // //           <table className="min-w-full divide-y divide-gray-200">
// // //             <thead className="bg-gray-50">
// // //               <tr>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Renter Name
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Age
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Address
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Contact1
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Contact2
// // //                 </th>
// // //                 <th className="px-6 py-3 w-24"></th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="bg-white divide-y divide-gray-200">
// // //               {renters.map((renter) => (
// // //                 <tr key={renter.id}>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                     {renter.renterName}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                     {renter.age}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                     {renter.fullAddress}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                     {renter.contact1}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                     {renter.contact2}
// // //                   </td>
// // //                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // //                     <button className="text-indigo-600 hover:text-indigo-900">
// // //                       Details
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>

// // //       {/* Toggleable form to add a new renter */}
// // //       {showForm && (
// // //         <div className="bg-white p-6 rounded-2xl shadow-xl">
// // //           <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
// // //             Add New Renter
// // //           </h2>
// // //           <form onSubmit={handleSubmit} className="space-y-6">
// // //             {/* Row 1: Renter Name + Age */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <input
// // //                 type="text"
// // //                 name="renterName"
// // //                 placeholder="Renter Name"
// // //                 value={formData.renterName}
// // //                 onChange={handleInputChange}
// // //                 className={formInputStyle}
// // //               />
// // //               <input
// // //                 type="text"
// // //                 name="age"
// // //                 placeholder="Age"
// // //                 value={formData.age}
// // //                 onChange={handleInputChange}
// // //                 className={formInputStyle}
// // //               />
// // //             </div>

// // //             {/* Full Address */}
// // //             <textarea
// // //               name="fullAddress"
// // //               placeholder="Full Address"
// // //               value={formData.fullAddress}
// // //               onChange={handleInputChange}
// // //               className={`${formInputStyle} h-32`}
// // //             ></textarea>

// // //             {/* Row 2: Number of Stayers + Contact Number 1 */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <input
// // //                 type="number"
// // //                 name="numberOfStayers"
// // //                 placeholder="Number of Stayers"
// // //                 value={formData.numberOfStayers}
// // //                 onChange={handleInputChange}
// // //                 className={formInputStyle}
// // //               />
// // //               <input
// // //                 type="text"
// // //                 name="contact1"
// // //                 placeholder="Contact Number 1"
// // //                 value={formData.contact1}
// // //                 onChange={handleInputChange}
// // //                 className={formInputStyle}
// // //               />
// // //             </div>

// // //             {/* Row 3: Contact Number 2 + Remarks */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <input
// // //                 type="text"
// // //                 name="contact2"
// // //                 placeholder="Contact Number 2"
// // //                 value={formData.contact2}
// // //                 onChange={handleInputChange}
// // //                 className={formInputStyle}
// // //               />
// // //               <textarea
// // //                 name="remarks"
// // //                 placeholder="Remarks"
// // //                 value={formData.remarks}
// // //                 onChange={handleInputChange}
// // //                 className={`${formInputStyle} h-32`}
// // //               ></textarea>
// // //             </div>

// // //             {/* Row 4: Aadhaar Card + PAN Card */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div>
// // //                 <label className="block mb-1 text-sm font-medium">
// // //                   Aadhaar Card
// // //                 </label>
// // //                 <input
// // //                   type="file"
// // //                   name="aadhaarCard"
// // //                   onChange={handleFileChange}
// // //                   className={formInputStyle}
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="block mb-1 text-sm font-medium">PAN Card</label>
// // //                 <input
// // //                   type="file"
// // //                   name="panCard"
// // //                   onChange={handleFileChange}
// // //                   className={formInputStyle}
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Row 5: Passport Photo + Other Document */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div>
// // //                 <label className="block mb-1 text-sm font-medium">
// // //                   Passport Size Photo
// // //                 </label>
// // //                 <input
// // //                   type="file"
// // //                   name="passportPhoto"
// // //                   onChange={handleFileChange}
// // //                   className={formInputStyle}
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="block mb-1 text-sm font-medium">
// // //                   Other Document
// // //                 </label>
// // //                 <input
// // //                   type="file"
// // //                   name="otherDocument"
// // //                   onChange={handleFileChange}
// // //                   className={formInputStyle}
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Submit Button */}
// // //             <button
// // //               type="submit"
// // //               className="w-full bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition"
// // //             >
// // //               Submit
// // //             </button>
// // //           </form>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // // Tailwind Styles
// // // const formInputStyle =
// // //   "w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200";

// // New version -----------------------------------

// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function RenterMasterForm() {
//   const [renters, setRenters] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   // Form data
//   const [formData, setFormData] = useState({
//     renterName: "",
//     fullAddress: "",
//     age: "",
//     numberOfStayers: "",
//     aadhaarCard: null,
//     panCard: null,
//     passportPhoto: null,
//     otherDocument: null,
//     contact1: "",
//     contact2: "",
//     remarks: "",
//   });

//   // Fetch existing renters on mount
//   useEffect(() => {
//     fetchRenters();
//   }, []);

//   // GET request to fetch existing renters
//   const fetchRenters = async () => {
//     try {
//       const response = await axios.get(`${API_URL}renter`);
//       setRenters(response.data);
//     } catch (error) {
//       console.error("Error fetching renters:", error);
//     }
//   };

//   // Handle text inputs
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle file inputs
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({ ...formData, [name]: files[0] });
//   };

//   // Submit form data to server
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const form = new FormData();

//       // Append non-file fields
//       Object.entries(formData).forEach(([key, value]) => {
//         if (value && typeof value !== "object") {
//           form.append(key, value);
//         }
//       });

//       // Append files
//       if (formData.aadhaarCard) {
//         form.append("aadhaarCard", formData.aadhaarCard);
//       }
//       if (formData.panCard) {
//         form.append("panCard", formData.panCard);
//       }
//       if (formData.passportPhoto) {
//         form.append("passportPhoto", formData.passportPhoto);
//       }
//       if (formData.otherDocument) {
//         form.append("otherDocument", formData.otherDocument);
//       }

//       // POST to server
//       await axios.post(`${API_URL}renter`, form, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Renter data saved successfully!");

//       // Refresh renters table
//       fetchRenters();

//       // Reset form
//       setFormData({
//         renterName: "",
//         fullAddress: "",
//         age: "",
//         numberOfStayers: "",
//         aadhaarCard: null,
//         panCard: null,
//         passportPhoto: null,
//         otherDocument: null,
//         contact1: "",
//         contact2: "",
//         remarks: "",
//       });
//       setShowForm(false);
//     } catch (error) {
//       console.error("Error saving renter data:", error);
//       alert("Failed to save renter data!");
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 space-y-6">
//       {/* Table of existing renters */}
//       <div className="bg-white shadow rounded-md p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold text-gray-800">
//             Registered Renters
//           </h2>
//           <button
//             onClick={() => setShowForm(!showForm)}
//             className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
//           >
//             {showForm ? "Close Form" : "Add Renter"}
//           </button>
//         </div>

//         {renters.length === 0 ? (
//           <p className="text-gray-600">No renters found.</p>
//         ) : (
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Renter Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Age
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Address
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Contact1
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Contact2
//                 </th>
//                 <th className="px-6 py-3 w-24"></th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {renters.map((renter) => (
//                 <tr key={renter.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
//                     {renter.renterName}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
//                     {renter.age}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
//                     {renter.fullAddress}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
//                     {renter.contact1}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
//                     {renter.contact2}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     {/* 'Details' button - can open a modal or new page */}
//                     <button className="text-indigo-600 hover:text-indigo-900">
//                       Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* Toggleable form to add a new renter */}
//       {showForm && (
//         <div className="bg-white p-6 rounded-2xl shadow-xl">
//           <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
//             Add New Renter
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Row 1: Renter Name + Age */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <input
//                 type="text"
//                 name="renterName"
//                 placeholder="Renter Name"
//                 value={formData.renterName}
//                 onChange={handleInputChange}
//                 className={formInputStyle}
//               />
//               <input
//                 type="text"
//                 name="age"
//                 placeholder="Age"
//                 value={formData.age}
//                 onChange={handleInputChange}
//                 className={formInputStyle}
//               />
//             </div>

//             {/* Full Address */}
//             <textarea
//               name="fullAddress"
//               placeholder="Full Address"
//               value={formData.fullAddress}
//               onChange={handleInputChange}
//               className={`${formInputStyle} h-32`}
//             ></textarea>

//             {/* Row 2: Number of Stayers + Contact Number 1 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <input
//                 type="number"
//                 name="numberOfStayers"
//                 placeholder="Number of Stayers"
//                 value={formData.numberOfStayers}
//                 onChange={handleInputChange}
//                 className={formInputStyle}
//               />
//               <input
//                 type="text"
//                 name="contact1"
//                 placeholder="Contact Number 1"
//                 value={formData.contact1}
//                 onChange={handleInputChange}
//                 className={formInputStyle}
//               />
//             </div>

//             {/* Row 3: Contact Number 2 + Remarks */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <input
//                 type="text"
//                 name="contact2"
//                 placeholder="Contact Number 2"
//                 value={formData.contact2}
//                 onChange={handleInputChange}
//                 className={formInputStyle}
//               />
//               <textarea
//                 name="remarks"
//                 placeholder="Remarks"
//                 value={formData.remarks}
//                 onChange={handleInputChange}
//                 className={`${formInputStyle} h-32`}
//               ></textarea>
//             </div>

//             {/* Row 4: Aadhaar Card + PAN Card */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block mb-1 text-sm font-medium">
//                   Aadhaar Card
//                 </label>
//                 <input
//                   type="file"
//                   name="aadhaarCard"
//                   onChange={handleFileChange}
//                   className={formInputStyle}
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 text-sm font-medium">
//                   PAN Card
//                 </label>
//                 <input
//                   type="file"
//                   name="panCard"
//                   onChange={handleFileChange}
//                   className={formInputStyle}
//                 />
//               </div>
//             </div>

//             {/* Row 5: Passport Photo + Other Document */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block mb-1 text-sm font-medium">
//                   Passport Size Photo
//                 </label>
//                 <input
//                   type="file"
//                   name="passportPhoto"
//                   onChange={handleFileChange}
//                   className={formInputStyle}
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 text-sm font-medium">
//                   Other Document
//                 </label>
//                 <input
//                   type="file"
//                   name="otherDocument"
//                   onChange={handleFileChange}
//                   className={formInputStyle}
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// // Tailwind Styles
// const formInputStyle =
//   "w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200";

// // -----------------------------------------------

// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import DetailModal from "./DetailModal";

// // export default function RenterMasterForm() {
// //   const [renters, setRenters] = useState([]);
// //   const [showForm, setShowForm] = useState(false);

// //   // For detail modal
// //   const [selectedRenter, setSelectedRenter] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   useEffect(() => {
// //     fetchRenters();
// //   }, []);

// //   const fetchRenters = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:3001/api/renter");
// //       setRenters(response.data);
// //     } catch (error) {
// //       console.error("Error fetching renters:", error);
// //     }
// //   };

// //   const handleDetailsClick = (r) => {
// //     setSelectedRenter(r);
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedRenter(null);
// //   };

// //   // Called when user saves from the modal
// //   const handleSaveFromModal = async (updatedData) => {
// //     try {
// //       // PUT /api/renter/:id
// //       await axios.put(`http://localhost:3001/api/renter/${updatedData.id}`, updatedData);
// //       alert("Renter updated successfully!");
// //       fetchRenters();
// //     } catch (error) {
// //       console.error("Error updating renter:", error);
// //       alert("Failed to update renter!");
// //     } finally {
// //       closeModal();
// //     }
// //   };

// //   return (
// //     <div className="max-w-6xl mx-auto p-4 space-y-6">
// //       <div className="bg-white shadow rounded-md p-6">
// //         <div className="flex items-center justify-between mb-4">
// //           <h2 className="text-xl font-bold text-gray-800">
// //             Registered Renters
// //           </h2>
// //           <button
// //             onClick={() => setShowForm(!showForm)}
// //             className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
// //           >
// //             {showForm ? "Close Form" : "Add Renter"}
// //           </button>
// //         </div>

// //         {renters.length === 0 ? (
// //           <p className="text-gray-600">No renters found.</p>
// //         ) : (
// //           <table className="min-w-full divide-y divide-gray-200">
// //             <thead className="bg-gray-50">
// //               <tr>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
// //                   ID
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
// //                   Renter Name
// //                 </th>
// //                 <th className="px-6 py-3 w-24"></th>
// //               </tr>
// //             </thead>
// //             <tbody className="bg-white divide-y divide-gray-200">
// //               {renters.map((r) => (
// //                 <tr key={r.id}>
// //                   <td className="px-6 py-4 text-sm text-gray-700">{r.id}</td>
// //                   <td className="px-6 py-4 text-sm text-gray-700">
// //                     {r.renterName}
// //                   </td>
// //                   <td className="px-6 py-4 text-right text-sm font-medium">
// //                     <button
// //                       onClick={() => handleDetailsClick(r)}
// //                       className="text-indigo-600 hover:text-indigo-900"
// //                     >
// //                       Details
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>

// //       {/* Add Renter Form code goes here... */}

// //       <DetailModal
// //         isOpen={isModalOpen}
// //         title="Renter Details"
// //         rowData={selectedRenter}
// //         onClose={closeModal}
// //         onSave={handleSaveFromModal}
// //       />
// //     </div>
// //   );
// // }







// updated version --------------------------------------------------------------------------------------------------







import { useState, useEffect } from "react";
import axios from "axios";
import DetailModal from "./DetailModal";
export default function RenterMasterForm() {
  const [renters, setRenters] = useState([]);
  const [showForm, setShowForm] = useState(false);
  //  For detail modal
  const [selectedRenter, setSelectedRenter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   Form data
  const [formData, setFormData] = useState({
    renterName: "",
    fullAddress: "",
    age: "",
    numberOfStayers: "",
    aadhaarCard: null,
    panCard: null,
    passportPhoto: null,
    otherDocument: null,
    contact1: "",
    contact2: "",
    remarks: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;


  // Fetch existing renters on mount
  useEffect(() => {
    fetchRenters();
  }, []);

  // GET request to fetch existing renters
  const fetchRenters = async () => {
    try {
      const response = await axios.get(`${API_URL}renter`);
      setRenters(response.data);
    } catch (error) {
      console.error("Error fetching renters:", error);
    }
  };
  const handleDetailsClick = (r) => {
    setSelectedRenter(r);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRenter(null);
  };

  // Called when user saves from the modal
  // const handleSaveFromModal = async (updatedData) => {
  //   try {
  //     // PUT /api/renter/:id
  //     await axios.put(
  //       `http://localhost:3001/api/renter/${updatedData.id}`,
  //       updatedData
  //     );
  //     alert("Renter updated successfully!");
  //     fetchRenters();
  //   } catch (error) {
  //     console.error("Error updating renter:", error);
  //     alert("Failed to update renter!");
  //   } finally {
  //     closeModal();
  //   }
  // };
  // Called when user saves from the modal
  const handleSaveFromModal = async (updatedData) => {
    try {
      // First, validate that we have an ID
      if (!updatedData.id) {
        throw new Error("No renter ID provided for update");
      }

      // Remove any null or undefined values
      const cleanedData = Object.fromEntries(
        Object.entries(updatedData).filter(([_, value]) => value != null)
      );

      // Log the data being sent (for debugging)
      console.log("Sending update data:", cleanedData);

      // PUT /api/renter/:id
      const response = await axios.put(
        `http://localhost:3001/api/renter/${updatedData.id}`,
        cleanedData
      );

      // Check if we got a successful response
      if (response.data) {
        alert("Renter updated successfully!");
        await fetchRenters(); // Refresh the list
      } else {
        throw new Error("No data received from server");
      }
    } catch (error) {
      console.error("Error updating renter:", error);

      // More detailed error message
      let errorMessage = "Failed to update renter! ";
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage += `Server error: ${
          error.response.data?.message || error.response.statusText
        }`;
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage += "No response received from server.";
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage += error.message;
      }

      alert(errorMessage);
    } finally {
      closeModal();
    }
  };
  // Handle text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file inputs
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // Submit form data to server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();

      // Append non-file fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value && typeof value !== "object") {
          form.append(key, value);
        }
      });

      // Append files
      if (formData.aadhaarCard) {
        form.append("aadhaarCard", formData.aadhaarCard);
      }
      if (formData.panCard) {
        form.append("panCard", formData.panCard);
      }
      if (formData.passportPhoto) {
        form.append("passportPhoto", formData.passportPhoto);
      }
      if (formData.otherDocument) {
        form.append("otherDocument", formData.otherDocument);
      }

      // POST to server
      await axios.post("http://localhost:3001/api/renter", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Renter data saved successfully!");

      // Refresh renters table
      fetchRenters();

      // Reset form
      setFormData({
        renterName: "",
        fullAddress: "",
        age: "",
        numberOfStayers: "",
        aadhaarCard: null,
        panCard: null,
        passportPhoto: null,
        otherDocument: null,
        contact1: "",
        contact2: "",
        remarks: "",
      });
      setShowForm(false);
    } catch (error) {
      console.error("Error saving renter data:", error);
      alert("Failed to save renter data!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {/* Table of existing renters */}
      <div className="bg-white shadow rounded-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Registered Renters
          </h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            {showForm ? "Close Form" : "Add Renter"}
          </button>
        </div>

        {renters.length === 0 ? (
          <p className="text-gray-600">No renters found.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Renter Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact1
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact2
                </th>
                <th className="px-6 py-3 w-24"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {renters.map((renter) => (
                <tr key={renter.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {renter.renterName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {renter.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {renter.fullAddress}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {renter.contact1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {renter.contact2}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {/* 'Details' button - can open a modal or new page */}
                    <button
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => handleDetailsClick(renter)}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Toggleable form to add a new renter */}
      {showForm && (
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Add New Renter
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Renter Name + Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="renterName"
                placeholder="Renter Name"
                value={formData.renterName}
                onChange={handleInputChange}
                className={formInputStyle}
              />
              <input
                type="text"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
                className={formInputStyle}
              />
            </div>

            {/* Full Address */}
            <textarea
              name="fullAddress"
              placeholder="Full Address"
              value={formData.fullAddress}
              onChange={handleInputChange}
              className={`${formInputStyle} h-32`}
            ></textarea>

            {/* Row 2: Number of Stayers + Contact Number 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="number"
                name="numberOfStayers"
                placeholder="Number of Stayers"
                value={formData.numberOfStayers}
                onChange={handleInputChange}
                className={formInputStyle}
              />
              <input
                type="text"
                name="contact1"
                placeholder="Contact Number 1"
                value={formData.contact1}
                onChange={handleInputChange}
                className={formInputStyle}
              />
            </div>

            {/* Row 3: Contact Number 2 + Remarks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="contact2"
                placeholder="Contact Number 2"
                value={formData.contact2}
                onChange={handleInputChange}
                className={formInputStyle}
              />
              <textarea
                name="remarks"
                placeholder="Remarks"
                value={formData.remarks}
                onChange={handleInputChange}
                className={`${formInputStyle} h-32`}
              ></textarea>
            </div>

            {/* Row 4: Aadhaar Card + PAN Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Aadhaar Card
                </label>
                <input
                  type="file"
                  name="aadhaarCard"
                  onChange={handleFileChange}
                  className={formInputStyle}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  PAN Card
                </label>
                <input
                  type="file"
                  name="panCard"
                  onChange={handleFileChange}
                  className={formInputStyle}
                />
              </div>
            </div>

            {/* Row 5: Passport Photo + Other Document */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Passport Size Photo
                </label>
                <input
                  type="file"
                  name="passportPhoto"
                  onChange={handleFileChange}
                  className={formInputStyle}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Other Document
                </label>
                <input
                  type="file"
                  name="otherDocument"
                  onChange={handleFileChange}
                  className={formInputStyle}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      <DetailModal
        isOpen={isModalOpen}
        title="Renter Details"
        rowData={selectedRenter}
        onClose={closeModal}
        onSave={handleSaveFromModal}
      />
    </div>
  );
}

// Tailwind Styles
const formInputStyle =
  "w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200";