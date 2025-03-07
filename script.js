"use script"
  // document.addEventListener("DOMContentLoaded", function () {ეს საჭიროა თუ სცრიპტი თავში გიწერიაო ჩატჯპტ-მ
    let hamburger = document.querySelector(".hamburger");
    let navigation = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function () {
        navigation.classList.toggle("active");
        hamburger.innerHTML = navigation.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });
// }); ეს DOMContentLoaded - ს ფრჩხილია, იგივეა ქვემოთაც



  

  
    const currentPage = window.location.pathname.split("/").pop(); 
    const menuLinks = document.querySelectorAll(".nav-menu a");
  
    menuLinks.forEach(link => {
      const linkPage = link.getAttribute("href").split("/").pop(); 
      if (linkPage === currentPage) {
        link.classList.add("active"); 
      }
    });
 
  // acordion

  let acordion = document.querySelectorAll('.acordion-container');
  acordion.forEach(item=>{
    item.addEventListener('click', function(){
      this.classList.toggle('active');
    });
  });
  
    
  