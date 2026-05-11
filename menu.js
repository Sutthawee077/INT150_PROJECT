const menuItems =
  document.querySelectorAll(".nav-center li");

const contents =
  document.querySelectorAll(".menu-content");

const megaMenu =
  document.querySelector(".mega-menu");

const overlay =
  document.querySelector(".overlay-blur");

const wrapper =
  document.querySelector(".menu-wrapper");

/* hover nav */
menuItems.forEach(item=>{

  item.addEventListener("mouseenter", ()=>{

    const type = item.dataset.menu;

    megaMenu.classList.add("show");

    overlay.classList.add("show");

    contents.forEach(content =>
      content.classList.remove("active")
    );

    const activeMenu =
      document.querySelector(
        `.menu-content.${type}`
      );

    if(activeMenu){
      activeMenu.classList.add("active");
    }

  });

});

/* leave */
wrapper.addEventListener("mouseleave", ()=>{

  megaMenu.classList.remove("show");

  overlay.classList.remove("show");

});