document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы, которые будем анимировать
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  const image = document.querySelector("img");
  const animateText = document.querySelector(".animate-text");

  // Задаем начальные стили элементов
  anime.set([header, main, footer], {
    opacity: 0,
    translateY: 50,
  });

  anime.set(image, {
    translateY: "-50%",
  });

  anime.set(animateText, {
    opacity: 0,
    translateY: 20,
  });

  // Создаем анимации для элементов
  anime({
    targets: [header, main, footer],
    opacity: 1,
    translateY: 0,
    delay: anime.stagger(100),
    easing: "easeOutQuad",
  });

  anime({
    targets: image,
    translateY: 0,
    duration: 2000,
    easing: "easeInOutQuad",
  });

  anime({
    targets: animateText,
    opacity: 1,
    translateY: 0,
    delay: 1500,
    easing: "easeOutQuad",
  });

  console.log("JavaScript работает!");
});
