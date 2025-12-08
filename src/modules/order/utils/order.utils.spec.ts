import { describe, it, expect } from "vitest";
import { OrderUtils } from "./order.utils";

describe("OrderUtils.getOrdinalSuffix", () => {
  it('should return "1st" for 1', () => {
    expect(OrderUtils.getOrdinalSuffix(1)).toBe("1st");
  });

  it('should return "2nd" for 2', () => {
    expect(OrderUtils.getOrdinalSuffix(2)).toBe("2nd");
  });

  it('should return "3rd" for 3', () => {
    expect(OrderUtils.getOrdinalSuffix(3)).toBe("3rd");
  });

  it('should return "4th" for 4', () => {
    expect(OrderUtils.getOrdinalSuffix(4)).toBe("4th");
  });

  it('should return "11th" for 11', () => {
    expect(OrderUtils.getOrdinalSuffix(11)).toBe("11th");
  });

  it('should return "12th" for 12', () => {
    expect(OrderUtils.getOrdinalSuffix(12)).toBe("12th");
  });

  it('should return "13th" for 13', () => {
    expect(OrderUtils.getOrdinalSuffix(13)).toBe("13th");
  });

  it('should return "21st" for 21', () => {
    expect(OrderUtils.getOrdinalSuffix(21)).toBe("21st");
  });

  it('should return "22nd" for 22', () => {
    expect(OrderUtils.getOrdinalSuffix(22)).toBe("22nd");
  });

  it('should return "23rd" for 23', () => {
    expect(OrderUtils.getOrdinalSuffix(23)).toBe("23rd");
  });

  it('should return "100th" for 100', () => {
    expect(OrderUtils.getOrdinalSuffix(100)).toBe("100th");
  });

  it('should return "111th" for 111', () => {
    expect(OrderUtils.getOrdinalSuffix(111)).toBe("111th");
  });

  it('should return "112th" for 112', () => {
    expect(OrderUtils.getOrdinalSuffix(112)).toBe("112th");
  });

  it('should return "113th" for 113', () => {
    expect(OrderUtils.getOrdinalSuffix(113)).toBe("113th");
  });

  it('should return "120th" for 120', () => {
    expect(OrderUtils.getOrdinalSuffix(120)).toBe("120th");
  });

  it('should return "999th" for 999', () => {
    expect(OrderUtils.getOrdinalSuffix(999)).toBe("999th");
  });
});
