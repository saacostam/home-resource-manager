export const StringUtils = {
  prettifyKebabCase: (kebabCaseString: string): string => {
    return kebabCaseString
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
};
