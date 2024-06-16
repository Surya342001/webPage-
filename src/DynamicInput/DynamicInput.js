import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import Alert from "@mui/material/Alert";
import "./DynamicInputCss.css";

const SpecialEventsPopup = ({ specialEvents, showPopup, setShowPopup }) => {
  return (
    <div style={{ position: "fixed", bottom: 0, right: -150, zIndex: 9999 }}>
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "5px",
        }}
      >
        <h3>Special Events Added:</h3>
        {specialEvents.map((event, index) => (
          <div key={index}>
            <p>{`${event.name} - ${event.date.toLocaleDateString()}`}</p>
          </div>
        ))}
        {showPopup && (
          <div style={{ marginTop: 10 }}>
            <p>Special event successfully added!</p>
          </div>
        )}
      </div>
    </div>
  );
};

const DynamicInput = ({ name, HandlePariharam }) => {
  const [inputValues, setInputValues] = useState([""]);
  const [selectedDates, setSelectedDates] = useState([new Date()]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [specialEvents, setSpecialEvents] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  // const handleAddInput = () => {
  //   setInputValues([...inputValues, ""]);
  //   setSelectedDates([
  //     ...selectedDates,
  //     selectedDates[selectedDates.length - 1],
  //   ]);

  // };

  const handleAddInput = () => {
    const newInputValues = [...inputValues];
    const newSelectedDates = [...selectedDates];

    newInputValues.push("");
    newSelectedDates.push(newSelectedDates[newSelectedDates.length - 1]);

    setInputValues(newInputValues);
    setSelectedDates(newSelectedDates);

    // Log the added item to the console
    console.log("Added item:", newInputValues);
    HandlePariharam(newInputValues);
  };

  const handleCalender = () => {
    setShowCalendar(true);
  };
  const handleCalenderClose = () => {
    setShowCalendar(false);
  };
  const handleRemoveInput = (index) => {
    const newInputValues = [...inputValues];
    const removedItem = newInputValues.splice(index, 1)[0]; // Get the removed item

    setInputValues(newInputValues);

    const newSelectedDates = [...selectedDates];
    newSelectedDates.splice(index, 1);

    setSelectedDates(newSelectedDates);

    console.log("Removed item:", newInputValues); // Log the removed item
  };
  // const handleRemoveInput = (index) => {
  //   const newInputValues = [...inputValues];
  //   newInputValues.splice(index, 1);
  //   setInputValues(newInputValues);

  //   const newSelectedDates = [...selectedDates];
  //   newSelectedDates.splice(index, 1);
  //   setSelectedDates(newSelectedDates);
  // };

  const handleDateChange = (date, index) => {
    const newSelectedDates = [...selectedDates];
    newSelectedDates[index] = date;
    setSelectedDates(newSelectedDates);
    // setShowCalendar(false);
  };
  const hasEmptyInputs = inputValues.some((value) => value === "");
  const handleAddSpecialEvent = () => {
    const newEvents = inputValues.map((value, index) => ({
      name: value,
      date: selectedDates[index],
    }));

    if (hasEmptyInputs) {
      // Display an alert using the Alert component
      alert("Please enter a name for all special events.");
      return; // Prevent further processing if there are empty inputs
    }
    setSpecialEvents(specialEvents.concat(newEvents));

    HandlePariharam(specialEvents.concat(newEvents));
    setInputValues([""]);
    setSelectedDates([new Date()]);
    setShowCalendar(false);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Hide the popup after 3 seconds
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <div style={{ flex: 1, marginRight: 10 }}></div>
      </div>
      <div>
        {inputValues.map((value, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div style={{ flex: 1, marginRight: 10 }}>
              <input
                type="text"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder={name}
                required
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: 5,
                  color: "#1d2b3a",
                  placeholderColor: "#1d2b3a",
                }}
              />
            </div>
            {name !== "Special Events" && (
              <div style={{ flexShrink: 0 }}>
                {index === inputValues.length - 1 && (
                  <>
                    <button
                      onClick={handleAddInput}
                      style={{
                        backgroundColor: "	#1d1f66",
                        color: "white",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: 5,
                        cursor: "pointer",
                      }}
                    >
                      Add
                    </button>
                  </>
                )}

                {index !== inputValues.length - 1 && (
                  <button
                    onClick={() => handleRemoveInput(index)}
                    style={{
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      padding: "0.5rem 1rem",
                      borderRadius: 5,
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
            )}
            {name === "Special Events" && (
              <div style={{ marginTop: 5 }}>
                <CalendarMonthOutlinedIcon onClick={handleCalender} />
              </div>
            )}
            {showCalendar && (
              <div style={{ marginTop: 5 }}>
                {/* Your calendar component goes here */}
                <CloseOutlined onClick={handleCalenderClose} />
              </div>
            )}
          </div>
        ))}
      </div>
      {showCalendar && (
        <div style={{ marginTop: 10 }}>
          {selectedDates.map((date, index) => (
            <Calendar
              view="month"
              key={index}
              onChange={(date) => handleDateChange(date, index)}
              value={date}
              className={"react-calendar"}
              // style={{ backgroundColor: "black" }}
              // className={calender}
            />
          ))}

          {hasEmptyInputs && (
            <Alert severity="error">
              Please enter a name for all special events.
            </Alert>
          )}

          <button
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: 5,
              cursor: "pointer",
              opacity: hasEmptyInputs ? 0.5 : 1,
            }}
            disabled={hasEmptyInputs}
            onClick={handleAddSpecialEvent}
          >
            Add Special Events
          </button>
        </div>
      )}
      <SpecialEventsPopup
        specialEvents={specialEvents}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </div>
  );
};

export default DynamicInput;
