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
}
