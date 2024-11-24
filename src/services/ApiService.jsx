const API_URL = ""; // Changeable base URL

const ApiService = {
  saveFormData: async (data) => {
    try {
      console.log("Submitting Data to API:", data); // Mock submission
      return { status: 200, message: "Data saved successfully!" };
    } catch (error) {
      console.error("Error saving data:", error);
      throw new Error("Failed to save data");
    }
  },
};

export default ApiService;
