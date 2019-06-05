import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  content: string;
}
