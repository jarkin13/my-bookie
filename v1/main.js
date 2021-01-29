// es6 => is same as function()

(() => {
  const btnSubMenuLink = document.querySelectorAll(".btn-link--has-submenu");
  for (let i = 0; i < btnSubMenuLink.length; i++) {
    const btn = btnSubMenuLink[i];
    const subMenuId = btn.getAttribute("data-open");
    const subMenu = document.querySelector(`#${subMenuId}`);

    btn.onclick = () => {
      let isOpened = "true";

      if (btn.getAttribute("date-is-open") === "true") {
        isOpened = "false";
        subMenu.classList.remove("opened");
      } else {
        subMenu.classList.add("opened");
      }

      btn.setAttribute("data-is-open", isOpened);
    };
  }
})();
