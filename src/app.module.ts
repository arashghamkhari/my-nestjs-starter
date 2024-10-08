import { Module } from '@nestjs/common';
import { SampleModule } from './modules/sample/sample.module';
import { AppConfig } from './configs/app.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TypeormPostgresConfig } from './core/typeorm/configs/typeorm-postgres.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(new TypeormPostgresConfig() as TypeOrmModuleOptions),
    SampleModule,
  ],
  controllers: [],
  providers: [AppConfig],
})
export class AppModule {}
