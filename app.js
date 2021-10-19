//  set date
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();
//  close links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // i could use the toggle method, but in case i added a new tab it would not show up in the navbar,
  // or if i would delete a tab, a blank space remain in that position
  // linksContainer.classList.toggle('show-links');
  // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport. that helps us to  dinamicly add or remove tabs without messing up with the navbar height,
  // this method adds or removes the space in the navbar a new tab
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

//  fixed navbar

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// smooth scroll
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //prevent default behavior of links
    e.preventDefault();
    //i used the sections id's to navigate dinamicly
    const id = e.currentTarget.getAttribute("href").slice(1);
    // slice extracts a section of a string without modifying original string.
    //in this case i want to start from the index of 1, so we skeep the first character - the #
    const element = document.getElementById(id);
    //calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight; //offsetTop - A Number, representing the top position of the element, in pixels
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0; // the nav menu will close after clicking a tab link
  });
});

//==================== About section code ====================
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (ev) {
  // console.log(ev.target.dataset.id);
  const id = ev.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      ev.target.classList.add("active");
    });
    //hide articles and show the current one
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
