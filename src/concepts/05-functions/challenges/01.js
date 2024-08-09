// create function called calculator
// param 1 -> num1
// param 2 -> num2
// param 3 -> operation
export const calculator = (num1, num2, operation) => {
  // if operation is ADD return add result
  // if operation is SUBTRACT return subtract result
  // if operation is MULTIPLY return multiply result
  // if operation is DIVIDE return divide result
  // if operation is MODULUS return modulus result
  // return error message
  if (operation === "ADD") {
    return num1 + num2;
  } else if (operation === "SUBTRACT") {
    return num1 - num2;
  } else if (operation === "MULTIPLY") {
    return num1 * num2;
  } else if (operation === "DIVIDE") {
    return num1 / num2;
  } else if (operation === "MODULUS") {
    return num1 % num2;
  } else {
    return "Invalid operation";
  }
};

// create  a function called
//authentication

export const authentication = (username, password) => {
  if (username === "bobsmith" && password === "Password123!") {
    return "Success";
  } else if (!username || !password) {
    return "Missing credentials";
  } else {
    return "Invalid credentials";
  }
};
