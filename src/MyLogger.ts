import { LoggerService } from '@nestjs/common';
import { Logger } from '@nestjs/common';
const pathlib = require('path');
const fs = require('fs');
function write(name, message) {
  fs.appendFile(
    pathlib.resolve('./src/log/' + name + '.log'),
    `[${new Date(Date.now())}] ${message}\r\n`,
    err => {
      if (err) {
        console.log('添加日志失败');
      }
    },
  );
}
export class MyLogger extends Logger implements LoggerService {
  log(message: string) {
    write('log', message);
  }
  error(message: string, trace: string) {
    // add your tailored logic here
    write('error', message);
    super.error(message, trace);
  }
  warn(message: string) {
    write('warn', message);
  }
  debug(message: string) {
    write('debug', message);
  }
  verbose(message: string) {
    write('verbose', message);
  }
}
