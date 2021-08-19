
# MoneyLine Assignment

## Brief Description

This project is based on the requirement given by MoneyLine.its use to Update Access for User for certain  Feature 
- **Main Tech Stack**
  1. Node version v12.16.2 
  2. Express Framework
  3. Postgres

## Main Packages/Framework used in this project
| Package      | Description |
| ----------- | ----------- |
| node | version 12.16.2 |
| express      | Framework used for this REST API       |
|sequelize|ORM for PostGres|
|pg|PostgreSQL Client|
|pino|package for logging purpose|
|nodemon|Node Js Application tool|
|sequelize-cli"|create a Postgres database and generate models|


## Database   
    Table : UserFeatures : is save UserId ,  Feature Name  and there Access 

## Installation & Run locally

Use the package manager [npm](https://www.npmjs.com/) to install required packages. Run following command at the root folder of this project:

```bash
npm install
```
# Do make sure that your node version is v12.16.2 or greater, you can check this by using following command:
```bash
node --version

``` 


### Run Locally
- This project require Postgres, for this instance you can use your local postgress instance or your own server.
- you need to update following values **username,password,host,database,Port**, you can find these config **\MoneyLine\src\config**.
  in **.env** file at root directory of this project.
- In above DataBase you have Required the to Run DB Migration to create Requred Table for this project. 
-  
**Run Migration**
```bash  
npx sequelize-cli db:migrate  

```
**Run  Service**
```bash
npm run start

```

## Call Api Endpoint In Postman
curl --location --request GET 'http://localhost:3000/api/feature?email=user1&featureName=feature1'


## Call Api Endpoint In Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/15685360-18eac248-143c-4fe9-904a-fd8b7aff3ff8?action=collection%2Ffork&collection-url=entityId%3D15685360-18eac248-143c-4fe9-904a-fd8b7aff3ff8%26entityType%3Dcollection%26workspaceId%3D3ffd7a03-6af2-4eeb-a9f0-6b576bf13164)

## Sample Curls 
- **GET Feature Access**
```bash
curl --location --request GET 'http://localhost:3000/api/feature?email=user1&featureName=feature1'

```
- **UPDATE/INSERT Feature AND Access**
```bash
curl --location --request POST 'http://localhost:3000/api/feature' \
--header 'Content-Type: application/json' \
--data-raw '{
    "featureName": "feature1",
    "email": "user1",
    "enable": false
}'
```  
## For Better testing can follow the following API call sequence
1. Insert Feature via Post Feature API
2. Get Feature via  Get Feature API
3. Update Feature Access via Post Feature API 
 
