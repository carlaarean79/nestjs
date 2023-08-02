import { Injectable } from '@nestjs/common';

@Injectable()//hacer inyeccion de dependencias(función que se tiene en otra clase)
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
