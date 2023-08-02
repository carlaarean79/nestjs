import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()//permite que la clase reciba peticiones http
export class AppController {
  constructor(private readonly appService: AppService) {}
//decorador get para poder procesar peticiones
  @Get()//cuando entre una petic. de tipo get se ejecuta el método getHello()
  getHello(): string {
    return this.appService.getHello();
  }
}
