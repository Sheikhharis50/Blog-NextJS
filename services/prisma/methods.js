export const validateModel = (payload, requiredAttrs) => {
  if (!payload) payload = {};
  return requiredAttrs.filter((attr) => !(attr in payload));
};