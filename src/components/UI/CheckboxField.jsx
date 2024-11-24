import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

const CheckboxField = ({ label, name, checked, onChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          checked={checked}
          onChange={onChange}
          color="primary"
        />
      }
      label={label}
    />
  );
};

export default CheckboxField;
