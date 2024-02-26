import React, { useState } from "react";

const Calender = ({
  selectedDate,
  disablePast,
  disableFuture,
  hideSidebar,
  buttonTexts,
  selectedDateColor,
  onDateChange,
}) => {
  const [currentDate, setCurrentdate] = useState(new Date());
  const handlePreviousMonth = () => {
    setCurrentdate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };
  const handleNextMonth = () => {
    setCurrentdate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month + 1).getDate();
  };
  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day) => (
      <div key={day} className="day-of-week">
        {day}
      </div>
    ));
  };

  const renderDates = () => {
    const daysInMonth = getDaysInMonth(
      currentDate.getMonth(),
      currentDate.getFullYear()
    );
    const firstDayOfMonth = getFirstDayOfMonth(
      currentDate.getMonth(),
      currentDate.getFullYear()
    );
    const totalDays = daysInMonth + firstDayOfMonth;
    const weeks = Math.ceil(totalDays / 7);

    let dates = [];
    for (let i = 0; i < weeks; i++) {
      for (let j = 0; j < 7; j++) {
        const dayIndex = i * 7 + j - firstDayOfMonth + 1;
        const date = dayIndex > 0 && dayIndex <= daysInMonth ? dayIndex : null;
        const isCurrentMonth = dayIndex > 0;
        const isDisabled =
          (disablePast && !isCurrentMonth) ||
          (disableFuture && !isCurrentMonth);

        dates.push(
          <div
            key={`${i} - ${j}`}
            className={`date ${
              isCurrentMonth ? "current-month" : "other-month"
            }${isDisabled ? "disabled" : ""}${
              selectedDate && date === selectedDate.getDate() ? "selected" : ""
            }`}
            style={{ color: isDisabled ? "grey" : "inherit" }}
            onClick={() => handleDateClick(date)}
          >
            {date}
          </div>
        );
      }
    }
    return dates;
  };

  const handleDateClick = (date) => {
    if (!date) return;
    const newDate = newDate(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      date
    );
    onDateChange(newDate);
  };
  return (
    <div className="calendar-container">
      {!hideSidebar && <Sidebar />}
      <div className="calendar-main">
        <div className="header">
          <button onClick={handlePreviousMonth}>{buttonTexts.prev}</button>
          <div>
            <p>currentDate</p>
          </div>
          <button onClick={handleNextMonth}>{buttonTexts.next}</button>
        </div>
        <div className="days"></div>
        <div className="dates"></div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div>
      <h3>Sidebar</h3>
    </div>
  );
};

export default Calender;
