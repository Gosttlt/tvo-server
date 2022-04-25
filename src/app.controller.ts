import { AppServece } from './app.servece';
import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class AppControlelr {
  constructor(private appServece: AppServece) {}
  @Get()
  getUsers() {
    return this.appServece.getUsers();
  }
}
