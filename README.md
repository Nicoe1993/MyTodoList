# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

### Run
`node app.js`

Visit http://localhost:8080 in your browser

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
1. Add missing requirement #4 to the application
2. Add sufficient test coverage to the application and update readme on howto run the tests
3. Add missing requirement #5 to the application (Dockerfile and update readme with instructions)

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

### Solution
How to run tests:
Pre-Requisites:
Ensure that you run 'node app.js', so that the site is loaded on your localhost.

To run the tests:
1. Navigate to folder -> my-todolist using CMD [Command Line]
2. In CMD type -> npm test
3. See results of tests.

I tested the functions that existed and added into the app.js file to ensure that it works before we deploy. Here you can change the items that's get added to the todolist.

To view the tests, navigate to the test folder and open todo.test.js in your favourite code editor
