# Stage 1: Build
FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /source

# Copy csproj and restore as distinct layers
RUN mkdir ./EmployeeManagementSystemAPI
COPY ./src/*.sln .
COPY ./src/*.csproj ./EmployeeManagementSystemAPI/
WORKDIR /source/EmployeeManagementSystemAPI
#  install dotnet-ef

RUN dotnet restore
# Copy everything else and build
COPY ./src/. .
RUN dotnet publish -c Release -o /app/publish

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 8080
WORKDIR /app
COPY --from=build /app/publish .
COPY ./employees.db .

ENTRYPOINT ["dotnet", "EmployeeManagementSystemAPI.dll"]
