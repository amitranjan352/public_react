import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material';

const RadioButton = ({ label, name, options, value, onChange }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        name={name}
        value={value}
        onChange={onChange}
        row
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
