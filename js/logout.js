
// logout 
function logoutSubmit(e){
    e.preventDefault();
    localStorage.removeItem(TODOS_KEY);
    
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(MOOD_KEY);
    moodWrap.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = null;
    logoutButton.classList.add(HIDDEN_CLASSNAME);
    
   contentWrap.classList.add(HIDDEN_CLASSNAME);
    
};

logoutButton.addEventListener("click", logoutSubmit);