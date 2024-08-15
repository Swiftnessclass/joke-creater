// Get the elements
let jokeDiv = document.querySelector(".para");
let button = document.getElementById("button");

// Set the API URL
let url = "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist,sexist&type=single";

let jokeset=()=>{
  fetch(url)
 .then(response=>response.json())
 .then(data=>jokeDiv.textContent=data.joke);

}
  
  


// Add an event listener to the button
button.addEventListener("click", jokeset);

// Get a joke when the page loads
jokeset();

//async await 
//let getjoke=async()=>{
 // const response=await fetch(url);
 // const data=await response.json();
//  jokeDiv.textContent=await data.joke;
//}
