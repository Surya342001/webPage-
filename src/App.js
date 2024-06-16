// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Switch } from "react-router-dom";
// import LoginPage from './LoginPage'

// import AdminUploadPage from "./AdminUploadPage";
// import AdminApproval from "./AdminApproval";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="" component={LoginPage} />
//         <Route path="/admin-approval" component={AdminApproval} />
//         <Route path="/admin-upload" component={AdminUploadPage} />
//       </Routes>
//     </Router>

//     // // <AdminApproval />
//     // // <AdminUploadPage />
//     // <LoginPage />
//   );
// }

// export default App;
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import AdminUploadPage from "./AdminUploadPage";
import AdminApproval from "./AdminApproval";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-approval" element={<AdminApproval />} />
        <Route path="/admin-upload" element={<AdminUploadPage />} />
        {/* Redirect any other path to the login page */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
