import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('images')
export class ImagesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  image: string;
}