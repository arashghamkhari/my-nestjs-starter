import { ConfigAbstract } from '../../../utilities/config.abstract.js';
import * as process from 'node:process';
import { IsOptional } from 'class-validator';

export class SentryConfig extends ConfigAbstract {
  @IsOptional()
  DSN = process.env.SENTRY_DSN;

  constructor() {
    super();
    this.validate(this.constructor.name);
  }
}
