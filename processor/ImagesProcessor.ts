import { IProcessor } from 'typeorm-fixtures-cli';
import { Images } from 'src/Images/entities/images.entity';

export default class ImageProcessor implements IProcessor<Images> {
  postProcess(image: string, object: { [key: string]: any }): void {
    object.image = `${object.image}`;
  }
}