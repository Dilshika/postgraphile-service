/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import postgraphile from 'postgraphile';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use('/',
    postgraphile(
      "postgres://postgres:post21@127.0.0.1:5432/vehicles",
      "public",
      {
        watchPg:true,
        graphiql:true,
        enhanceGraphiql:true,
        retryOnInitFail:true,
        enableCors:true,
        graphqlRoute:''
      }
    )
  )
  await app.listen(5000);
}
bootstrap();
