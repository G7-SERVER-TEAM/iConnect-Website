"use client";

import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import th from "date-fns/locale/th";
registerLocale("th", th);

import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = ({ date = new Date(), onChangeValue }) => {
  const [startDate, setStartDate] = useState(date);
  const handleOnChangeValue = (newDate) => {
    onChangeValue(newDate);
  }
  return (
    <DatePicker
      locale="th"
      disabled
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        handleOnChangeValue(date);
      }}
      className="w-full px-3 outline-none border border-gray-400 rounded-full text-center disabled:bg-gray-200"
    />
  );
};

export default ReactDatePicker;
