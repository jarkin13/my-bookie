(() => {
  const nav = document.querySelector(".nav-secondary-actions");
  const btnSubMenuLink = document.querySelectorAll(".btn-link--has-submenu");
  for (let i = 0; i < btnSubMenuLink.length; i++) {
    const btn = btnSubMenuLink[i];
    const subMenuId = btn.getAttribute("data-open");
    const subMenu = document.querySelector(`#${subMenuId}`);

    btn.onclick = () => {
      let isOpened = "true";
      const currentSubMenuOpened = nav.querySelector(".opened");

      if (currentSubMenuOpened && currentSubMenuOpened !== subMenu) {
        const openId = currentSubMenuOpened.getAttribute("id");
        currentSubMenuOpened.classList.remove("opened");
        nav
          .querySelector(`[data-open=${openId}]`)
          .setAttribute("data-is-open", "false");
      }

      if (btn.getAttribute("data-is-open") === "true") {
        isOpened = "false";
        subMenu.classList.remove("opened");
      } else {
        subMenu.classList.add("opened");
      }

      btn.setAttribute("data-is-open", isOpened);
    };
  }

  const bets = document.querySelectorAll(".bet-container");
  const userBets = [];

  for (let i = 0; i < bets.length; i++) {
    const bet = bets[i];
    bet.onclick = () => {
      const title = bet.querySelector(".title").innerText;
      const odd = bet.querySelector(".odds").innerText;

      const betData = {
        title,
        odd,
        id: i,
      };
      console.log(betData);
    };
  }
})();
