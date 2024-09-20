import { Controller, Get } from '@nestjs/common';
import { SampleService } from '../services/sample.servce';

@Controller()
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get()
  getHello(): string {
    return this.sampleService.getHello();
  }
}
