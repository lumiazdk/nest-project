import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MyLogger } from './MyLogger';
var hbs = require('hbs');
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: new MyLogger(),
  });
  const options = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('部分接口文档')
    .setVersion('1.0')
    .addTag('users')
    .addTag('auth')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  //指定模板后缀名为html
  app.set('view engine', 'html');
  //运行hbs模块
  app.engine('html', hbs.__express);

  await app.listen(3000);
}
bootstrap();
