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
  
  async getImages(pagination: number): Promise<Images[]> {
    const numbers = Object.values(pagination)[0].replace(/[^0-9,]/g, '').split(',')

    const build = this.imagesRepository
      .createQueryBuilder('books')
      .select('books')
      .where('books.id >= :start AND books.id <= :end', {
        start: +numbers[0],
        end: +numbers[1],
      });
    console.log(numbers);
    return build.getMany();
  }
}
