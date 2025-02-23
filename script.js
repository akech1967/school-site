document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); // იღებს მიმდინარე ფაილის სახელს (მაგ., index.html)
    const menuLinks = document.querySelectorAll(".nav-menu a");
  
    menuLinks.forEach(link => {
      const linkPage = link.getAttribute("href").split("/").pop(); // იღებს მხოლოდ ფაილის სახელს ლინკიდან
      if (linkPage === currentPage) {
        link.classList.add("active"); // ამატებს active კლასს სწორ ლინკს
      }
    });
  });
  
  

  