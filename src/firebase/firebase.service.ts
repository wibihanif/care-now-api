import { Injectable, Inject } from '@nestjs/common';
import { app } from 'firebase-admin';

@Injectable()
export class FirebaseService {
  db: FirebaseFirestore.Firestore;
  collection: FirebaseFirestore.CollectionReference;

  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {
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
}
