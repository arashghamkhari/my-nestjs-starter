import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { isString } from '@nestjs/common/utils/shared.utils.js';

export class Purify {
  /**
   * @param value
   * @param each Specifies if value is an array and each of its items must be protected.
   * @constructor
   */
  public static XSSProtector(value: string | string[], each: boolean = false) {
    if (each) {
      if (!Array.isArray(value)) return Purify.XSSProtector(value);

      return value.map((val) => Purify.XSSProtector(val));
    }

    return isString(value)
      ? DOMPurify(new JSDOM('').window).sanitize(value)
      : value;
  }

  /**
   * @param value
   * @param each Specifies if value is an array and each of its items must be protected.
   * @constructor
   */
  public static trimExtraSpaces(
    value: string | string[],
    each: boolean = false,
  ) {
    if (each) {
      if (!Array.isArray(value)) return Purify.XSSProtector(value);

      return value.map((val) => Purify.trimExtraSpaces(val));
    }

    return isString(value) ? value.trim().replace(/\s+/g, ' ') : value;
  }

  public static makeUniqueItems(value: unknown[]): unknown[] {
    if (!Array.isArray(value)) return value;

    return [...new Set(value)];
  }
}
