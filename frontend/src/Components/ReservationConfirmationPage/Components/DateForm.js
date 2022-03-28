/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { React, useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import 'react-datepicker/dist/react-datepicker.css';

function DateForm(props) {
  const [value, onChange] = useState(new Date());
  const { setReservationDate } = props;

  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}

export default DateForm;
