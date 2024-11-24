import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const SelectField = ({
  label,
  name,
  options = [],
  value,
  onChange,
  multiple = false,
  disabledOptions = [],
}) => {
  return (
    <FormControl fullWidth size="small" className="mb-4">
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        multiple={multiple}
        label={label}
      >
        {!multiple && <MenuItem value="">Select an option</MenuItem>}
        {options.map((option, index) => (
          <MenuItem
            key={index}
            value={option.value}
            disabled={disabledOptions.includes(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
