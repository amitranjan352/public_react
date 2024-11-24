export const validateForm = (data) => {
    if (!data.startDate || !data.endDate || !data.productionPerDay || !data.totalOrderQuantity) {
      return false;
    }
    if (data.fabrics.length === 0) {
      return false;
    }
    return true;
  };
  