import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor() {}

  @Get("/hello")
  getHello(): string {
    return "Hello World";
  }

  @UseGuards(AuthGuard('client-cert'))
  @Get('/secret')
  getSecret(): string {
    return "Hello Secret";
  }
}
