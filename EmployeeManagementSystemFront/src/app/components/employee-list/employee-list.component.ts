import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: true,
  imports: [CommonModule, LucideAngularModule,EmployeeDetailComponent,EmployeeEditComponent]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: employees => {
        this.employees = employees;
      },
      error: err => {
        console.error('Error fetching employees:', err);
        // Handle error as needed
      }
    });
  }

  async handleAddEmployee(employee: Employee): Promise<void> {
    try {
      console.log('Adding employee', employee);
      await this.employeeService.addEmployee(employee);
      console.log('Employee added successfully');
    } catch (error) {
      console.error('Error adding employee:', error);
      // Handle error as needed
    }
  }

  async handleDeleteEmployee(employee: Employee): Promise<void> {
    try {
      console.log('Deleting employee', employee);
      if (employee.id) {
        await this.employeeService.deleteEmployee(employee.id);
        console.log('Employee deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
      // Handle error as needed
    }
  }

  handleViewEmployee(employee: Employee): void {
    console.log(employee);
    this.employeeService.setSelectedEmployee(employee);
  }

  handleEditEmployee(employee: Employee): void {
    console.log(employee);
    this.employeeService.setEditEmployee(employee);
  }
}
