// var details = [{username: "vishal",
//                 password: "abcd"},
//                 {username: "sandeep",
//                 password: "abcd"},
//                 {username: "bhushan",
//                 password: "abcd"},
//                 {username: "nishi",
//                 password: "abcd"},
//             ];

// var database = [{username: "vishal",
// password: "abcd"},];

// var news_feed = [{username: "vishal",feed: "abcd"},{username: "phaugat",feed: "abefjklcd"},{username: "sandeep",feed: "kaur"}];



// // var usernameprompt = prompt("what is your username");
// // var passwordprompt = prompt("what is your password");


// function isValid(username,password){
//     for (var i=0;i<details.length;i++){
//         if (username === details[i].username && password === details[i].password){
//     return true
//         }
//     }
//     return false
// }



// function signin(username, password){
//     if (isValid(username,password) === true){
//         console.log(news_feed);
//     }
//     else{
//         console.log("sorry wrong username and password");
//     }
    
// }

// // signin(usernameprompt,passwordprompt);


// var buton = document.getElementById("enter");
// var input = document.getElementById("user-input");
// var ul = document.querySelector("ul")

// function inputLength(){
//     return input.value.length
// }

// function createListElement(){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value="";
// }

// function addListAfterClick(){
//     if(inputLength()>0){
//         createListElement();
//     }

// }
// buton.addEventListener("click", addListAfterClick);


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);