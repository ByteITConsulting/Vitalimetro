import { 
  calculateBMI, 
  classifyBMI, 
  cmFromFtIn, 
  formatFtIn, 
  getHeightCm,
  isValidNumber,
  safeNumber 
} from './bmiCalculator';
import { ZONES } from '../data/zones';

describe('Input Validation - Security Tests', () => {
  describe('isValidNumber', () => {
    it('should reject NaN', () => {
      expect(isValidNumber(NaN, 0, 100)).toBe(false);
    });

    it('should reject Infinity', () => {
      expect(isValidNumber(Infinity, 0, 100)).toBe(false);
      expect(isValidNumber(-Infinity, 0, 100)).toBe(false);
    });

    it('should reject negative numbers outside range', () => {
      expect(isValidNumber(-1, 0, 100)).toBe(false);
    });

    it('should reject numbers outside max bound', () => {
      expect(isValidNumber(101, 0, 100)).toBe(false);
    });

    it('should accept valid numbers in range', () => {
      expect(isValidNumber(50, 0, 100)).toBe(true);
      expect(isValidNumber(0, 0, 100)).toBe(true);
      expect(isValidNumber(100, 0, 100)).toBe(true);
    });

    it('should reject non-numeric strings', () => {
      expect(isValidNumber('abc', 0, 100)).toBe(false);
      expect(isValidNumber('', 0, 100)).toBe(false);
    });

    it('should reject null and undefined', () => {
      expect(isValidNumber(null, 0, 100)).toBe(false);
      expect(isValidNumber(undefined, 0, 100)).toBe(false);
    });
  });

  describe('safeNumber', () => {
    it('should return valid number if in range', () => {
      expect(safeNumber(50, 0, 100, 0)).toBe(50);
    });

    it('should return fallback for NaN', () => {
      expect(safeNumber(NaN, 0, 100, 50)).toBe(50);
    });

    it('should return fallback for Infinity', () => {
      expect(safeNumber(Infinity, 0, 100, 50)).toBe(50);
    });

    it('should return fallback for out-of-range values', () => {
      expect(safeNumber(-1, 0, 100, 50)).toBe(50);
      expect(safeNumber(101, 0, 100, 50)).toBe(50);
    });

    it('should coerce string numbers', () => {
      expect(safeNumber('75', 0, 100, 50)).toBe(75);
    });
  });

  describe('calculateBMI - Input Validation', () => {
    it('should reject NaN weight', () => {
      const result = calculateBMI(NaN, 170);
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1000);
    });

    it('should reject NaN height', () => {
      const result = calculateBMI(70, NaN);
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1000);
    });

    it('should reject Infinity weight', () => {
      const result = calculateBMI(Infinity, 170);
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1000);
    });

    it('should reject Infinity height', () => {
      const result = calculateBMI(70, Infinity);
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1000);
    });

    it('should reject negative weight', () => {
      const result = calculateBMI(-50, 170);
      // Should use fallback weight (70)
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1000);
    });

    it('should reject negative height', () => {
      const result = calculateBMI(70, -170);
      // Should use fallback height (170)
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1000);
    });

    it('should reject extreme values', () => {
      const result = calculateBMI(9999, 9999);
      // Should use fallback values
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1000);
    });

    it('should calculate valid BMI for normal inputs', () => {
      const bmi = calculateBMI(70, 170);
      expect(bmi).toBeCloseTo(24.22, 1);
    });

    it('should handle string numbers', () => {
      const bmi = calculateBMI('70', '170');
      expect(bmi).toBeCloseTo(24.22, 1);
    });
  });

  describe('cmFromFtIn - Input Validation', () => {
    it('should reject NaN', () => {
      const result = cmFromFtIn(NaN);
      expect(result).toBeGreaterThan(0);
    });

    it('should reject Infinity', () => {
      const result = cmFromFtIn(Infinity);
      expect(result).toBeGreaterThan(0);
    });

    it('should reject out-of-range values', () => {
      const result = cmFromFtIn(1000);
      // Should use fallback (67 inches)
      expect(result).toBeCloseTo(67 * 2.54, 1);
    });

    it('should convert valid inches to cm', () => {
      const result = cmFromFtIn(70);
      expect(result).toBeCloseTo(177.8, 1);
    });
  });

  describe('getHeightCm - Input Validation', () => {
    it('should handle cm mode with valid input', () => {
      const result = getHeightCm(170, 67, false);
      expect(result).toBe(170);
    });

    it('should handle ft/in mode with valid input', () => {
      const result = getHeightCm(170, 67, true);
      expect(result).toBeCloseTo(170.18, 1);
    });

    it('should reject invalid cm', () => {
      const result = getHeightCm(NaN, 67, false);
      expect(result).toBe(170); // fallback
    });

    it('should reject invalid ft/in', () => {
      const result = getHeightCm(170, NaN, true);
      expect(result).toBeCloseTo(170.18, 1); // Should use fallback (67)
    });

    it('should reject out-of-range cm', () => {
      const result = getHeightCm(500, 67, false);
      expect(result).toBe(170); // fallback
    });

    it('should reject out-of-range ft/in', () => {
      const result = getHeightCm(170, 1000, true);
      expect(result).toBeCloseTo(170.18, 1); // Should use fallback (67)
    });
  });

  describe('classifyBMI - Input Validation', () => {
    it('should classify valid BMI', () => {
      const zone = classifyBMI(25, ZONES);
      expect(zone).toBeDefined();
      expect(zone.name).toBeDefined();
    });

    it('should handle NaN BMI', () => {
      const zone = classifyBMI(NaN, ZONES);
      expect(zone).toBe(ZONES[0]); // Default to first zone
    });

    it('should handle Infinity BMI', () => {
      const zone = classifyBMI(Infinity, ZONES);
      expect(zone).toBeDefined();
      expect(zone).toBe(ZONES[ZONES.length - 1]); // Use last zone for extreme values
    });

    it('should handle negative BMI', () => {
      const zone = classifyBMI(-10, ZONES);
      expect(zone).toBeDefined();
    });

    it('should handle BMI at boundaries', () => {
      const zone1 = classifyBMI(18.4, ZONES);
      const zone2 = classifyBMI(18.5, ZONES);
      expect(zone1).toBeDefined();
      expect(zone2).toBeDefined();
    });

    it('should handle very large BMI values', () => {
      const zone = classifyBMI(9999, ZONES);
      expect(zone).toBeDefined();
      expect(zone).toBe(ZONES[ZONES.length - 1]); // Last zone for extreme values
    });
  });

  describe('formatFtIn', () => {
    it('should format valid inches', () => {
      expect(formatFtIn(70)).toBe("5'10\"");
      expect(formatFtIn(67)).toBe("5'7\"");
    });

    it('should handle edge cases', () => {
      expect(formatFtIn(0)).toBe("0'0\"");
      expect(formatFtIn(12)).toBe("1'0\"");
    });
  });

  describe('End-to-End Security', () => {
    it('should safely handle malicious input combinations', () => {
      const result = calculateBMI('NaN', 'Infinity');
      expect(isFinite(result)).toBe(true);
      expect(result).toBeGreaterThan(0);
    });

    it('should safely process user input with injection attempts', () => {
      const result = calculateBMI('70; alert("xss")', '170; fetch(...)');
      expect(isFinite(result)).toBe(true);
    });

    it('should classify result even with invalid inputs', () => {
      const bmi = calculateBMI('abc', 'xyz');
      const zone = classifyBMI(bmi, ZONES);
      expect(zone).toBeDefined();
      expect(zone.name).toBeDefined();
    });
  });
});
