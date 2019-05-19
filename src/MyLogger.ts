import { LoggerService } from '@nestjs/common';
import { Logger } from '@nestjs/common';
export class MyLogger extends Logger implements LoggerService {
  log(message: string) {
    console.log(message);
  }
  error(message: string, trace: string) {
    // add your tailored logic here
    console.log(message);

    super.error(message, trace);
  }
  warn(message: string) {
    console.log(message);
  }
  debug(message: string) {
    console.log(message);
  }
  verbose(message: string) {
    console.log(message);
  }
}
