import { Controller, Get } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('/firebase')
export class FirebaseController {
  constructor(private readonly testService: FirebaseService) {}

  @Get('/')
  async getTest() {
    const patients = await this.testService.getPatients();

    return patients;
  }
}
