import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { ImagesEntity } from './entities/images.entity';
 

@Module({
  imports: [
    TypeOrmModule.forFeature([ImagesEntity])],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}