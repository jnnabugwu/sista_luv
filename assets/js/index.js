const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter 
let counter = 0;

// const size = (carouselImages[4].clientWidth - 50);
// doesn't load well because if images load after the JS the clientWidth method returns 0

const size = 617;

// const image = document.getElementById("size");
// image.addEventListener("load", function(image) {
//   var size_2;
//   size_2 = image.clientWidth - 50;
//   return size_2;
//   alert('yooo');
// });

// carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

//button listeners
nextBtn.addEventListener('click', function() {
    if (counter >= carouselImages.length -1) {
      carouselSlide.style.transition = "transform 0.4s ease"
      counter = -1;
      carouselSlide.style.transform = "translateX(" + (size*counter) + "px)";
    }
    carouselSlide.style.transition = "transform 0.4s ease";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

prevBtn.addEventListener('click', function() {
    if (counter <= 0) {
      carouselSlide.style.transition = "transform 0.4s ease";
      counter = carouselImages.length;
      carouselSlide.style.transform = "translateX(" + (-size*counter) + "px)";
    }
    carouselSlide.style.transition = "transform 0.4s ease";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});
