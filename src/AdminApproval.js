// import React, { useState, useEffect } from "react";
// import "./css/AdminApprovalPage.css"; // Assuming you have CSS for styling
// import axios from "axios";
// import { Modal, Button } from "react-bootstrap";
// import fuzzysearch from "fuzzysearch";
// import CustomOverlay from "./overLay/CustomOverlay";

// const AdminApproval = ({ autoplayInterval }) => {
//   const [temples, setTemples] = useState([]);
//   const [currentText, setCurrentText] = useState("photo 1");
//   const [popUp, setPopUp] = useState(false);
//   const [photos] = useState(
//     Array.from({ length: 10 }, (_, i) => `photo ${i + 1}`)
//   );
//   const [fullscreen, setFullscreen] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/api/temples"); // Replace with your server URL
//         setTemples(response.data);
//       } catch (error) {
//         console.error("Error fetching temples:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const [searchText, setSearchText] = useState("");
//   // State for managing card data (replace with your actual data)

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const nextIndex = (photos.indexOf(currentText) + 1) % photos.length;
//       setCurrentText(photos[nextIndex]);
//     }, autoplayInterval || 3000); // Default interval to 3 seconds
//     return () => clearInterval(intervalId);
//   }, [currentText, photos, autoplayInterval]);

//   const handleApproveClick = (index) => {
//     setTemples((prevData) =>
//       prevData.map((temple, i) =>
//         i === index ? { ...temple, approved: true } : temple
//       )
//     );
//   };

//   // Handle view button click (add your custom view logic here)
//   const handleViewClick = (card) => {
//     console.log("View button clicked:", card);
//     // Implement your view functionality here (e.g., open a modal, redirect to a detail page)
//   };

//   const handleSearchChange = (event) => {
//     setSearchText(event.target.value.toLowerCase()); // Convert search text to lowercase
//   };
//   const fuzzySearchOptions = {
//     caseSensitive: false, // Set to true for case-sensitive search
//     threshold: 0.3, // Adjust threshold for desired match strictness (0-1)
//   };

//   const filteredTemples = temples.filter((temple) => {
//     const templeNameMatch = fuzzysearch(
//       searchText,
//       temple.templeName.toLowerCase(),
//       fuzzySearchOptions
//     );
//     const stalaPuranamMatch = fuzzysearch(
//       searchText,
//       temple.stalaPuranam.toLowerCase(),
//       fuzzySearchOptions
//     );
//     return templeNameMatch || stalaPuranamMatch;
//   });
//   return (
//     <>
//       <div className="Containerbox">
//         <h2>AdminApproval</h2>

//         <div className="admin-approval-container">
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Search Cards"
//               className="search-input"
//               value={searchText}
//               onChange={handleSearchChange}
//             />
//           </div>
//           {/* Text carousel (optional) */}
//           {autoplayInterval && <p className="carousel-text">{currentText}</p>}

//           <div className="card-container">
//             {filteredTemples.map((temple, index) => (
//               <div key={index} className="card">
//                 <div className="card-content">
//                   <h3 className="card-name">{temple.templeName}</h3>
//                   <p className="card-description">{temple.stalaPuranam}</p>
//                 </div>
//                 <div className="card-buttons">
//                   {/* <button
//                   className="card-view-button"
//                   onClick={() => handleViewClick(temple)}
//                 >
//                   View
//                 </button> */}
//                   <button
//                     className={`card-approve-button ${
//                       temple.approved ? "approved" : ""
//                     }`}
//                     onClick={() => handleApproveClick(index)}
//                   >
//                     {temple.approved ? "Approved" : "Approve"}
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div
//               className="card"
//               onClick={() => {
//                 setPopUp(true);
//                 setFullscreen(true);
//               }}
//             >
//               <div className="card-content">
//                 <h3 className="card-name">surya</h3>
//                 <p className="card-description">praksh</p>
//               </div>
//               <div className="card-buttons">
//                 <button
//                   className={`card-approve-button `}
//                   onClick={() => handleApproveClick()}
//                 >
//                   {"Approved"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminApproval;
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Button } from "react-bootstrap";
import "./css/AdminApprovalPage.css"; // Assuming you have CSS for styling

