/**
 * Convert total inches to centimeters
 * @param {number} totalInches
 * @returns {number}
 */
export function cmFromFtIn(totalInches) {
  return totalInches * 2.54;
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
  return useFt ? cmFromFtIn(heightFt) : heightCm;
}

/**
 * Calculate BMI from weight (kg) and height (cm)
 * @param {number} weight - weight in kilograms
 * @param {number} heightCm - height in centimeters
 * @returns {number}
 */
export function calculateBMI(weight, heightCm) {
  const heightM = heightCm / 100;
  return weight / (heightM * heightM);
}

/**
 * Classify BMI value into a zone
 * @param {number} imc - BMI value
 * @param {Array} zones - array of zone objects
 * @returns {Object}
 */
export function classifyBMI(imc, zones) {
  return zones.find(z => imc >= z.min && imc < z.max) || zones[zones.length - 1];
}
