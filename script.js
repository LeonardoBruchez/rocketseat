const img_profile = document.querySelector("#profile img");
const img_page2 = document.querySelector("#profile-page2 img");
main.classList.add('DarkModebgColor');
function toggleMode() {
  const html = document.body;
  html.classList.toggle("light");
  const main = document.querySelector("main#main");

  console.log(main);
  

  if (html.classList.contains("light")) {
    if (img_profile && img_page2) {
      img_profile.setAttribute("src", "./assets/avatar-claro.jpg");
    }
    if (img_page2) {
      img_page2.setAttribute("src", "./assets/avatar-claro.jpg");
    }
    main.classList.add('lightModebgColor');
    main.classList.remove('DarkModebgColor');
  } else {
    if (img_profile) {
      img_profile.setAttribute("src", "./assets/avatar.png");
    }
    if (img_page2) {
      img_page2.setAttribute("src", "./assets/avatar.png");

    }
     main.classList.add('DarkModebgColor');
     main.classList.remove('lightModebgColor');
  }
} 