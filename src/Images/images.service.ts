import { ImagesEntity } from './entities/images.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(ImagesEntity)
    private imagesRepository: Repository <ImagesEntity>
  ){}
  async findAll(){
    return await this.imagesRepository.find()

  }
}
