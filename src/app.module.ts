import { Module } from '@nestjs/common';
import { SampleModule } from './modules/sample/sample.module';
import { AppConfig } from './configs/app.config';

@Module({
  imports: [SampleModule],
  controllers: [],
  providers: [AppConfig],
})
export class AppModule {}
