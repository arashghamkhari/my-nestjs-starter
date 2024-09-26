export class PersianUtility {
  private static readonly PERSIAN_NUMBERS = [
    '۰',
    '۱',
    '۲',
    '۳',
    '۴',
    '۵',
    '۶',
    '۷',
    '۸',
    '۹',
  ];

  private static readonly LATIN_NUMBERS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];

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

  public static toLatinNumbers(str: string): string {
    return str.replace(/[۰-۹]/g, (char) => {
      return PersianUtility.LATIN_NUMBERS[
        PersianUtility.PERSIAN_NUMBERS.indexOf(char)
      ];
    });
  }

  public static fromLatinNumbers(str: string): string {
    return str.replace(/[0-9]/g, (char) => {
      return PersianUtility.PERSIAN_NUMBERS[
        PersianUtility.LATIN_NUMBERS.indexOf(char)
      ];
    });
  }

  public static fromArabic(str: string): string {
    return str.replace(
      /ك|دِ|بِ|زِ|ذِ|شِ|سِ|ى|ي|آ|ئ|ة|ؤ|إ|أ|١|٢|٣|٤|٥|٦|٧|٨|٩|٠/gi,
      (x: string) => PersianUtility.ARABIC_PERSIAN_CHAR_MAP[x],
    );
  }
}
