import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],

  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})

export class EmployeeEditComponent implements OnInit{
  editEmployee: Employee | undefined;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEditEmployee().subscribe({
      next: employee => {
        this.editEmployee = employee;
      },
      error: err => {
        console.error('Error fetching selected employee:', err);
      }
    });
  }
  hideEmployeeEdit(): void {
    this.employeeService.uneditEmployee();
  }
  async onSubmit(): Promise<void> {
    if (!this.editEmployee) {
      console.error('No employee to edit');
      return;
    }
    await this.employeeService.updateEmployee(this.editEmployee);
    this.employeeService.uneditEmployee();

  }

}