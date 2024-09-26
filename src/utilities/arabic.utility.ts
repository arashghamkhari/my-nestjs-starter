export class ArabicUtility {
  private static readonly ARABIC_PERSIAN_CHAR_MAP = {
    ك: 'ک',
    دِ: 'د',
    بِ: 'ب',
    زِ: 'ز',
    ذِ: 'ذ',
    شِ: 'ش',
    سِ: 'س',
    ى: 'ی',
    ي: 'ی',
    ة: 'ه',
    ؤ: 'و',
    ئ: 'ی',
    أ: 'ا',
    إ: 'ا',
    آ: 'ا',
    '١': '۱',
    '٢': '۲',
    '٣': '۳',
    '٤': '۴',
    '٥': '۵',
    '٦': '۶',
    '٧': '۷',
    '٨': '۸',
    '٩': '۹',
    '٠': '۰',
  };

  public static toPersian(str: string): string {
    return str.replace(
      /ك|دِ|بِ|زِ|ذِ|شِ|سِ|ى|ي|آ|ئ|ة|ؤ|إ|أ|١|٢|٣|٤|٥|٦|٧|٨|٩|٠/gi,
      (x: string) => ArabicUtility.ARABIC_PERSIAN_CHAR_MAP[x],
    );
  }
}
