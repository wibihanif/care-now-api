import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class RegisterPatientDTO {
  @IsNotEmpty()
  @IsString()
  patientId: string;

  @IsNotEmpty()
  @IsString()
  patientName: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfTreatment: Date;

  @IsNotEmpty()
  @IsNumber()
  costOfTreatment: number;

  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  treatmentDescription: string[];

  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  medicationPrescribed: string[];
}
