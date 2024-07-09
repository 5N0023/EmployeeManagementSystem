import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  position: string;
  department: string;
}

const employees: Employee[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'test@gmail.com',
    phoneNumber: '1234567890',
    position: 'Software Engineer',
    department: 'Engineering',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'test@gmail.com',
    phoneNumber: '1234567890',
    position: 'Software Engineer',
    department: 'Engineering',
  },
];

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class EmployeeListComponent {
  employees = employees;
}
