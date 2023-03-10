import { Controller, Get ,Query} from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller()
export class ImagesController {
  constructor(private imagesService: ImagesService) {}
  
  @Get('pagination')
  getImages(@Query() pagination) {
    return this.imagesService.getImages(pagination);
  }
}