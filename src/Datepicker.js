import React, { useState } from "react";
import Calender from "./Calender";

const Datepicker = ({
  defaultDate,
  disablePast,
  disableFuture,
  hideSidebar,
  buttonTexts,
  selectedDateColor,
  onDateChange,
}) => {
  const [selectedDate, setSelectedDate] = useState(defaultDate || null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div>
      <Calender
        selectedDate={selectedDate}
        disablePast={disablePast}
        disableFuture={disableFuture}
        hideSidebar={hideSidebar}
        buttonTexts={buttonTexts}
        selectedDateColor={selectedDateColor}
        onDateChange={handleDateChange}
      />
    </div>
  );
};

export default Datepicker;
