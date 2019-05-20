import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getViewName(req): string {
    let url: string = req.url.slice(1);
    console.log(url);
    if (req.url == '/') {
      return 'index';
    } else {
      return url;
    }
  }
}
