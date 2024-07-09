import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Employee {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  position: string;
  department: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _employeeData: BehaviorSubject<Employee[]> = new BehaviorSubject<
    Employee[]
  >([]);
  public employeeData$: Observable<Employee[]> =
    this._employeeData.asObservable();
  private _selectedEmployee: BehaviorSubject<Employee | undefined> =
    new BehaviorSubject<Employee | undefined>(undefined);
  public selectedEmployee$: Observable<Employee | undefined> =
    this._selectedEmployee.asObservable();
  constructor() {
    this.initializeEmployeeData();
  }

  private async initializeEmployeeData(): Promise<void> {
    const employees = await this.getEmployeesData();
    this._employeeData.next(employees);
  }
  setSelectedEmployee(employee: Employee): void {
    console.log('Setting selected employee:', employee);
    this._selectedEmployee.next(employee);
  }
  unselectEmployee(): void {
    this._selectedEmployee.next(undefined);
  }
  getSelectedEmployee(): Observable<Employee | undefined> {
    return this.selectedEmployee$;
  }
  async getEmployeesData(): Promise<Employee[]> {
    try {
      const response = await fetch('http://localhost:5151/api/employee');
      if (!response.ok) {
        throw new Error('Failed to fetch employee data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching employees:', error);
      return [];
    }
  }

  getEmployees(): Observable<Employee[]> {
    return this.employeeData$;
  }

  async addEmployee(employee: Employee): Promise<void> {
    try {
      const response = await fetch('http://localhost:5151/api/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
      if (!response.ok) {
        throw new Error('Failed to add employee');
      }
      const data = await response.json();
      console.log('Employee added:', data);
      const currentData = this._employeeData.getValue();
      currentData.push(data);
      this._employeeData.next(currentData);
    } catch (error) {
      console.error('Error adding employee:', error);
      throw error;
    }
  }

  async deleteEmployee(id: string): Promise<void> {
    try {
      await fetch(`http://localhost:5151/api/employee/${id}`, {
        method: 'DELETE',
      });
      const currentData = this._employeeData.getValue();
      const updatedData = currentData.filter((emp) => emp.id !== id);
      this._employeeData.next(updatedData);
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  }
}
