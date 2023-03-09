import { Images } from './entities/images.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Images)
    private imagesRepository: Repository <Images>
  ){}
   getImages(){
    return this.imagesRepository.find()

  }
}
