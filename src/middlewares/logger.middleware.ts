import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
const pathlib = require('path');
const fs = require('fs');
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    console.log(req.method);
    console.log(req.originalUrl);

    fs.appendFile(
      pathlib.resolve('./src/log/access.log'),
      `[${Date.now()}] ${req.method} ${req.originalUrl + req.url}\r\n`,
      err => {},
    );
    next();
  }
}
