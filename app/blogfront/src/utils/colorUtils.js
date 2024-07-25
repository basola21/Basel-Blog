// utilities/colorUtils.js

/**
 * Generates a hash code from a given string.
 * @param {string} string - The input string.
 * @returns {number} The generated hash code.
 */
const stringToHash = (string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

/**
 * Converts a hash code to a hex color.
 * @param {number} hash - The input hash code.
 * @returns {string} The hex color string.
 */
const hashToColor = (hash) => {
  const color = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - color.length) + color;
};

/**
 * Generates a color based on the input string.
 * @param {string} input - The input string, typically a category name.
 * @returns {string} The generated hex color code.
 */
export const getCategoryColor = (input) => {
  const hash = stringToHash(input);
  return hashToColor(hash);
};
