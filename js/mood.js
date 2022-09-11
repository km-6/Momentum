
const moodForm = document.querySelector("#mood-form");
const moodInput = moodForm.querySelector("select");
const moodButton = moodForm.querySelector("button"); 
const moodResetButton = document.querySelector("#mood-reset")

const moodWrap = document.querySelector(".today-mood");
const todayMood = moodWrap.querySelector("#mood-view");
const MOOD_KEY = "todaymood";

function onMoodSubmit(e){
    e.preventDefault();
    moodResetButton.classList.remove(HIDDEN_CLASSNAME);
    moodForm.classList.add(HIDDEN_CLASSNAME);
    const todaymood = moodInput.value;
    localStorage.setItem(MOOD_KEY, todaymood);
    paintMood(todaymood);
}
moodForm.addEventListener("submit", onMoodSubmit);

function paintMood(todaymood){
    todayMood.innerText = `${todaymood}`; 
    todayMood.classList.remove(HIDDEN_CLASSNAME);

    if(todayMood.innerText === "HAPPY"){
        const moodIcon = document.createElement("i");
        moodIcon.setAttribute('class', 'xi-emoticon-happy-o');
        todayMood.appendChild(moodIcon);
    }else if(todayMood.innerText === "GOOD"){
        const moodIcon = document.createElement("i");
        moodIcon.setAttribute('class', 'xi-emoticon-smiley-o');
        todayMood.appendChild(moodIcon);
    }else if(todayMood.innerText === "SHOCK"){
        const moodIcon = document.createElement("i");
        moodIcon.setAttribute('class', 'xi-emoticon-bad-o');
        todayMood.appendChild(moodIcon);
    }else if(todayMood.innerText === "SAD"){
        const moodIcon = document.createElement("i");
        moodIcon.setAttribute('class', 'xi-emoticon-sad-o');
        todayMood.appendChild(moodIcon);
    }else if(todayMood.innerText === "ANGRY"){
        const moodIcon = document.createElement("i");
        moodIcon.setAttribute('class', 'xi-emoticon-devil-o');
        todayMood.appendChild(moodIcon);
    }else if(todayMood.innerText === "EXCELLENT"){
        const moodIcon = document.createElement("i");
        moodIcon.setAttribute('class', 'xi-emoticon-cool-o');
        todayMood.appendChild(moodIcon);
    }
};

const savetodaymood = localStorage.getItem(MOOD_KEY);

if(savetodaymood === null){
    moodForm.classList.remove(HIDDEN_CLASSNAME);
    moodForm.addEventListener("submit", onMoodSubmit);
    moodResetButton.classList.add(HIDDEN_CLASSNAME);   
} else{
    paintMood(savetodaymood);
    moodForm.classList.add(HIDDEN_CLASSNAME); 
    moodResetButton.classList.remove(HIDDEN_CLASSNAME);   
}


function moodResetSubmit(e){
    e.preventDefault();
    localStorage.removeItem(MOOD_KEY);
    moodResetButton.classList.add(HIDDEN_CLASSNAME);    
    todayMood.classList.add(HIDDEN_CLASSNAME); 
    moodForm.classList.remove(HIDDEN_CLASSNAME);   
};

moodResetButton.addEventListener("click", moodResetSubmit);