const AdminApproval = () => {
  const sampleData = [
    {
      _id: { $oid: "665314061619f4b495ed7dff" },
      name: "John Doe",
      address: "123 Main St",
      phoneNumber: "123-456-7890",
      email: "john@example.com",
      templeName: "Shiva",
      templePlace: "KGF",
      testimonial: "Great experience!",
    },
    {
      _id: { $oid: "665314061619f4b495ed7d01" },
      name: "Jane Smith",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
      email: "jane@example.com",
      templeName: "Vishnu",
      templePlace: "Delhi",
      testimonial: "Very peaceful.",
    },
    {
      _id: { $oid: "665314061619f4b495ed7d02" },
      name: "Michael Brown",
      address: "789 Oak St",
      phoneNumber: "456-789-0123",
      email: "michael@example.com",
      templeName: "Durga",
      templePlace: "Mumbai",
      testimonial: "Highly recommend.",
    },
    {
      _id: { $oid: "665314061619f4b495ed7d03" },
      name: "Emily Johnson",
      address: "321 Pine St",
      phoneNumber: "321-654-9870",
      email: "emily@example.com",
      templeName: "Ganesh",
      templePlace: "Chennai",
      testimonial: "Amazing temple.",
    },
    {
      _id: { $oid: "665314061619f4b495ed7d04" },
      name: "Chris Lee",
      address: "654 Cedar St",
      phoneNumber: "789-012-3456",
      email: "chris@example.com",
      templeName: "Kali",
      templePlace: "Kolkata",
      testimonial: "Spiritual atmosphere.",
    },
    {
      _id: { $oid: "665314061619f4b495ed7d05" },
      name: "Patricia Davis",
      address: "987 Birch St",
      phoneNumber: "012-345-6789",
      email: "patricia@example.com",
      templeName: "Lakshmi",
      templePlace: "Hyderabad",
      testimonial: "Wonderful visit.",
    },
    {
      _id: { $oid: "665314061619f4b495ed7d06" },
      name: "David Wilson",
      address: "159 Willow St",
      phoneNumber: "234-567-8901",
      email: "david@example.com",
      templeName: "Saraswati",
      templePlace: "Bangalore",
      testimonial: "Lovely place.",
    },
    {
      _id: { $oid: "665314061619f4b495ed7d07" },
      name: "Sarah Martinez",
      address: "753 Maple St",
      phoneNumber: "345-678-9012",
      email: "sarah@example.com",
      templeName: "Hanuman",
      templePlace: "Pune",
      testimonial: "Blessed experience.",
    },
    {
      _id: { $oid: "665314061619f4b495ed7d08" },
      name: "Matthew Anderson",
      address: "258 Spruce St",
      phoneNumber: "456-789-0123",
      email: "matthew@example.com",
      templeName: "Ram",
      templePlace: "Nagpur",
      testimonial: "Peaceful environment.",
    },
    {
      _id: { $oid: "665314061619f4b495ed7d09" },
      name: "Ashley Thomas",
      address: "951 Fir St",
      phoneNumber: "567-890-1234",
      email: "ashley@example.com",
      templeName: "Krishna",
      templePlace: "Ahmedabad",
      testimonial: "Inspiring visit.",
    },
    {
      _id: { $oid: "665314061619f4b495ed7d0A" },
      name: "Daniel Jackson",
      address: "753 Beech St",
      phoneNumber: "678-901-2345",
      email: "daniel@example.com",
      templeName: "Brahma",
      templePlace: "Surat",
      testimonial: "Felt connected.",
    },
  ];

  const [temples, setTemples] = useState(sampleData);
  const [searchText, setSearchText] = useState("");

  const handleApproveClick = (id) => {
    setTemples((prevData) =>
      prevData.map((temple) =>
        temple._id.$oid === id ? { ...temple, approved: true } : temple
      )
    );
  };

  const handleRejectClick = (id) => {
    setTemples((prevData) =>
      prevData.map((temple) =>
        temple._id.$oid === id ? { ...temple, approved: false } : temple
      )
    );
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase()); // Convert search text to lowercase
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Temple Name",
      selector: (row) => row.templeName,
      sortable: true,
    },
    {
      name: "Temple Place",
      selector: (row) => row.templePlace,
      sortable: true,
    },
    {
      name: "Testimonial",
      selector: (row) => row.testimonial,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <Button
            variant={row.approved ? "success" : "outline-success"}
            onClick={() => handleApproveClick(row._id.$oid)}
            className="mx-1"
          >
            ✔
          </Button>
          <Button
            variant={row.rejected ? "danger" : "outline-danger"}
            onClick={() => handleRejectClick(row._id.$oid)}
            className="mx-1"
          >
            ✖
          </Button>
        </div>
      ),
    },
  ];

  const filteredTemples = temples.filter((temple) => {
    return (
      temple.name.toLowerCase().includes(searchText) ||
      temple.address.toLowerCase().includes(searchText) ||
      temple.phoneNumber.toLowerCase().includes(searchText) ||
      temple.email.toLowerCase().includes(searchText) ||
      temple.templeName.toLowerCase().includes(searchText) ||
      temple.templePlace.toLowerCase().includes(searchText) ||
      temple.testimonial.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <h2>Admin Approval</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Temples"
          className="search-input"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredTemples}
        pagination
        highlightOnHover
        striped
      />
    </>
  );
};

export default AdminApproval;
