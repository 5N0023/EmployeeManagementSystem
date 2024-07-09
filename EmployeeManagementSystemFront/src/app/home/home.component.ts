// home.component.ts
import { Component } from '@angular/core';
import { EmployeeListComponent } from '../components/employee-list/employee-list.component';
import { EmployeeCreateComponent } from '../components/employee-create/employee-create.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ EmployeeListComponent,EmployeeCreateComponent]
})
export class HomeComponent { }
