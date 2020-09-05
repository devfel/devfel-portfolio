(function () {
  menuItem = document.querySelectorAll(".menu-item");

  // Adding onclick event for all the menu itens on the mobile hamburguer menu
  menuItem.forEach((element) => {
    element.onclick = function () {
      document.getElementById("menu-btn").checked = false;
    };
  });
})();
