# Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

## General

Why JavaScript programming is amazing?
How to manipulate JSON data?
How to use request and fetch API?
How to read and write a file using fs module?

## Tasks

### 0. Status code

Write a script that display the status code of a GET request.

The first argument is the URL to request (GET)
The status code must be printed like this: code: <status code>
You must use the module request (NB: It must be installed if you haven’t already installed it)

### 1. Star wars movie title

Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.

The first argument is the movie ID
You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
You must use the module request

### 2. Star wars Wedge Antilles

Write a script that prints the number of movies where the character “Wedge Antilles” is present.

The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
You must use the module request

### 3. Loripsum

Write a script that gets the contents of a webpage and stores it in a file.

The first argument is the URL to request
The second argument the file path to store the body response
The file must be UTF-8 encoded
You must use the module request

### 4. How many completed?

Write a script that computes the number of tasks completed by user id.

The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
Only print users with completed task
You must use the module request

### 5. Who was playing in this movie?

Write a script that prints all characters of a Star Wars movie:

The first argument is the Movie ID - example: 3 = “Return of the Jedi”
Display one character name by line
You must use the Star wars API
You must use the module request

# Evaluation Quiz

0. How do you write data to a file using the fs module in Node.js?

fs.writeFile()

1. How do you make an HTTP GET request using the request module in Node.js?

request.get()

2. How do you make an HTTP GET request using the fetch API in JavaScript?

fetch()

3. How do you send an HTTP POST request with JSON data using the request module in Node.js?

request.post()

4. How do you parse a JSON string into a JavaScript object?

JSON.parse()

5. How do you handle errors when reading or writing a file using the fs module in Node.js?

Using try-catch blocks
Using callback functions
Using promise-based syntax

6. How do you convert a JavaScript object into a JSON string?

JSON.stringify()

7. Which method is used to read a JSON file in Node.js?

fs.readFileSync()

8. How do you read the contents of a file using the fs module in Node.js?

fs.readFile()

9. Which API can be used to make HTTP requests from a Node.js application?

request
