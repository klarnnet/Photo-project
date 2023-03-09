import { Images } from 'src/Images/entities/images.entity';
// import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import configService  from '../ormconfig';
import { ImagesModule } from './Images/images.module';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'images',
      entities: [Images],
      synchronize: false,
      migrations:['dist/path-to-migrations-dir/*.js'],
      migrationsRun:true
    }),ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
