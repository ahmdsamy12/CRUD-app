/**
 * Validates the product details.
 *
 * @param {Object} product - The product object to validate.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.imageUrl - The URL of the product image.
 * @param {string} product.price - The price of the product.
 * @returns {Object} An object containing error messages for each invalid field.
 * @returns {string} returns.title - Error message for the title field, if invalid.
 * @returns {string} returns.description - Error message for the description field, if invalid.
 * @returns {string} returns.imageUrl - Error message for the imageUrl field, if invalid.
 * @returns {string} returns.price - Error message for the price field, if invalid.
 */

export const productValidation = (product: {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  };

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Title Must be between 10 and 80 characters";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 80
  ) {
    errors.description = "Description Must be between 10 and 80 characters";
  }

  const imageUrlPattern =
    /https?:\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?\.(?:png|jpg|jpeg|gif|bmp|webp)/i;

  if (!product.imageUrl.trim() || !imageUrlPattern.test(product.imageUrl)) {
    errors.imageUrl = "Image URL is not valid";
  }
  if (!product.price.trim() || isNaN(+product.price)) {
    errors.price = "Valid Price is required";
  }

  return errors;
};
