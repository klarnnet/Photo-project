import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('images')
export class Images {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  image: string;
}