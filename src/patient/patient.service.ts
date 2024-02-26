import { Injectable } from '@nestjs/common';
import { FirebaseService } from '~/firebase/firebase.service';
import { RegisterPatientDTO } from './dtos/register-patient-dto';

@Injectable()
export class PatientService {
  constructor(private readonly firebaseService: FirebaseService) {}

  public async getPatients(): Promise<any> {
    return this.firebaseService.getPatients();
  }

  public async registerPatient(patientData: RegisterPatientDTO): Promise<any> {
    return this.firebaseService.registerPatient(patientData);
  }
}
