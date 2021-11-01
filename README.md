# Tasks - API
This API was built to demonstrate the using of SQLite and NodeJS.

### To create database (If wants to generate DB from scratch) 
 1 - Download SQLite on https://www.sqlite.org/download.html
 2 - Navigate to main project path (example `sample_node_project06)
 3 - Create database:
     `sqlite3 tasks.db`
 4 - Create task table: 
"CREATE TABLE task (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      task text NOT NULL,
      owner text NOT NULL,
      created_at DATATIME DEFAULT CURRENT_TIMESTAMP NOT NULL
   );"   

### To run this API
1 - `npm intall`
2 - `npm start`

#### Backlog
[ ] Create POST 
[ ] Create PUT
[ ] Create DELETE 
