import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  constructor() {}

  public async testService(): Promise<any> {
    return 'hello';
  }
}
