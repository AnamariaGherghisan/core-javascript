export const operators = () => {
  // declare the gross annual salary
  // declare the tax free amount
  // calculate the taxable amount
  // declare the tax percentage
  // calculate the tax amount
  // calculate the take home amount
  // display the take home salary amount

  // Define the gross annual salary
  const grossAnnualSalary = 50000;

  // Define the tax-free amount
  const taxFreeAmount = 12500;

  // Calculate the taxable amount
  const taxableAmount = grossAnnualSalary - taxFreeAmount;

  // Define the tax rate
  const taxRate = 0.3;

  // Calculate the tax amount
  const taxAmount = taxableAmount * taxRate;

  // Calculate the take-home salary
  const takeHomeSalary = grossAnnualSalary - taxAmount;

  // Display the result in the console
  console.log(`Your take home salary is £${takeHomeSalary}`);
};
