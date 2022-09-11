const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const logoutButton = document.querySelector("button#logout");      
const contentWrap = document.querySelector("#content-wrap"); 

const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";


function onLoginSubmit(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
   moodWrap.classList.remove(HIDDEN_CLASSNAME);
   logoutButton.classList.remove(HIDDEN_CLASSNAME);
   contentWrap.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
    greeting.innerText = `${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(saveUsername);
    moodWrap.classList.remove(HIDDEN_CLASSNAME);
    logoutButton.classList.remove(HIDDEN_CLASSNAME);
    contentWrap.classList.remove(HIDDEN_CLASSNAME);
}
