import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configService  from './ormconfig';
import { ImagesModule } from './Images/images.module';

@Module({
  imports: [
    ImagesModule,
    TypeOrmModule.forRoot(configService)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
