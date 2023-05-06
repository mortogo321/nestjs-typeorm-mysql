import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './Employee.entity';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  meetingUrl: string;

  @ManyToMany(() => Employee, (employee) => employee.meetings)
  attendees: Employee[];
}
