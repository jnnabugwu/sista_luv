const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter 
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

//button listeners
nextBtn.addEventListener('click', function() {
    if (counter >= carouselImages.length -1) { return;}
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

prevBtn.addEventListener('click', function() {
    if (counter <= 0) { return; } 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

carouselSlide.addEventListener("transitionend", function() {
    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transform = "none";
        counter = carouselImages.length - 2;

        carouselSlide.style.transform = "translateX(" + (-size*counter) + "px)";
    }

    if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transform = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size*counter) + "px)";
    }
})

function resetOrientation(srcBase64, srcOrientation, callback) {
    var img = document.getElementById("firstClone");    
  
    img.onload = function() {
      var width = img.width,
          height = img.height,
          canvas = document.createElement('canvas'),
          ctx = canvas.getContext("2d");
  
      // set proper canvas dimensions before transform & export
      if (4 < srcOrientation && srcOrientation < 9) {
        canvas.width = height;
        canvas.height = width;
      } else {
        canvas.width = width;
        canvas.height = height;
      }
  
      // transform context before drawing image
      switch (srcOrientation) {
        case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
        case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
        case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
        case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
        case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
        case 7: ctx.transform(0, -1, -1, 0, height, width); break;
        case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
        default: break;
      }
  
      // draw image
      ctx.drawImage(img, 0, 0);
  
      // export base64
      callback(canvas.toDataURL());
    };

    img.src = srcBase64;
};

  

    

// // all code goes in this IIFE to protect our code from the global scope
// // renamed document to d
// // !function(d) {
//     var itemClassName = "carousel_photo";
//     var items = document.getElementsByClassName(itemClassName),
//         totalItems = items.length,
//         slide = 0,
//         moving = true;


//     // set classes
//     function setInitialClasses() {
//         // Targets the previous, current, and next items (assuming there are at least 3 items)

//         items[totalItems - 1].classList.add("prev");
//         items[0].classList.add("active");
//         items[1].classList.add("next");
//     }

//     // set event listeners
//     function setEventListeners() {
//         var next = document.getElementsByClassName('carousel_button--next')[0];
//         var prev = document.getElementsByClassName('carousel_button--prev')[0];

//         next.addEventListener('click', moveNext);
//         prev.addEventListener('click', movePrev);
//     }

//     // next navigation handler
//     function moveNext() {
//         // check if moving
//         if (!moving) {
//             // if the last slide, reset to 0, else +1
//             if (slide === (totalItems - 1)) {
//                 slide = 0;
//             } else {
//                 slide++;
//             }
//             // move carousel to updated slide
//             moveCarouselTo(slide);
//         }
//     }
//     // prev navigation handler 
//     function movePrev() {
//         // check if moving
//         if (!moving) {
//             // if first slide, set as last slide, else -1
//             if (slide === 0) {
//                 slide = (totalItems - 1);
//             } else {
//                 slide--;
//             }
//             // move carousel to updated slide 
//             moveCarouselTo(slide);
//         }
//     }

//     function disableInteraction() {
//         // set moving to true for the same duration as our transition
//         // 0.5s = 500ms

//         moving = true;

//         // setTimeout runs its function once after the given time 
//         setTimeout(function() {
//             moving = false
//         }, 500);
//     }

//     function moveCarouselTo(slide) {
//         // check if carousel is moving
//         if (!moving) {

//             // temporarily disable interactivity and set not moving to false 
//             disableInteraction();

//             // update the 'old' adjacent slides w/ the new ones
//             var newPrevious = slide - 1,
//                 newNext = slide + 1,
//                 oldPrevious = slide - 2,
//                 oldNext = slide + 2;

//             // check if carousel has more than three items
//             if ((totalItems - 1) >= 3) {
//                 // checks and updates if the new slides are out of bounds 
//                 if (newPrevious <= 0) {
//                     oldPrevious = (totalItems - 1);
//                 } else if (newNext >= (totalItems - 1)) {
//                     oldNext = 0;
//                 }

//                 // checks and updates if slides is at the beginning/end 
//                 if (slide === 0) {
//                     newPrevious = (totalItems - 1);
//                     oldPrevious = (totalItems - 2);
//                     oldNext = (slide + 1);
//                 } else if (slide === (totalItems - 1)) {
//                     newPrevious = (slide - 1);
//                     newNext = 0;
//                     oldNext = 1;
//                 }

//                 // now we have where we are and where we're going
//                 // by adding/removing classes we'll trigger the transitions
                
//                 // reset old next/prev elements to default classes
//                 items[oldPrevious].className = itemClassName;
//                 items[oldNext].className = itemClassName;

//                 // add new classes
//                 items[newPrevious].className = itemClassName + " prev";
//                 items[slide].className = itemClassName + " active";
//                 items[newNext].className = itemClassName + " next";
//             }
//         }
//     }

//     function initCarousel() {
//         setInitialClasses();
//         setEventListeners();

//         // set moving to false so that the carousel becomes interactive
//         moving = false;
//     }

//     // make it rain
//     initCarousel();
// // }(document));

/* ORDER OF OPERATIONS
1. Select DOM elements

*/
/*
========================================================================================================================
*/

// var items = document.getElementsByClassName("carousel_photo");
// var totalItems = items.length;

// var currentPhoto = items[0];
// var nextPhoto = items[1];
// var prevPhoto = items[items.length - 1];
// var count = 0;


// function setClasses() {
//     items[(totalItems-1)].className += " prev";
//     items[1].className += " next";
//     console.log("Added classes to photos");
// }
// function setEventListeners() {
//     var prevButton = document.getElementById("carousel_button--prev");
//     var nextButton = document.getElementById("carousel_button--next");

//     prevButton.addEventListener("click", function() {
//         moveCarouselBackward();
//         console.log("clicked previous button");
//     });

//     nextButton.addEventListener("click", function() {
//         moveCarouselForward();
//         console.log("clicked next button");
//     });
// }
// function moveCarouselForward() {
    
//     if (!(totalItems.index >= count)) {
//         items[count].classList.remove("initial");
//         items[count].className += " next";
//         items[count+1].className += " initial";
//         items[(count+1)].classList.remove("next");
//         count++;
//         console.log('moved carousel forward');
//     } else {
//         count = 0;
//         items[count].className += "initial";
//         items[(totalItems - 1)].classList.remove("initial");
//         items[(totalItems - 1)].className += " prev";
//         items[count+1].className += " next";
//     }
// }
// function moveCarouselBackward() {
//     console.log('moved carousel backward');
// }

// function runCarousel() {
//     setClasses();
//     setEventListeners();
// }

// runCarousel();