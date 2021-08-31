import { formatDate } from "../formatDate";

describe("function formatDate(date) ", () => {
  it('formatDate(0) returns "01 January 1970"', () => {
    expect(formatDate(0)).toMatch("01 January 1970");
  });

  it('formatDate(2020, 0, 17) returns "17 January 2020"', () => {
    expect(formatDate(2020, 0, 17)).toMatch("17 January 2020");
  });
});
