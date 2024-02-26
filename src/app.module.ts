import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
} from '@nestjs/common';

import { LoggerMiddleware } from './logger.middleware';
import { TestModule } from './test/test.module';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase/firebase.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true }),
    TestModule,
    FirebaseModule,
    PatientModule,
  ],
})
export class AppModule implements NestModule, OnModuleInit {
  constructor() {}

  async onModuleInit(): Promise<void> {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
