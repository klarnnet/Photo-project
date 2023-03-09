import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller()
export class ImagesController {
  constructor(private imagesService: ImagesService) {}
  @Get('all')
  getImages() {
    return this.imagesService.getImages();
  }
}