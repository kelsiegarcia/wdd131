const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = documnet.querySelector('list');

const li= document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '&#10060';
deleteButton.ariaLabel = "Remove Alma 5";
li.append(deleteButton);
list.append(li);