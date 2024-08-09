import { drivingLicense } from ".";

describe("drivingLicense", () => {
  it("should return expected message for age 18", () => {
    const expected =
      "Great news, you are cleared to drive until the age of 65.";
    const actual = drivingLicense(18);
    expect(actual).toEqual(expected);
  });
  it("should return expected message for age 65", () => {
    const expected =
      "Great news, you are cleared to drive until the age of 65.";
    const actual = drivingLicense(65);
    expect(actual).toEqual(expected);
  });
  it("should return expected message for age 40", () => {
    const expected =
      "Great news, you are cleared to drive until the age of 65.";
    const actual = drivingLicense(40);
    expect(actual).toEqual(expected);
  });
  it("should return expected message for age 17", () => {
    const expected =
      "Sorry, you are not allowed to drive until you turn 18 years of age.";
    const actual = drivingLicense(17);
    expect(actual).toEqual(expected);
  });
  it("should return expected message for age 66", () => {
    const expected =
      "Attention, you need to apply for a senior's license by taking the senior's driving test.";
    const actual = drivingLicense(66);
    expect(actual).toEqual(expected);
  });
  it("should return expected message for age 0", () => {
    const expected =
      "Please enter a valid age, your age should be a positive integer.";
    const actual = drivingLicense(0);
    expect(actual).toEqual(expected);
  });
  it("should return expected message for age -1", () => {
    const expected =
      "Please enter a valid age, your age should be a positive integer.";
    const actual = drivingLicense(-1);
    expect(actual).toEqual(expected);
  });
  it("should return expected message for age -10.5", () => {
    const expected =
      "Please enter a valid age, your age should be a positive integer.";
    const actual = drivingLicense(-10.5);
    expect(actual).toEqual(expected);
  });
  it("should return expected message for age undefined", () => {
    const expected =
      "Please enter a valid age, your age should be a positive integer.";
    const actual = drivingLicense();
    expect(actual).toEqual(expected);
  });
  it("should return expected message for age 20.5", () => {
    const expected =
      "Please enter a valid age, your age should be a positive integer.";
    const actual = drivingLicense(20.5);
    expect(actual).toEqual(expected);
  });
});
