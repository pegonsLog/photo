import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100})
  name: string;

  @Column('text', {nullable: true})
  description: string;

}
