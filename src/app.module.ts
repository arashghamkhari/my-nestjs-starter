import { Module } from '@nestjs/common';
import { SampleModule } from './modules/sample/sample.module';

@Module({
  imports: [SampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
