export const validateMobile = (mobile: string): boolean => {
  return /^[6-9]\d{9}$/.test(mobile.trim());
};