import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { isString } from '@nestjs/common/utils/shared.utils.js';

export class Purify {
  public static XSSProtector(value: string) {
    return isString(value)
      ? DOMPurify(new JSDOM('').window).sanitize(value)
      : value;
  }

  public static trimExtraSpaces(value: string) {
    return isString(value) ? value.trim().replace(/\s+/g, ' ') : value;
  }
}
