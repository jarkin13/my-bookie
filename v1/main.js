(() => {
  const btnSubMenuLinks = document.querySelectorAll(".btn-link--has-submenu");
  for (let i = 0; i < btnSubMenuLinks.length; i++) {
    const btn = btnSubMenuLinks[i];
    const subMenuId = btn.getAttribute("data-open");
    const subMenu = document.querySelector(`#${subMenuId}`);

    btn.onclick = () => {
      let isOpened = "true";

      if (btn.getAttribute("data-is-opened") === "true") {
        isOpened = "false";
        subMenu.classList.remove("opened");
      } else {
        subMenu.classList.add("opened");
      }

      btn.setAttribute("data-is-opened", isOpened);
    };
  }
})();
