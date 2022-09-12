
# NOVELSHIP SOFTWARE ENGINEER ASSIGNMENT

This is a simple API that able to get fibonacci result based on it's index search



## Folder Explanation

 - Config
 - Fibonacci
 - Migration
 - Router


### Config
It's a configuration so the app able to use the postgres database

### Fibonacci
The main logic for the app itself, that contain the source code that process the request and also the query

### Migration
It's use to create table automatically

### Router
It's use to store endpoints
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` For designated port that this project going to use

`db_host` Registered URL for installed database

`db_user` Username that registerd in the database

`db_password` Password for the database

`db_name` Database name

`db_port` Database port



## Installation

Install this project with npm

```bash
  npm install
```
Migrate the database so the ```fibonacci_log``` function able to log request that hit the API
```
  npm run migration
```
## API Reference

#### Get fibonacci index

```http
  GET /api/fibonacci/:index
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `index` | `string` | **Fibonacci index that want to be found** |

