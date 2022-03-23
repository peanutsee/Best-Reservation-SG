/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-datepicker/dist/react-datepicker.css';

function DateForm() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}

export default DateForm;
