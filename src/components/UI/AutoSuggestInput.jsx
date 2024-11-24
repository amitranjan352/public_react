import React, { useState } from 'react';
import { TextField, Autocomplete, CircularProgress } from '@mui/material';

const AutoSuggestInput = ({ options, onInputChange, loading,label, ...props }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (onInputChange) {
      onInputChange(newInputValue);
    }
  };

  return (
    <Autocomplete
      freeSolo
      value={inputValue}
      onInputChange={handleInputChange}
      options={options}
      getOptionLabel={(option) => option.label || option}
      renderInput={(params) => (
        <TextField
          {...params}
          {...props}
          label={label}
          variant="outlined"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: loading ? <CircularProgress color="inherit" size={24} /> : null,
          }}
        />
      )}
    />
  );
};

export default AutoSuggestInput;
