/*THE SAME URL FOR EVERY NAV LINK*/
const url = (id) => {
  document.querySelector(id).scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

/* BACKGROUND INTERSECTING */
const bgOptions = {
  root: null,
  rootMargin: "-70px 0px 0px 0px",
  treshold: 1.0,
};

const bgCallback = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      document.querySelector("nav").classList.add("scrolled");
      document
        .querySelectorAll(".navBtn, .home")
        .forEach((div) => div.classList.add("color"));
    } else {
      document.querySelector("nav").classList.remove("scrolled");
      document
        .querySelectorAll(".navBtn, .home")
        .forEach((div) => div.classList.remove("color"));
    }
  });
};

const bgObserver = new IntersectionObserver(bgCallback, bgOptions);
const bgTarget = document.querySelector(".background");

bgObserver.observe(bgTarget);

/* H2 INTERSECTING */

const h2Options = {
  root: null,
  rootMargin: "0px",
  treshold: 1.0,
};

const h2Callback = (entries) => {
  entries.forEach((entry) => {
    !entry.isIntersecting
      ? entry.target.classList.add("transformH2")
      : entry.target.classList.remove("transformH2");
  });
};

const h2Observer = new IntersectionObserver(h2Callback, h2Options);
const h2Targets = document.querySelectorAll("h2");

h2Targets.forEach((h2Target) => h2Observer.observe(h2Target));

/* PROJECTS INTERSECTING */

const projectsOptions = {
  root: null,
  rootMargin: "-50px 0px -150px 0px",
  treshold: 1.0,
};

const projectsCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".stripe1").classList.add("transform1");
      document.querySelector(".stripe2").classList.add("transform2");
    } else {
      document.querySelector(".stripe1").classList.remove("transform1");
      document.querySelector(".stripe2").classList.remove("transform2");
    }
  });
};

const projectsObserver = new IntersectionObserver(
  projectsCallback,
  projectsOptions
);
const projectsTarget = document.querySelector("#projects");

projectsObserver.observe(projectsTarget);

/* TITLE INTERSECTING */

const titleOptions = {
  root: null,
  rootMargin: "-100px 0px 0px 0px",
  treshold: 1.0,
};

const titleCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".background").classList.add("bgTransform");
      document.querySelector(".title2").classList.add("visible");
      //document.querySelector(".background span").classList.add("");
    } else {
      document.querySelector(".background").classList.remove("bgTransform");
      document.querySelector(".title2").classList.remove("visible");
      //document.querySelector(".background span").classList.remove("transform2");
    }
  });
};

const titleObserver = new IntersectionObserver(titleCallback, titleOptions);
const titleTarget = document.querySelector(".background");

titleObserver.observe(titleTarget);
