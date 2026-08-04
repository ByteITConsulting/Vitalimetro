/**
 * Validate input is a safe number within bounds
 * @param {*} value - value to validate
 * @param {number} min - minimum allowed value
 * @param {number} max - maximum allowed value
 * @returns {boolean}
 */
function isValidNumber(value, min, max) {
  // Reject null, undefined, empty strings, booleans, objects
  if (value === null || value === undefined || value === '' || typeof value === 'boolean' || typeof value === 'object') {
    return false;
  }
  
  const num = Number(value);
  return !isNaN(num) && isFinite(num) && num >= min && num <= max;
}

/**
 * Safely coerce and validate a number
 * @param {*} value - value to coerce
 * @param {number} min - minimum allowed value
 * @param {number} max - maximum allowed value
 * @param {number} fallback - fallback value if invalid
 * @returns {number}
 */
function safeNumber(value, min, max, fallback) {
  if (isValidNumber(value, min, max)) {
    return Number(value);
  }
  return fallback;
}

/**
 * Convert total inches to centimeters
 * @param {number} totalInches
 * @returns {number}
 */
export function cmFromFtIn(totalInches) {
  // Validate: 48-87 inches (4'0" to 7'3")
  const inches = safeNumber(totalInches, 48, 87, 67);
  return inches * 2.54;
}

/**
 * Format total inches as feet and inches (e.g., "5'7\"")
 * @param {number} totalInches
 * @returns {string}
 */
export function formatFtIn(totalInches) {
  const ft = Math.floor(totalInches / 12);
  const inch = Math.round(totalInches % 12);
  return `${ft}'${inch}"`;
}

/**
 * Get height in centimeters based on current unit system
 * @param {number} heightCm - height in centimeters
 * @param {number} heightFt - height in inches
 * @param {boolean} useFt - whether using feet/inches
 * @returns {number}
 */
export function getHeightCm(heightCm, heightFt, useFt) {
  if (useFt) {
    // Validate feet/inches: 48-87 inches
    return cmFromFtIn(safeNumber(heightFt, 48, 87, 67));
  }
  // Validate cm: 120-220 cm
  return safeNumber(heightCm, 120, 220, 170);
}

/**
 * Calculate BMI from weight (kg) and height (cm)
 * @param {number} weight - weight in kilograms (30-200)
 * @param {number} heightCm - height in centimeters (120-220)
 * @returns {number}
 * @throws {Error} if inputs are invalid
 */
export function calculateBMI(weight, heightCm) {
  // Validate weight: 30-200 kg
  const validWeight = safeNumber(weight, 30, 200, 70);
  // Validate height: 120-220 cm
  const validHeight = safeNumber(heightCm, 120, 220, 170);
  
  if (validHeight === 0) {
    throw new Error('Height cannot be zero');
  }
  
  const heightM = validHeight / 100;
  return validWeight / (heightM * heightM);
}

/**
 * Classify BMI value into a zone
 * @param {number} imc - BMI value
 * @param {Array} zones - array of zone objects
 * @returns {Object}
 */
export function classifyBMI(imc, zones) {
  // Validate BMI is a valid number
  const bmi = Number(imc);
  
  // For NaN, default to first zone
  if (isNaN(bmi)) {
    return zones[0];
  }
  
  // For Infinity or extreme values, use last zone
  if (!isFinite(bmi)) {
    return zones[zones.length - 1];
  }
  
  // Find zone matching BMI range
  const zone = zones.find(z => bmi >= z.min && bmi < z.max);
  return zone || zones[zones.length - 1];
}

// Export validation functions for testing
export { isValidNumber, safeNumber };
