import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  position: string;
  department: string;
}

@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css'
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: '',
    department: '',
  };
  showCreateEmployeeForm = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
  }

  async handleCreateEmployeeSubmit(): Promise<void> {
    if (
      this.employee.firstName &&
      this.employee.lastName &&
      this.employee.email &&
      this.employee.phoneNumber &&
      this.employee.position &&
      this.employee.department
    ) {
      try {
        console.log('Creating employee:', this.employee);
        await this.employeeService.addEmployee(this.employee);
        this.showCreateEmployeeForm = false;
        this.employee = {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          position: '',
          department: '',
        };
      } catch (error) {
        console.error('Error creating employee:', error);
        // Handle error as needed
      }
    } else {
      alert('Please fill all the fields');
    }
  }

  handleCreateEmployee(): void {
    this.showCreateEmployeeForm = !this.showCreateEmployeeForm;
    // clear employee form
    this.employee = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      position: '',
      department: '',
    };
  }
}
