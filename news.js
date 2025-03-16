// 

document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.querySelector(".school-container");
    const loadNewsButton = document.getElementById("load-news");
  
    
    const allNewsBoxes = newsContainer.querySelectorAll(".school-container__box");
    allNewsBoxes.forEach((box, index) => {
      if (index >= 3) {
        box.classList.add("hidden");
      }
    });
  
    loadNewsButton.addEventListener("click", function () {
      
      allNewsBoxes.forEach((box) => box.classList.remove("hidden"));
  
      
      newsContainer.classList.add("vertical");
    });
  });
  