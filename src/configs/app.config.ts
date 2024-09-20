import { Injectable } from '@nestjs/common';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
import { ConfigAbstract } from '../utilities/config.abstract.js';
import * as process from 'node:process';

@Injectable()
export class AppConfig extends ConfigAbstract {
  @IsNumber()
  @IsNotEmpty()
  port = +process.env.PORT || 80;

  @IsBoolean()
  @IsNotEmpty()
  isProduction = process.env.NODE_ENV === 'production';

  constructor() {
    super();
    this.validate(this.constructor.name);
  }
}
