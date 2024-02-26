import { Body, Controller, Get, Post } from '@nestjs/common';
import { PatientService } from './patient.service';
import { RegisterPatientDTO } from './dtos/register-patient-dto';

@Controller('/patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('/')
  async getPatients() {
    const test = await this.patientService.getPatients();

    return test;
  }

  @Post('/')
  async registerPatient(@Body() patientData: RegisterPatientDTO) {
    const test = await this.patientService.registerPatient(patientData);

    return test;
  }
}
