import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {MyEntity} from '../../core/entities/my.entity';

@Entity({ name: 'contacts_list' })
export class Contact extends MyEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'first_name', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;

  @Column()
  company: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column()
  country: string;

  @Column()
  title: string;

  @Column()
  phone: string;

  @Column({ name: 'contact_name', nullable: false })
  contactName: string;

  status?: 'deleted' | 'saved' = 'saved';
}