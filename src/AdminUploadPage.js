import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Button, Select, setOptions } from "@mobiscroll/react";
import { useCallback, useMemo, useState } from "react";
import "./css/AdminApproval.css";
import DatePicker from "react-date-picker";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import PhotoConfirmationPopup from "./PopUp/PhotoConfirmationPopup";
import DynamicInput from "./DynamicInput/DynamicInput";

setOptions({
  theme: "ios",
  themeVariant: "light",
});
const AdminUploadPage = () => {
  //   const [myData, setMyData] = useState([]);
  const [openPicker, setOpenPicker] = useState(false);
  const [selected, setSelected] = useState("atl");
  const [parentInputValues, setParentInputValues] = useState([""]);
  const [parentInputDeityValue, setParentInputDeityValue] = useState([""]);
  const [eventData, setEventData] = useState({});
  console.log("the parent eventr ", eventData);

  const [templeName, setTempleName] = useState("");
  const [stalaPuranam, setStalaPuranam] = useState("");
  const [mainDeity, setMainDeity] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [rasi, setRasi] = useState("");
  const [natchathiram, setnatchathiram] = useState("");
  const [Pariharam, setPariharam] = useState("");
  const [Testimonial, setTestimonial] = useState("");
  const myData = useMemo(
    () => [
      { text: "Ashwini", value: "AS" },
      { text: "Bharani", value: "BH" },
      { text: "Krittika", value: "KR" },
      { text: "Rohini", value: "RO" },
      { text: "Mrigashira", value: "MR" },
      { text: "Ardra", value: "AR" },
      { text: "Punarvasu", value: "PU" },
      { text: "Pushya", value: "PS" },
      { text: "Ashlesha", value: "ASL" },
      { text: "Magha", value: "MG" },
      { text: "Purvaphalguni", value: "PV" },
      { text: "Uttaraphalguni", value: "UT" },
      { text: "Hastha", value: "HS" },
      { text: "Chitra", value: "CH" },
      { text: "Swathi", value: "SW" },
      { text: "Vishakha", value: "VS" },
      { text: "Anuradha", value: "AN" },
      { text: "Jyeshta", value: "JY" },
      { text: "Moola", value: "ML" },
      { text: "Purvashada", value: "PV" },
      { text: "Uttarashada", value: "UT" },
      { text: "Shravana", value: "SH" },
      { text: "Dhanishta", value: "DH" },
      { text: "Shatabhisha", value: "SB" },
      { text: "Purvabhadrapada", value: "PB" },
      { text: "Uttarabhadrapada", value: "UB" },
      { text: "Revathi", value: "RE" },
    ],
    []
  );

  const handleClick = useCallback(() => {
    setOpenPicker(true);
  }, []);

  const handleChange = useCallback((ev) => {
    setSelected(ev.value);
  }, []);

  const handleClose = useCallback(() => {
    setOpenPicker(false);
  }, []);

  const inputProps = useMemo(
    () => ({
      className: "md-mobile-picker-input",
      placeholder: "Please Select...",
    }),
    []
  );

  const boxInputProps = useMemo(
    () => ({
      className: "md-mobile-picker-box-label",
      inputStyle: "outline",
      placeholder: "Please Select...",
    }),
    []
  );

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  // });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add form submission logic here
  //   console.log(formData);
  // };

  const [selectedDate, setSelectedDate] = useState(null); // State to hold selected date

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [value, onChange] = useState(new Date()); // Corrected initialization

  //photo pop up controll

  const [photoUrl, setPhotoUrl] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = (event) => {
      const dataUrl = event.target.result;
      setPhotoUrl(dataUrl); // Update for preview (optional)

      const base64String = dataUrl.split(",")[1];
      console.log("%%%%%%%%", base64String);
      setShowPopup(true);
      // sendPhotoToBackend(base64String); // Send to backend
    };
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = (event) => {
    //     const imageUrl = event.target.result;
    //     setPhotoUrl(imageUrl);
    //     setShowPopup(true);
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  const handleConfirm = () => {
    // Handle photo confirmation logic, e.g., save the photo URL
    console.log("Photo confirmed for upload:", photoUrl);
    setShowPopup(false);
  };

  const handleCancel = () => {
    // Handle cancel logic, e.g., clear the photo URL
    console.log("Photo upload cancelled");
    setPhotoUrl("");
    setShowPopup(false);
  };

  //the rasi
  const rasiOptions = [
    "Mesha (Aries)",
    "Vrishabha (Taurus)",
    "Mithuna (Gemini)",
    "Karka (Cancer)",
    "Simha (Leo)",
    "Kanya (Virgo)",
    "Tula (Libra)",
    "Vrishchika (Scorpio)",
    "Dhanu (Sagittarius)",
    "Makara (Capricorn)",
    "Kumbha (Aquarius)",
    "Meena (Pisces)",
  ];
  const HandleTempleName = (e) => {
    setTempleName(e.target.value);
  };

  const HandlestalaPuranam = (e) => {
    setStalaPuranam(e.target.value);
  };

  const HandleMainDeity = (e) => {
    setMainDeity(e.target.value);
  };
  const HandleAddress = (e) => {
    setAddress(e.target.value);
  };
  const HandleState = (e) => {
    setState(e.target.value);
  };
  const HandleDistrict = (e) => {
    setDistrict(e.target.value);
  };

  const HandlePariharam = (e) => {
    setPariharam(e.target.value);
    console.log("trheh parijarma", Pariharam);
  };
  console.log(parentInputValues, "inside the parent ");
  console.log(parentInputDeityValue, "inside the parent the other dynamic");
  const HandleRasi = (e) => {
    setRasi(e.target.value);
  };
  const handleRasiChange = (e) => {
    setnatchathiram(e.target.value);
  };
  const HandleTestimonial = (e) => {
    setTestimonial(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gather all the form data into a single object
    const formData = {
      templeName,
      stalaPuranam,
      mainDeity,
      address,
      state,
      district,
      rasi,
      Pariharam,
      Testimonial,
      photoUrl,
      Pariharam: parentInputValues,
      parentInputDeityValue: parentInputDeityValue,
      eventData: eventData,

      // ... include other fields as needed
    };
    console.log("Form data:", formData);

    // Replace '/api/endpoint' with the actual endpoint where you want to send the form data
    const submitFormUrl = "http://localhost:3001/submit-form";

    try {
      const response = await fetch(submitFormUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Form data submitted successfully:", result);

      // Handle successful submission (e.g., clear form, display success message)
    } catch (error) {
      console.error("Error submitting form:", error);

      // Handle errors (e.g., display error message to user)
    }
  };

  return (
    <>
      <div className="background">
        <div
          style={{
            width: "100%",
            height: "100%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",

          //   background: "linear-gradient(to right, #FF6500, #C40C0C)",
          //   borderWidth: 1,
          //   borderRadius: 50,
          //   width: "90%",
          //   minHeight: 600,
          // }}
          // className="GlassContainer"
          >
            {/* <h2 style={{ color: "	#1d1f66", marginLeft: 40 }}>CONTENT UPLOAD</h2> */}
            <div
              style={{
                justifyContent: "center",
                padding: 20,
                margin: 20,
                borderWidth: 1,
                borderRadius: 48,
                // background: "linear-gradient(to right, #ffb74d, #ff9800)",
                position: "relative",

                minHeight: 500,
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: 50,
                alignItems: "center",
                // rowGap: 0,
                // gridAutoRows: "min-content",
              }}
              className="GlassContainer"
            >
              <div className="inputBox">
                <input
                  type="text"
                  onChange={HandleTempleName}
                  required="required"
                ></input>
                <span>Temple Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  style={{ height: 100 }}
                  onChange={HandlestalaPuranam}
                ></input>
                <span>Stala Puranam</span>
              </div>
              <div className="inputBox">
                <label htmlFor="photoUpload" className="photoUploadLabel">
                  <input
                    type="file"
                    id="photoUpload"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                  />
                  <span>Upload Photo</span>
                </label>

                {showPopup && (
                  <PhotoConfirmationPopup
                    imageUrl={photoUrl}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                  />
                )}
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  onChange={HandleMainDeity}
                ></input>
                <span>Main Deity</span>
              </div>
              <div className="inputBox">
                {/* <input type="text" required="required"></input>
          <span>Other Deity</span> */}
                <DynamicInput
                  name={"Other Deity"}
                  HandlePariharam={setParentInputDeityValue}
                />
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  style={{ height: 100 }}
                  onChange={HandleAddress}
                ></input>
                <span>Address</span>
              </div>
              <div className="inputBox">
                <select required onChange={HandleState}>
                  <option value="" disabled selected hidden>
                    Select State
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  {/* Add more states as needed */}
                </select>
                {/* <span>State</span> */}
              </div>

              {/* <div>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
      </div> */}

              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  onChange={HandleDistrict}
                ></input>
                <span>District</span>
              </div>
              <div className="inputBox">
                <DynamicInput
                  name={"Pariharam"}
                  HandlePariharam={setParentInputValues}
                />
              </div>

              <div className="inputBox">
                <DynamicInput
                  name={"Special Events"}
                  HandlePariharam={setEventData}
                />
              </div>
              <div className="inputBox">
                <select required onChange={HandleRasi}>
                  <option value="" disabled selected hidden>
                    Rasi
                  </option>
                  {rasiOptions.map((rasi, index) => (
                    <option key={index} value={rasi}>
                      {rasi}
                    </option>
                  ))}
                  {/* Add more states as needed */}
                </select>
              </div>

              {/* <Select
            data={myData}
            display="anchored"
            inputStyle="outline"
            itemHeight={40}
            label="Countries"
            labelStyle="stacked"
            placeholder="Please select..."
            renderItem={renderCustomItem}
          /> */}
              {/* <div className="mbsc-form-group">
                <div className="mbsc-row">
                  <div className="mbsc-col-12">
                    <Select
                      data={myData}
                      inputProps={boxInputProps}
                      touchUi={true}
                    />
                  </div>
                </div>
              </div> */}
              <div className="inputBox">
                <select required onChange={handleRasiChange}>
                  <option value="" disabled selected hidden>
                    Natchathiram
                  </option>
                  {myData.map((rasi, index) => (
                    <option key={index} value={rasi.value}>
                      {rasi.text}
                    </option>
                  ))}
                </select>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  required
                  onChange={HandleTestimonial}
                ></input>
                <span>Testimonial</span>
              </div>
              <div className="inputBox">
                <label htmlFor="photoUpload" className="photoUploadLabel">
                  <input
                    type="file"
                    id="photoUpload"
                    placeholder="Upload Photo"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                  />
                  {/* <span>Upload Photo</span> */}
                </label>

                {showPopup && (
                  <PhotoConfirmationPopup
                    imageUrl={photoUrl}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                  />
                )}
              </div>
              <div className="inputBox">
                <button className="cool-submit-button" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUploadPage;
