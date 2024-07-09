// home.component.ts
import { Component } from '@angular/core';
import { EmployeeListComponent } from '../components/employee-list/employee-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ EmployeeListComponent]
})
export class HomeComponent { }
