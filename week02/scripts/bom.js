const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    li.textContent = input.value;
    // const newChap = input.value;
    // newChap = '';
    deleteButton.textContent = '❌';
    deleteButton.ariaLabel = "Remove Alma 5";
    li.append(deleteButton);
    list.append(li);
    input.value = '';
    input.focus();
   }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();  
});
