import { Body, Controller, Get, Post } from '@nestjs/common';
import { PatientService } from './patient.service';
import { RegisterPatientDTO } from './dtos/register-patient-dto';

@Controller('/patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('/')
  async getPatients() {
    const patients = await this.patientService.getPatients();

    return patients;
  }

  @Post('/')
  async registerPatient(@Body() patientData: RegisterPatientDTO) {
    await this.patientService.registerPatient(patientData);

    return 'created';
  }
}
