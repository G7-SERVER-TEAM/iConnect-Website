"use client";

import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import th from "date-fns/locale/th";
registerLocale("th", th);

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ReactDatePicker = ({date = new Date()}) => {

  const [startDate, setStartDate] = useState(date);
  return (
    <DatePicker 
      locale="th"
      dateFormat='dd/MM/yyyy'
      selected={startDate} 
      onChange={(date) => setStartDate(date)} 
      className="w-full px-3 outline-none border border-gray-400 rounded-full text-center"
    />
  );
};

export default ReactDatePicker;