export const takeHomeSalary = (annualIncome, taxYear) => {
  const validTaxYears = ["2021/2022", "2022/2023"];

  if (!validTaxYears.includes(taxYear)) {
    return "Please enter a valid tax year!";
  }

  if (annualIncome <= 0) {
    return "Please enter a valid salary!";
  }

  //check if annualIncome =<12500
  if (annualIncome <= 12500) {
    return {
      annualIncome: annualIncome,
      taxYear: taxYear,
      taxableIncome: 0,
      taxPercentage: 0,
      taxAmount: 0,
      takeHomeSalary: annualIncome,
    };
  }
  const taxableIncome = annualIncome - 12500;

  const getTaxPercentage = (annualIncome, taxYear) => {
    if (taxYear === "2021/2022") {
      if (annualIncome > 12500 && annualIncome < -40000) {
        return 20;
      }
      if (annualIncome > 40000 && annualIncome < =100000) {
        return 40;
    }
    return 45
  };
};
