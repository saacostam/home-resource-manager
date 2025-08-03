export const OrderUtils = {
  getOrdinalSuffix(n: number): string {
    if (n % 100 >= 11 && n % 100 <= 13) {
      return `${String(n)}th`;
    }

    switch (n % 10) {
      case 1:
        return `${String(n)}st`;
      case 2:
        return `${String(n)}nd`;
      case 3:
        return `${String(n)}rd`;
      default:
        return `${String(n)}th`;
    }
  },
};
