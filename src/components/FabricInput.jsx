import React, { useState } from "react";
import InputField from "./UI/InputField";
import RadioButton from "./UI/RadioButton";
import { Button, Typography, Box } from "@mui/material";
import MultiSelectDropdown from "./UI/MultiSelectDropdown";
import AutoSuggestInput from "./UI/AutoSuggestInput";
import { Data } from "../utils/data";

const FabricInput = ({ fabrics, onAddFabric }) => {
  const [currentFabric, setCurrentFabric] = useState({
    name: [],
    perPieceRequirement: "",
    unit: "M",
    processes: [],
    colors: [],
    stagesToSkip: [],
  });

  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  /**
   * Handles input changes for fabric details.
   *
   * @param {Object} e - Event object
   * @param {string} e.target.name - The name of the field being updated
   * @param {any} e.target.value - The new value of the field
   */
  const handleFabricChange = (e) => {
    const { name, value } = e.target;
    setCurrentFabric((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Adds the current fabric to the fabric list and resets the form.
   */
  const handleAddFabric = () => {
    onAddFabric(currentFabric);
    resetFabricForm();
  };

  /**
   * Resets the fabric form to its initial state.
   */
  const resetFabricForm = () => {
    setCurrentFabric({
      name: [],
      perPieceRequirement: "",
      unit: "M",
      processes: [],
      colors: [],
      stagesToSkip: [],
    });
  };

  /**
   * Handles input changes for the auto-suggest field and simulates fetching suggestions.
   *
   * @param {string} inputValue - The value entered in the auto-suggest field
   */
  const handleInputChange = (inputValue) => {
    if (inputValue) {
      setLoading(true);
      // Simulate fetching suggestions
      setTimeout(() => {
        setOptions(Data.FabricName);
        setLoading(false);
      }, 500);
    } else {
      setOptions([]);
    }
  };

  const unitOptions = [
    { value: "M", label: "Meter" },
    { value: "Kg", label: "Kilogram" },
  ];

  return (
    <Box sx={{ padding: 4, borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add Fabric
      </Typography>

      <div className="flex gap-4 flex-col">
        {/* Auto-Suggest Input */}
        <AutoSuggestInput
          options={options}
          onInputChange={handleInputChange}
          loading={loading}
        />

        {/* Per Piece Requirement & Unit Selection */}
        <div className="flex gap-4 justify-between">
          <InputField
            label="Per Piece Requirement"
            type="number"
            name="perPieceRequirement"
            value={currentFabric.perPieceRequirement}
            onChange={handleFabricChange}
          />
          <RadioButton
            label="Select Unit"
            name="unit"
            options={unitOptions}
            value={currentFabric.unit}
            onChange={handleFabricChange}
          />
        </div>

        {/* Processes & Stages to Skip Selection */}
        <MultiSelectDropdown
          label="Processes"
          options={Data.Processes}
          value={currentFabric.processes}
          onChange={(selectedValues) =>
            handleFabricChange({
              target: { name: "processes", value: selectedValues },
            })
          }
          placeholder="Search Processes"
        />

        <MultiSelectDropdown
          label="Stages to Skip"
          options={Data.StagesToBeSkipped}
          value={currentFabric.stagesToSkip}
          onChange={(selectedValues) =>
            handleFabricChange({
              target: { name: "stagesToSkip", value: selectedValues },
            })
          }
          placeholder="Search Stages to Skip"
        />

        {/* Add Fabric Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddFabric}
          sx={{ mt: 2 }}
        >
          Add Fabric
        </Button>
      </div>
    </Box>
  );
};

export default FabricInput;
