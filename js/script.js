// Now that we have all our CSS in place, we can write some simple JS to listen for when the panels are clicked on //

const panels = document.querySelectorAll(".panel");
// Use querySelectorAll so that we grab all the panels. Be sure to use a class of panel here, not panels! //

// Function to toggle .open class on and off
function toggleOpen() {
    this.classList.toggle("open"); // this allows you to toggle (add and remove) the class .open //
    // once this finished transitioning itself to open, that's when we want to bring in the words from the top and bottom. We can do this by listening for the transitionend event (See second forEach loop below). //
}

// Function to toggle .active class on and off. This one needs an event parameter! 
function toggleActive(e) {
    console.log(e.propertyName); // We can use this to show us what is being transitioned (font-size & flex-grow, in this case). But we only care about the flex-grow. So, we can check for it using an if statemet. //
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    } // In Safari, the property is called "flex", while in other browsers it is called "flex-grow". We need to cover all our bases here, so we can simply check to see if the propertyName includes the word "flex". //
    // this.classList.toggle("open-active"); // this is how we would normally write it. However, there are going to be multiple transitionend events fired (2), so this will not work correctly //
}


panels.forEach(panel => panel.addEventListener("click", toggleOpen));
//EventListener for the click. So, we are taking each of the panels, looping over each one, listening for a click on each one, and then run the toggle function when its clicked. We can call the callback function, toggleOpen, directyl within the paranthesis since we are using an arrow function. DO NOT INCLUDE THE () AFTER THE TOGGLE FUNCTION (Ex. toggleOpen()) because that would cause it to run on page load, rather than when a user clicks it. //
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
// After the first event, toggleOpen, finishes, the toggleActive function will run automatically //