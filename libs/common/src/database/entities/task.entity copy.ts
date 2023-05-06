import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './Employee.entity';

export class Task {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, (employee) => employee.tasks, {
    onDelete: 'SET NULL',
  })
  employee: Employee;
}
