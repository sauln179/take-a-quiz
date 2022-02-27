//Sets IDs
var userId = document.querySelector("#user");
var scoreID = document.querySelector("#score");
//Allows usage of deleteButton
var deleteButton = document.querySelector("#delete-btn")
//Sets variables to take information from localStorage.
var userName = window.localStorage.getItem('name');
var userScor = window.localStorage.getItem('score')
//Populates #user and #score divs with variables.
function overrideInfo(){
 userId.innerHTML = "User:"+userName;
scoreID.textContent = "Score:"+userScor;

}
//Sets function to delete previous stored data
function deleteData(){
localStorage.removeItem('name')
localStorage.removeItem('score');
alert("Data deleting.... Refresh Page please...")
}
//Enables the delete button to work
deleteButton.addEventListener('click',deleteData);
overrideInfo();
