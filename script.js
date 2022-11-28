// Target light/dark mode button
// Add an event listener for the button
// When clicked we want to change the background colour for sections and we want to change text colour to white

let isModeOn = false 
const modeButton = document.querySelector("#mode");

modeButton.addEventListener("click", function(){
    if (isModeOn  === false){
        modeButton.innerText = "😀" 
        isModeOn = true  
    } else {
        modeButton.innerText = "sad"  
        isModeOn = false
    }
    // when the button is clicked, select the element we want to target 
    const aboutSection = document.querySelector(".about");
    const vacationSection = document.querySelector(".vacation");
    aboutSection.classList.toggle("darkMode");
    
});


// const aboutSection = document.querySelectorAll("section");



