import React, { useState } from "react";
import Datepicker from "./Datepicker";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    selectedDate(date);
  };

  return (
    <>
      <div className="app">
        <h1>My App</h1>
        <Datepicker
          defaultDate={selectedDate}
          disablePast={false}
          disableFuture={false}
          hideSidebar={false}
          buttonTexts={{ prev: "Previous", next: "Next" }}
          selectedDateColor="blue"
          onDateChange={handleDateChange}
        />
      </div>
      <div>
        {selectedDate && (
          <p>Selected Date:{selectedDate.toLocalDateString("en-US")}</p>
        )}
      </div>
    </>
  );
};

export default App;
