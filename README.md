# Assignment 4

This is a simple task dashboard made with vanilla JavaScript. The tasks are loaded with a fake server request and you can toggle or delete them.

## File Organization

- index.html: the page with the heading the Load Tasks button the status message and the task list
- styles.css: basic styling, including the line-through style for completed tasks
- taskManager.js: the Task and TaskManager classes
- api.js: fetchTasks() which returns a Promise and waits 1500ms with setTimeout
- main.js: loads the tasks renders them and handles the button clicks

## Challenges I Faced

- At first I wanted to use push and splice but then I learned I should not change the original array. I used the spread operator map and filter instead.
- Making the id read-only with Object.defineProperty was new for me.
- toggle() had to return a new Task instead of changing the old one which took me a while to get used to.
- I had to remember to clear the task list before rendering again otherwise the tasks showed up twice.
- The order of the script tags in index.html matters because main.js needs the other files to be loaded first.
