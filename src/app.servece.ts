import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServece {
  getUsers(): string {
    return 'get users service';
  }
}
