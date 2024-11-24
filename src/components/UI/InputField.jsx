import React from "react";
import TextField from "@mui/material/TextField";

const InputField = ({ label, name, type = "text", value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <TextField
        fullWidth
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        variant="outlined"
        size="small"
      />
    </div>
  );
};

export default InputField;
