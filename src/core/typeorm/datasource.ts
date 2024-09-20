import '../dotenv.js';
import { TypeormPostgresConfig } from './configs/typeorm-postgres.config';
import { DataSource, DataSourceOptions } from 'typeorm';

const typeormConfig = new TypeormPostgresConfig();

export const connectionSource = new DataSource(
  typeormConfig as DataSourceOptions,
);
