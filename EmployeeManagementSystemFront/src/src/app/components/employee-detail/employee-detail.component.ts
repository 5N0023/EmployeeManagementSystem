import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';

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
