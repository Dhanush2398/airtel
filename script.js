
    function toggleMenu() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("active");
  }


    document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
      },
      pagination: {
        el: ".custom-pagination",
        type: "fraction",
      },
    });

    document.querySelector(".custom-arrow.prev").addEventListener("click", () => swiper.slidePrev());
    document.querySelector(".custom-arrow.next").addEventListener("click", () => swiper.slideNext());
  });