/**
 * Slices a given text string to a specified maximum length and appends ellipsis if the text exceeds the maximum length.
 *
 * @param {string} txt - The text string to be sliced.
 * @param {number} [max=50] - The maximum length of the sliced text. Defaults to 50.
 * @returns {string} - The sliced text with ellipsis appended if the original text exceeds the maximum length.
 */

export const txtSlicer = (txt: string, max: number = 50) => {
  return txt.length > max ? txt.slice(0, max) + "..." : txt;
};
