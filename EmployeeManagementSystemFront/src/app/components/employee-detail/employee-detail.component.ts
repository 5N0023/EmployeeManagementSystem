import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeService } from '../../services/employee.service';
interface Employee {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  position: string;
  department: string;
}
@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit{
  selectedEmployee: Employee | undefined;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getSelectedEmployee().subscribe({
      next: employee => {
        this.selectedEmployee = employee;
      },
      error: err => {
        console.error('Error fetching selected employee:', err);
      }
    });
  }
  hideEmployeeDetail(): void {
    this.employeeService.unselectEmployee();
  }

}
