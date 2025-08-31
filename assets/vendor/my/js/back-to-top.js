let backtotop = document.querySelector(".fa-arrow-up");

if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };

  window.addEventListener("load", toggleBacktotop);
  window.addEventListener("scroll", toggleBacktotop);

  backtotop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
