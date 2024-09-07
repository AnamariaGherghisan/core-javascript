import { takeHomeSalary } from ".";

describe("takeHomeSalary", () => {
  describe("for tax year 2021/2022", () => {
    it("should return expected result for 30000", () => {
      const expected = 
    });

    it("should return expected result for 50000", () => {});

    it("should return expected result for 150000", () => {});

    it("should return expected result for 10000", () => {
      const expected = {
        annualIncome: 10000,
        taxYear: "2021/2022",
        taxableIncome: 0,
        taxPercentage: 0,
        taxAmount: 0,
        takeHomeSalary: 10000,
      };
      const actual = takeHomeSalary(10000, "2021/2022");
      expect(actual).toEqual(expected);
    });
  });

  describe("for tax year 2022/2023", () => {
    it("should return expected result for 30000", () => {});

    it("should return expected result for 50000", () => {});

    it("should return expected result for 150000", () => {});

    it("should return expected result for 10000", () => {
      const expected = {
        annualIncome: 10000,
        taxYear: "2021/2022",
        taxableIncome: 0,
        taxPercentage: 0,
        taxAmount: 0,
        takeHomeSalary: 10000,
      };
      const actual = takeHomeSalary(10000, "2021/2022");
      expect(actual).toEqual(expected);
    });
  });

  describe("error handling", () => {
    it("should return error message for invalid year", () => {
      const expected = "Please enter a valid tax year!";
      const actual = takeHomeSalary(30000, "2020/2021");
      expect(actual).toEqual(expected);
    });

    it("should return error message for annual income 0", () => {
      const expected = "Please enter a valid salary!";
      const actual = takeHomeSalary(0, "2021/2022");
      expect(actual).toEqual(expected);
    });

    it("should return error message for negative annual income", () => {
      const expected = "Please enter a valid salary!";
      const actual = takeHomeSalary(-1, "2021/2022");
      expect(actual).toEqual(expected);
    });
  });
});
