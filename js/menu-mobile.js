(function () {
  let burger = document.querySelector(".burger-container"),
    header = document.querySelector(".header"),
    window = document.querySelector(".window"),
    menuItem = document.querySelectorAll(".menu-item");

  burger.onclick = function () {
    header.classList.toggle("menu-opened");
    window.classList.toggle("menu-opened");
    console.log("teste");
  };

  // Adding onclick event for all the menu itens on the mobile hamburguer menu
  menuItem.forEach((element) => {
    element.onclick = function () {
      header.classList.toggle("menu-opened");
      window.classList.toggle("menu-opened");
    };
  });
})();
