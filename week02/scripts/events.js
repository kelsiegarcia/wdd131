// events.js
// Start with the newTask function. Get the value entered in the '#todo' input, then add it to the tasks array, and finally call the renderTasks function.
// We need to store two bits of information about each task. The details of the task, and whether or not it has been completed. The best way to do this is with a list of Objects. Each task would have the following format: { detail: task, completed: false}
// After completing that attach an event listener to the '#submitTask' button that will call the newTask function when it is clicked.
// After making sure that it is working, complete the renderTasks function next. You can use the following for the markup for each task: 
// `<li ${task.completed ? 'class="strike"' : ""}>
//    <p>${task.detail}</p>
//    <div>
//      <span data-function="delete">❎</span>
//      <span data-function="complete">✅</span>
//    </div>
//  </li>`;

const button = document.querySelector('#submitTask');
const taskList = document.querySelector('#todoList');
let tasks = [];

function renderTasks(tasks) {
  // get the list element from the DOM
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
  const listElement = document.querySelector('#todoList');
  // listElement.innerHTML = "";
  const html = tasks.map((task) => `<li ${task.completed ? 'class="strike"' : ""}>
    <p>${task.detail}</p>
    <div>
      <span data-function="delete">❎</span>
      <span data-function="complete">✅</span>
    </div>
  </li>`);
  listElement.innerHTML = html.join(""); 
  console.log(html);
}

function newTask() {
  // get the value entered into the #todo input
  // add it to our arrays tasks
  // render out the list
  const input = document.querySelector('#todo');
  const task = input.value.trim();
  if (task !== '') {
    const object = { detail: task, completed: false}
  
  tasks.push(object);
  renderTasks(tasks);
  input.value = ''; //Clear input field
  input.focus(); //Focus back to the input
  }
}

function removeTask(taskElement) {
  // Note the use of Array.filter to remove the element from our task array
  // Notice also how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );
 // this line removes the HTML element from the DOM
  taskElement.remove();
}

 
// // Function to mark a task as complete
// function completeTask(taskElement) {
//   const taskIndex = tasks.findIndex(
//     (task) => task.detail === taskElement.querySelector('p').innerText
//   );
//   tasks[taskIndex].completed = !tasks[taskIndex].completed; // Toggle the complete status
//   renderTasks(tasks); // Re-render the list to update styles
// }

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  // toggle adds a class if it is not there, removes it if it is.
  taskElement.classList.toggle("strike");
  console.log(tasks);
}


// Finally we can write the manageTasks() function. When someone clicks the ❎ it should call the removeTask() function. If they click the ✅ then the completeTask() should be called.

function manageTasks(event) {
  // did they click the delete or complete icon?
  const taskElement = event.target.closest('li') // gets the closest parent li
  if (!taskElement) return; 

  if (event.target.dataset.function === 'delete') {
    removeTask(taskElement);
  } else if (event.target.dataset.function === 'complete') {
    completeTask(taskElement);
  }
  console.log(event.target);
  console.log(event.currentTarget);
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't

  // because we added 'data-action="delete"' to each icon in a task we can access a dataset property on our target (e.target.dataset.action)
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
}

// // Function to manage tasks (delete or complete)
// function manageTasks(event) {
//   const taskElement = event.target.closest('li'); // Get the closest parent li
//   if (!taskElement) return;
 
//   if (event.target.dataset.function === 'delete') {
//     removeTask(taskElement);
//   } else if (event.target.dataset.function === 'complete') {
//     completeTask(taskElement);
//   }
// }

// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.

// // Add event listener to the submit button to create a new task
button.addEventListener('click', () => {
  newTask();
});

// Add event listener to the task list for managing tasks (event delegation)
taskList.addEventListener('click', (event) => {
  manageTasks(event);
});


// const button = document.querySelector('#submitTask'); // Change selector to match ID
// const taskList = document.querySelector('#todoList');
// let tasks = [];
 
// // Function to render tasks to the DOM
// function renderTasks(tasks) {
//   const listElement = document.querySelector("#todoList");
//   const html = tasks.map((task) => `
//     <li ${task.completed ? 'class="strike"' : ""}>
//       <p>${task.detail}</p>
//       <div>
//         <span data-function="delete">❎</span>
//         <span data-function="complete">✅</span>
//       </div>
//     </li>`).join("");
//   listElement.innerHTML = html;
// }
 
// // Function to add a new task
// function newTask() {
//   const input = document.querySelector("#todo");
//   const task = input.value.trim();
//   if (task !== '') {
//     const object = { detail: task, completed: false };
//     tasks.push(object);
//     renderTasks(tasks);
//     input.value = ''; // Clear input field
//     input.focus();    // Focus back to the input
//   }
// }
 
// // Function to remove a task
// function removeTask(taskElement) {
//   tasks = tasks.filter(
//     (task) => task.detail !== taskElement.querySelector('p').innerText
//   );
//   taskElement.remove();
// }
 
// // Function to mark a task as complete
// function completeTask(taskElement) {
//   const taskIndex = tasks.findIndex(
//     (task) => task.detail === taskElement.querySelector('p').innerText
//   );
//   tasks[taskIndex].completed = !tasks[taskIndex].completed; // Toggle the complete status
//   renderTasks(tasks); // Re-render the list to update styles
// }
 
// // Function to manage tasks (delete or complete)
// function manageTasks(event) {
//   const taskElement = event.target.closest('li'); // Get the closest parent li
//   if (!taskElement) return;
 
//   if (event.target.dataset.function === 'delete') {
//     removeTask(taskElement);
//   } else if (event.target.dataset.function === 'complete') {
//     completeTask(taskElement);
//   }
// }
 
// // Add event listener to the submit button to create a new task
// button.addEventListener('click', () => {
//   newTask();
// });
 
// // Add event listener to the task list for managing tasks (event delegation)
// taskList.addEventListener('click', (event) => {
//   manageTasks(event);
// });
