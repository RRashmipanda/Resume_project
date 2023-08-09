// var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
// //14 anchor tag
// for(var i=0;i<navMenuAnchorTags.length;i++){
// 	navMenuAnchorTags[i].addEventListener('click',function(event){

//      //fetching element
//     event.preventDefault();//to prevent default behaviour
//     var targetSectionID=this.textContent.trim().toLowerCase();
//     var targetSection=document.getElementById(targetSectionID);
//      console.log(targetSection);

//     var interval=setInterval(function(){
//     	  //dimension or coordinate of target section calculate rectangle(rect)
//     var targetSectionCoordinates=targetSection.getBoundingClientRect();

//    if(targetSectionCoordinates.top<=0){
// 	clearInterval(interval);
// 	return;	
// }
// window.scrollBy(0,50);
//     },20); 
    
// 	});
// }


// Handle scroll event on window
  //Check that skills sections container is visible or not
//ensure that initial width of colored skill div is zero-->initialiseed/reset to 0 width value 
//start animation on every skill--> increase skill width from0 to skill level
// Store skill level --> HTML with the help of data attribute












var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
   
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        //console.log(barCoordinates.height);
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



 window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);





