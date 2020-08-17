import {
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity({
  name: 'player',
})
export class Player {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  user: string;

  @Column()
  currentBook: string;

  @Column()
  currentPage: number;

  @Column()
  currentWord: number;

  @Column()
  totalWordsRead: number;

  @Column()
  totalPagesRead: number;

  @Column()
  speed: number;

  @Column()
  font: string;

  @Column()
  color: string;

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone' })
  updatedAt: Date;
}
