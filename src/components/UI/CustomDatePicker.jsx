import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


const CustomDatePicker = ({value,onChange,label}) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
  
        <DatePicker
          label={label}
          value={dayjs(value)}
          onChange={onChange}
        />
      
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
