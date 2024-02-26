import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('/test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('/')
  async getTest() {
    const test = await this.testService.testService();

    return test;
  }
}
