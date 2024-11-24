import React, { useState } from "react";
import { TextField, Button, List, ListItem, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DynamicList = ({ label, items, setItems }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="mb-4">
      <TextField
        fullWidth
        label={label}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        variant="outlined"
        size="small"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddItem}
        className="mt-2"
      >
        Add
      </Button>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleRemoveItem(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            {item}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DynamicList;
