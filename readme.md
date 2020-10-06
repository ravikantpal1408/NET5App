## Creating a project and initial commands <br>
dotnet new sln : for creating sln file root folder of project <br>
dotnet new webapi -o API : creating an API project under root folder <br>
dotnet sln add API : adding API into root sln file <br>

===================================================================================
## What is entityFamework ? <br>
- An object Relational Mapper (ORM) <br>
- Translate our code into SQL commands that update our table in database. <br>

### Features of entity framework : <br>
- Querying  <br>
- Change Tracking <br>
- Saivng <br>
- Concurrency <br>
- Transaction <br>
- Caching <br>
- Built-In Conventions <br>
- Configurations <br>
- Migrations <br>

===================================================================================

## Dotnet EF 
- dotnet tool install --global dotnet-ef --version 5.0.0-rc.1.20451.13

## Migrations : 
- dotnet ef migrations add InitialCreate -o Data/Migrations
- dotnet ef database update
- dotnet ef database drop
