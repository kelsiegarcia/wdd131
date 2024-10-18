const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
	displayList(chapter);
});

button.addEventListener('click', function() {
	if (input.value !== '') { // make sure the input is not empty
		displayList(input.value);// call the displayList function passing the input value
		chaptersArray.push(input.value); // add the input value to the chaptersArray
		setChapterList(); // update local storage array with new added chapter
 		input.value = ''; // clear the input field
		input.focus(); // set focus back to the input field
	}
  
});

function displayList (item) {
	if (input.value.trim() !== '') {
		const li = document.createElement('li');
		const deleteButton = document.createElement('button');
    li.textContent = item;
    // const newChap = input.value;
    // newChap = '';
    deleteButton.textContent = '❌';
    // deleteButton.ariaLabel = "Remove Alma 5";
		deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

		deleteButton.addEventListener('click', function () {
			if (list.contains(li)) { // check is li is child of list
				list.removeChild(li);
				deleteChapter(li.textContent); // remove the chapter from the array and update local storage
				input.focus(); 
			}
		});
	}
}

function setChapterList() {
	localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
	return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter (chapter) {		
	chapter = chapter.slice(0, -2); // remove the ❌ from the chapter name
	chaptersArray = chaptersArray.filter(item => item !== chapter); // return everything except the chapter to be deleted
	setChapterList(); // update local storage array with new array			
}


