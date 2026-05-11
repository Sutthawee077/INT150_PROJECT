const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;

/* show */
function showSlide(i){

  slides.forEach(slide =>
    slide.classList.remove("active")
  );

  dots.forEach(dot =>
    dot.classList.remove("active")
  );

  slides[i].classList.add("active");

  if(dots[i]){
    dots[i].classList.add("active");
  }

}

/* next */
function nextSlide(){

  slideIndex =
    (slideIndex + 1) % slides.length;

  showSlide(slideIndex);

}

/* prev */
function prevSlide(){

  slideIndex =
    (slideIndex - 1 + slides.length)
    % slides.length;

  showSlide(slideIndex);

}

/* buttons */
document
  .querySelector(".next")
  .addEventListener("click", nextSlide);

document
  .querySelector(".prev")
  .addEventListener("click", prevSlide);

/* dots */
dots.forEach((dot, i)=>{

  dot.addEventListener("click", ()=>{

    slideIndex = i;

    showSlide(slideIndex);

  });

});

/* auto */
setInterval(nextSlide, 5000);