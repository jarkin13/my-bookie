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

  // Grabbing info from all bet-containers
  const allBets = document.querySelectorAll(".bet-container");
  // Want to find empty bet container
  const slip = document.getElementById("emptySlip");
  const userBets = [];

  // Looping through allBets
  for (let i = 0; i < allBets.length; i++) {
    const bet = allBets[i];
    //when we click bet runs function
    bet.onclick = function betSlip() {
      // Setting bet information variables for specific bet clicked
      const title = bet.querySelector(".title");
      const odds = bet.querySelector(".odds");
      const id = bet.getAttribute("id");
      // When true need to add bet to userBets[]
      let addBet = true;
      // Looping through userBets[], which is what has been clicked
      for (let j = 0; j < userBets.length; j++) {
        const userBet = userBets[j];
        // If bet is already in userBets[] need to remove
        if (id === userBet) {
          addBet = false;
        }
      }
      if (addBet) {
        // When addBet is true add to userBets[]
        userBets.push(id);
        // Want to copy empty container
        let slipCopy = slip.cloneNode(true);
        // Want to fill empty container with correct content with variables set above
        slipCopy.querySelector(".title").innerHTML = title.innerHTML;
        slipCopy.querySelector(".slip__total").innerHTML = odds.innerHTML;
        // Change id of slip copy
        slipCopy.setAttribute("id", id);
        // Append item to .bet-slips
        document.querySelector(".bet-slips").appendChild(slipCopy);
      } else {
        // When addBet is false remove from userBets[]
        userBets.splice(userBets.indexOf(id), 1);
        // Searching through .bet-slips
        const betSlips = document.querySelector(".bet-slips");
        // Of those bet-slips find id and remove it
        betSlips.querySelector(`#${id}`).remove();
      }
    };
  }
})();
