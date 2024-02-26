import { Module } from '@nestjs/common';
import { FirebaseModule } from '~/firebase/firebase.module';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';

@Module({
  imports: [FirebaseModule],
  providers: [PatientService],
  controllers: [PatientController],
})
export class PatientModule {}
