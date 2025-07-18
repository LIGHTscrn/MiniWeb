function toggle_menu() {
  const menu = document.getElementById("DDM_items");

  if (menu.classList.contains("hide")){
    menu.classList.remove("hide");

    anime({
      targets: '#DDM_items > ul > li' ,
      translateX : [-30,0],
      opacity: [0, 1],
      duration: 400,
      easing: 'easeOutQuad',
      delay: anime.stagger(100),
    });
  } else {
    menu.classList.add("hide");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  anime({
    targets: ".Hero-section",
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 1000,
    easing: 'easeOutQuad',
  });

});
