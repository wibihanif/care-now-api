import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientService {
  constructor() {}

  public async getPatients(): Promise<any> {
    return 'hello';
  }
}
