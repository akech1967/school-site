"use script";
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

const currentpage = window.location.pathname.split("/").pop();
const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage === currentpage) {
    link.classList.add("active");
  }
});

// acordion

let acordion = document.querySelectorAll(".acordion-container");
acordion.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// fetch



let currentPage = 1;
let totalPages;

function getUsers(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "GET",
  })
    .then(function (response) {
      if (response.status !== 200) {
        throw response.status;
      }
      return response.json();
    })
    .then(function (responseData) {
      // let container = document.getElementById('container')
      let fragment = document.createDocumentFragment();
      totalPages = responseData.total_pages;
      console.log(responseData);

      responseData.data.forEach(function (item) {
        let li = document.createElement("li");
        li.textContent = item.email;
        let image = document.createElement("img");
        image.src = item.avatar;
        fragment.appendChild(li);
        fragment.appendChild(image);
      });

      document.getElementById("ul_list").innerHTML = " ";
      document.getElementById("ul_list").appendChild(fragment);
    })
    .catch(function () {
      let container = document.getElementById("container");
      let p = document.createElement("p");
      p.textContent = "server error 404";
      container.appendChild(p);
    });
}

document.getElementById("loadprev").addEventListener("click", function () {
  if (currentPage == 1) {
    return;
  }

  currentPage -= 1;
  getUsers(currentPage);
  
});

document.getElementById("loadnext").addEventListener("click", function () {
  if (currentPage == totalPages) {
    return;
  }
  currentPage += 1;
  getUsers(currentPage);
});

getUsers(currentPage);



