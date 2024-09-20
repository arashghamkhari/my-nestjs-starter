import { ConfigAbstract } from '../../../utilities/config.abstract.js';
import { Injectable } from '@nestjs/common';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

@Injectable()
export class TypeormPostgresConfig extends ConfigAbstract {
  @IsNotEmpty()
  type = 'postgres';

  @IsNotEmpty()
  host: string = process.env.POSTGRESQL_HOST;

  @IsNumber()
  @IsNotEmpty()
  port = +process.env.POSTGRESQL_PORT || 5432;

  @IsNotEmpty()
  username = process.env.POSTGRESQL_USER;

  @IsNotEmpty()
  password = process.env.POSTGRESQL_PASSWORD;

  @IsNotEmpty()
  database = process.env.POSTGRESQL_DATABASE_NAME;

  @IsNotEmpty()
  entities = ['dist/**/*.entity{.ts,.js}'];

  @IsNotEmpty()
  migrations = ['dist/**/migrations/*{.ts,.js}'];

  @IsBoolean()
  @IsNotEmpty()
  autoLoadEntities = true;

  @IsNotEmpty()
  @IsBoolean()
  synchronize = false;

  constructor() {
    super();
    this.validate(this.constructor.name);
  }
}
