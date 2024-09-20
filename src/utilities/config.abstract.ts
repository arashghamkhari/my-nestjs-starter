import { validateSync } from 'class-validator';

export abstract class ConfigAbstract {
  protected validate(className: string) {
    const e = validateSync(this);

    if (!e.length) return;

    e.map((error) =>
      console.error(
        `Config Error (${className}):`,
        JSON.stringify(error.constraints),
      ),
    );

    process.exit(1);
  }

  protected trimEndForwardSlashes(str: string): string | undefined {
    return str ? str.replaceAll(/[\/]+$/g, '') : str;
  }
}
