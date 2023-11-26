function hide(i, i1) {
  document.getElementById(i).style.display = "none";
  document.getElementById(i1).style.display = "block";
}

function hideLoad() {
  var elements = document.querySelectorAll(".hideLoad");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
}

function burgerToggle(e) {
  (burgerTarget = e.parentElement.nextElementSibling),
    e.classList.toggle("burger-active"),
    burgerTarget.classList.toggle("burger-target-active"),
    setTimeout(() => {
      burgerTarget.classList.toggle("show");
    }, 150);
}

function openGlossary() {
    let e = document.querySelector(".header-button__glossary"),
      t = e.querySelector("span"),
      r = e.querySelectorAll("svg")[1],
      s = document.querySelector("main");
    document.querySelector(".glossary").classList.toggle("show"),
      s.classList.toggle("show"),
      r.classList.toggle("opacity"),
      r.classList.contains("opacity")
        ? (t.innerHTML = "Термины")
        : (t.innerHTML = "Вернуться в меню");
  }
  
  function darkTheme() {
      let e = document.querySelector(".header-button__switch-theme"),
        t = e.querySelector("span"),
        r = e.querySelectorAll("svg"),
        s = document.querySelector("body");
      if (
        (r[0].classList.toggle("opacity"),
        r[1].classList.toggle("opacity"),
        s.classList.toggle("dark"),
        s.classList.contains("dark"))
      )
        return (
          (t.innerHTML = "Включить светлую тему"),
          localStorage.setItem("theme", !0)
        );
      (t.innerHTML = "Включить тёмную тему"),
        localStorage.setItem("theme", !1)
    }