## Employee Management System
### Install dotnet and angular
```bash
sudo apt-get install -y dotnet-sdk-8.0
npm install -g @angular/cli
```

### Create dotnet webapi and Dependencies
```bash
dotnet new webapi -n EmployeeManagementSystemAPI
cd EmployeeManagementSystemAPI
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.SqliServer
```

### Create angular project
```bash
ng new EmployeeManagementSystemFront
cd EmployeeManagementSystemFront
ng generate component home
ng generate service services/employee
ng generate component components/employee-list
```
