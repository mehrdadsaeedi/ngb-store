const counters = document.querySelectorAll(".counter");
const speed = 200;

const options = { root: null, threshold: 0.5 };

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      counter.classList.add("visible");

      const index = Array.from(counters).indexOf(counter);
      const delay = index * 400;

      setTimeout(() => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const increment = Math.ceil(target / speed);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      }, delay);

      observer.unobserve(counter);
    }
  });
};

const observer = new IntersectionObserver(callback, options);
counters.forEach((counter) => observer.observe(counter));
