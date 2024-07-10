#!/bin/bash
# This script is used to run the program locally

# Exit immediately if a command exits with a non-zero status
set -e
export PATH="$PATH:$HOME/.dotnet/tools"

# Navigate to the backend project directory and run database update
cd ./EmployeeManagementSystemAPI/src/
dotnet ef database update
# kill any existing dotnet process
pkill dotnet || true
# Run the backend project
dotnet run &

# Navigate to the frontend project directory and run the Angular app
cd ../../EmployeeManagementSystemFront/src/
ng serve --open
