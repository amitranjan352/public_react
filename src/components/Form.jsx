import React, { useState } from "react";
import InputField from "./UI/InputField";
import FabricInput from "./FabricInput";
import { Button, Typography, Box } from "@mui/material";
import AutoSuggestInput from "./UI/AutoSuggestInput";
import MultiSelectDropdown from "./UI/MultiSelectDropdown";
import RadioButton from "./UI/RadioButton";
import CustomDatePicker from "./UI/CustomDatePicker";
import { Data } from "../utils/data";
const Form = () => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    productionPerDay: "",
    totalOrderQuantity: "",
    fabrics: [],
    chinaFabric: false,
    selectedChinaFabrics: [],
    majorFabric: "",
    trims: [],
    accessories: [],
  });

  /**
   * Handles the change in form fields.
   * @param {Object} e - Event object from the form field change.
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /**
   * Adds a new fabric to the fabrics list in the form data.
   * @param {Object} fabricData - The fabric data to be added.
   */
  const handleAddFabric = (fabricData) => {
    setFormData((prev) => ({
      ...prev,
      fabrics: [...prev.fabrics, fabricData],
    }));
  };

  /**
   * Handles form submission.
   * @param {Object} e - Event object from the submit action.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data", formData);
  };

  const IsChinaFabricOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

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
        setOptions(Data);
        setLoading(false);
      }, 500);
    } else {
      setOptions([]);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: "0 auto",
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
      className="bg-white"
    >
      <Typography variant="h4" gutterBottom className="text-center mb-6">
        T&A Data Submission Form
      </Typography>

      <div className="flex flex-col gap-6">
        {/* General Inputs */}
        <div className="flex items-center justify-between gap-4">
          <CustomDatePicker
            label="Start Date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <CustomDatePicker
            label="End Date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>

        <InputField
          label="Production Per Day Per Machine"
          type="number"
          name="productionPerDay"
          value={formData.productionPerDay}
          onChange={handleChange}
          required
        />
        <InputField
          label="Total Order Quantity"
          type="number"
          name="totalOrderQuantity"
          value={formData.totalOrderQuantity}
          onChange={handleChange}
          required
        />

        {/* Fabric Section */}
        <FabricInput fabrics={formData.fabrics} onAddFabric={handleAddFabric} />

        <RadioButton
          label="Is China Fabric Present?"
          name="chinaFabric"
          options={IsChinaFabricOptions}
          value={formData.chinaFabric}
          onChange={handleChange}
        />
        {formData.chinaFabric && (
          <MultiSelectDropdown
            label="Select China Fabric"
            options={Data.ChinaFabrics}
            value={formData.selectedChinaFabrics}
            onChange={(selectedValues) =>
              setFormData((prev) => ({
                ...prev,
                selectedChinaFabrics: selectedValues,
              }))
            }
            placeholder="Search China Fabrics"
          />
        )}

        {/* Major Fabric */}
        <AutoSuggestInput
          label="Major Fabric"
          options={Data.MajorFabric}
          onInputChange={handleInputChange}
          loading={loading}
        />
        {/* Trims & Accessories */}
        {/* Auto-Suggest Input */}
        <AutoSuggestInput
          label="Accessories"
          options={Data.Accessories}
          onInputChange={handleInputChange}
          loading={loading}
        />

        {/* Auto-Suggest Input */}
        <AutoSuggestInput
          label="TRIMS"
          options={Data.TRIMS}
          onInputChange={handleInputChange}
          loading={loading}
        />
        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="success"
          onClick={handleSubmit}
          sx={{ mt: 4 }}
          className="w-full py-2 text-white"
        >
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default Form;
