import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configService, { dataSourceOptions }  from '../ormconfig';
import { ImagesModule } from './Images/images.module';

@Module({
  imports:[TypeOrmModule.forRoot(dataSourceOptions),ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
