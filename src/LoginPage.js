// import React, { useState } from "react";
// import "./css/LoginPage.css";
// import { useNavigate } from "react-router-dom";
// // import { Link } from "react-router-dom";

// const LoginPage = () => {
//   const [activeContainer, setActiveContainer] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleRegisterClick = () => {
//     if (email === "surya" && password === "subhashree") {
//       // Navigate to the next page if the credentials are correct
//       setActiveContainer(true);
//     } else {
//       // Set an error message if the credentials are incorrect
//       setError("Invalid username or password");
//     }
//   };
//   const navigate = useNavigate();

//   // const handleLoginClick = () => {
//   //   setActiveContainer(false);
//   // };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const handleAdminApprovalClick = () => {
//     navigate("/admin-approval");
//   };

//   const handleAdminUploadClick = () => {
//     navigate("/admin-upload");
//   };

//   return (
//     <div className="main">
//       <div
//         className={activeContainer ? "container active" : "container"}
//         id="container"
//       >
//         <div className="form-container sign-up">
//           <form>
//             <div>
//               <div className="box admin-approval">
//                 <h2>Admin Approval</h2>
//                 <button
//                   className="card-button"
//                   onClick={handleAdminApprovalClick}
//                 >
//                   Approve
//                 </button>
//               </div>
//               <div className="box admin-upload">
//                 <h2>Admin Upload</h2>
//                 <button
//                   className="card-button"
//                   onClick={handleAdminUploadClick}
//                 >
//                   Upload
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="form-container sign-in">
//           <form>
//             <h1>Sign In</h1>
//             <div className="social-icons">
//               <a href="#" className="icon">
//                 <i className="fab fa-google-plus-g"></i>
//               </a>
//               <a href="#" className="icon">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="icon">
//                 <i className="fab fa-github"></i>
//               </a>
//               <a href="#" className="icon">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//             <span>or use your email password</span>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             <a href="#">Forget Your Password?</a>
//           </form>
//         </div>
//         <div className="toggle-container">
//           <div className="toggle">
//             <div className="toggle-panel toggle-left">
//               <h1>Welcome Back!</h1>
//               <p>Enter your personal details to use all of site features</p>
//             </div>
//             <div className="toggle-panel toggle-right">
//               <h1>Hello, Friend!</h1>
//               <p>
//                 Register with your personal details to use all of site features
//               </p>
//               <button
//                 className="hidden"
//                 id="register"
//                 onClick={handleRegisterClick}
//               >
//                 Sign In
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React from "react";
import { useForm } from "react-hook-form";

const AdminUploadPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Temple Name:</label>
        <input type="text" {...register("templeName", { required: true })} />
        {errors.templeName && <span>This field is required</span>}
      </div>

      <div>
        <label>Stala Puranam:</label>
        <input type="text" {...register("stalaPuranam", { required: true })} />
        {errors.stalaPuranam && <span>This field is required</span>}
      </div>

      <div>
        <label>Main Deity:</label>
        <input type="text" {...register("mainDeity", { required: true })} />
        {errors.mainDeity && <span>This field is required</span>}
      </div>

      <div>
        <label>Address:</label>
        <input type="text" {...register("address", { required: true })} />
        {errors.address && <span>This field is required</span>}
      </div>

      <div>
        <label>State:</label>
        <input type="text" {...register("state", { required: true })} />
        {errors.state && <span>This field is required</span>}
      </div>

      <div>
        <label>District:</label>
        <input type="text" {...register("district", { required: true })} />
        {errors.district && <span>This field is required</span>}
      </div>

      <div>
        <label>Rasi:</label>
        <input type="text" {...register("rasi", { required: true })} />
        {errors.rasi && <span>This field is required</span>}
      </div>

      <div>
        <label>Natchathiram:</label>
        <input type="text" {...register("natchathiram", { required: true })} />
        {errors.natchathiram && <span>This field is required</span>}
      </div>

      <div>
        <label>Pariharam:</label>
        <input type="text" {...register("pariharam", { required: true })} />
        {errors.pariharam && <span>This field is required</span>}
      </div>

      <div>
        <label>Testimonial:</label>
        <input type="text" {...register("testimonial", { required: true })} />
        {errors.testimonial && <span>This field is required</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AdminUploadPage;
