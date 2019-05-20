import { Controller, Get, Render, Res, Req, All } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
  @All()
  name(@Res() res: Response, @Req() req: Request) {
    return res.render('404', { message: 'Hello world!' });
  }
}
