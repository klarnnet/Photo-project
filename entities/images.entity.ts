import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  image: string;
}