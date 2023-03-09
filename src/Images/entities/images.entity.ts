import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Images')
export class Images {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  image: string;
  @Column()
  g: string;
}