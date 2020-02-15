# Todo Application - Backend
This is the front end of a Todo Application, built throughout the Tech Returners Your Journey Into Tech course. It is consumed by a front end React application, available [here] (https://github.com/iggy-pigy/ToDo-app-frontend) and connects to an RDS Database.

The hosted version of the application is available here: https://iggy-pigy.github.io/ToDo-app-frontend/

## Technology Used
This project uses the following technology:

* Serverless Framework
* JavaScript (ES2015+)
* Express
* SQL
* Mysql library
* AWS Lambda and API Gateway
* AWS RDS
* ESLint

## Endpoints
The API exposes the following endpoints:

**GET /tasks**
https://gbrvvbp9nc.execute-api.eu-west-1.amazonaws.com/dev/tasks

Responds with JSON containing all tasks in the Database.
__________________________________________________________________

**POST /tasks**
https://gbrvvbp9nc.execute-api.eu-west-1.amazonaws.com/dev/tasks

Will create a new task when sent a JSON payload in the format:
<pre><code>{
"task": "make a cup of tea",
"completed": false
}</code></pre> 
__________________________________________________________________

**DELETE /tasks/:id**
https://gbrvvbp9nc.execute-api.eu-west-1.amazonaws.com/dev/tasks/{id}

Deletes the task of the given ID.
______________________________________________________________________

**PUT /tasks/:id**
https://gbrvvbp9nc.execute-api.eu-west-1.amazonaws.com/dev/tasks/{id}

Will update a task when sent a JSON payload in the format:
<pre><code>{
"task": "make a cup of tea",
"completed": true
}</code></pre>