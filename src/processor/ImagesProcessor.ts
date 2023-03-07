import { IProcessor } from 'typeorm-fixtures-cli';
import { ImagesEntity } from 'src/Images/entities/images.entity';

export default class ImageProcessor implements IProcessor<ImagesEntity> {
  postProcess(image: string, object: { [key: string]: any }): void {
    object.image = `${object.image}`;
  }
}