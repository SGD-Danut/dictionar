let words = [];

function addToList() {
	let insertedWord = $('#insertedWord').val();
	if (words.includes(insertedWord)) {
		document.getElementById("message").innerHTML = "Cuvântul există deja în dicționar! 😐 Vă rugăm introduceți alt cuvânt.";
	} else {
		words.push(insertedWord);
		showTheList();
		document.getElementById("message").innerHTML = "";
	}		
}

function showTheList() {
	for (let i = words.length - 1; i < words.length; i++) {
		const div = document.getElementById('output');
		div.innerHTML += '<li class="list-group-item">' + words[i] + '</li>';
	}
}

function searchInList() {
	let insertedWordForSearch = $('#insertedWordForSearch').val();
	if (words.indexOf(insertedWordForSearch) != -1) {
		document.getElementById("message").innerHTML = "Cuvântul căutat se află în dicționar. 😊";
	} else {
		document.getElementById("message").innerHTML = "Cuvântul căutat nu se află în dicționar. 🙁";
	}
}