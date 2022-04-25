import { AppServece } from './app.servece';
import { Module } from '@nestjs/common';
import { AppControlelr } from './app.controller';

@Module({
  controllers: [AppControlelr],
  providers: [AppServece],
})
export class AppModule {}
