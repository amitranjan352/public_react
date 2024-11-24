import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const MultiSelectDropdown = ({
  label,
  options,
  value,
  onChange,
  placeholder,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleSelectChange = (event) => {
    onChange(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setOpenDropdown(true);
  };

  const handleRemoveChip = (chipToRemove) => {
    const updatedValue = value.filter((item) => item !== chipToRemove);
    onChange(updatedValue);
  };

  const filteredOptions = options.filter((option) =>
    option.value?.toLowerCase()?.includes(searchQuery.toLowerCase())
  );

  const handleSelectOption = (option) => {
    if (!value.includes(option)) {
      const updatedValue = [...value, option];
      onChange(updatedValue);
    }
    setSearchQuery("");
    setOpenDropdown(false);
  };

  return (
    <Box>
      <TextField
        label={label}
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder={placeholder || "Search..."}
        fullWidth
        InputProps={{
          startAdornment: (
            <Box sx={{ display: "flex", gap: 1 }}>
              {value?.map((selectedItem) => (
                <Chip
                  key={selectedItem.value}
                  label={selectedItem.value}
                  onDelete={() => handleRemoveChip(selectedItem.value)}
                  color="primary"
                  size="small"
                  deleteIcon={<CancelIcon />}
                />
              ))}
            </Box>
          ),
          endAdornment: (
            <Box sx={{ flex: 1 }}>
              {/* Empty box ensures the input stretches from left side */}
            </Box>
          ),
        }}
        onClick={() => setOpenDropdown(true)}
      />

      {/* Dropdown list */}
      {openDropdown && (
        <Box
          sx={{
            maxHeight: 200,
            overflowY: "auto",
            border: "1px solid #ccc",
            marginTop: 1,
            backgroundColor: "white",
            zIndex: 100,
          }}
        >
          {filteredOptions?.map((option) => (
            <Box
              key={option.value}
              sx={{
                padding: "8px 16px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
              onClick={() => handleSelectOption(option)}
            >
              {option.value}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MultiSelectDropdown;
