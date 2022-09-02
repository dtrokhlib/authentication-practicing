import { injectable } from 'inversify';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@injectable()
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column('text', { unique: true })
    public email!: string;
    @Column('text')
    public password!: string;
}
