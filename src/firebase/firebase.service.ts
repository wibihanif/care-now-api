import { Injectable, Inject } from '@nestjs/common';
import { app } from 'firebase-admin';
import { RegisterPatientDTO } from '~/patient/dtos/register-patient-dto';

@Injectable()
export class FirebaseService {
  db: FirebaseFirestore.Firestore;
  collection: FirebaseFirestore.CollectionReference;

  constructor(@Inject('FIREBASE_APP') firebaseApp: app.App) {
    this.db = firebaseApp.firestore();
    this.collection = this.db.collection('patient');
  }

  public async getPatients(): Promise<any[]> {
    const querySnapshot = await this.collection.get();

    const patients: any[] = [];

    querySnapshot.forEach((doc) => {
      patients.push(doc.data());
    });

    return patients;
  }

  public async registerPatient(patientData: RegisterPatientDTO): Promise<any> {
    const {
      costOfTreatment,
      dateOfTreatment,
      medicationPrescribed,
      patientId,
      patientName,
      treatmentDescription,
    } = patientData;

    try {
      await this.collection.add({
        patientId,
        patientName,
        costOfTreatment,
        dateOfTreatment: new Date(dateOfTreatment),
        medicationPrescribed,
        treatmentDescription,
      });
    } catch (error) {
      throw new Error(`Failed to register patient: ${error.message}`);
    }
  }
}
