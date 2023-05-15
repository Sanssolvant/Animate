// Saves the percentage of window scrolled in --scroll variable
/* window.addEventListener(
  'scroll',
  () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

    console.log(window.scrollY);
  },
  false
); */

// Active Klasse der Navbar geben so weiss man wo man ist
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
});

// Auto snap 100vh
window.addEventListener('scroll', e => {
  let scrolled = window.pageYOffset;
  setTimeout(() => {
    if (scrolled == window.pageYOffset) {
      if (scrolled % window.innerHeight >= window.innerHeight / 2) {
        window.scrollBy(0, window.innerHeight - (scrolled % window.innerHeight));
      } else {
        window.scrollBy(0, -(scrolled % window.innerHeight));
      }
    }
  }, 350);
});

//Animation when 50% is visible
const hiddenLeft = document.querySelectorAll('.hiddenLeft');
const hiddenRight = document.querySelectorAll('.hiddenRight');
const hiddenUnder = document.querySelectorAll('.hiddenUnder');
const hiddenAbove = document.querySelectorAll('.hiddenAbove');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('hiddenLeft') || entry.target.classList.contains('hiddenRight')) {
        entry.target.classList.add('slideIn');
      } else if (entry.target.classList.contains('hiddenUnder') || entry.target.classList.contains('hiddenAbove')) {
        entry.target.classList.add('slideInUp');
      }
    } else {
      if (entry.target.classList.contains('hiddenLeft') || entry.target.classList.contains('hiddenRight')) {
        entry.target.classList.remove('slideIn');
      } else if (entry.target.classList.contains('hiddenUnder') || entry.target.classList.contains('hiddenAbove')) {
        entry.target.classList.remove('slideInUp');
      }
    }
  });
}, options);

hiddenLeft.forEach(element => observer.observe(element));
hiddenRight.forEach(element => observer.observe(element));
hiddenUnder.forEach(element => observer.observe(element));
hiddenAbove.forEach(element => observer.observe(element));

// Send Emails from a formular
const contactForm = document.querySelector('.contact-form');
let namen = document.querySelector('.text-box-name');
let email = document.querySelector('.text-box-email');
let subject = document.querySelector('.text-box-subject');
let message = document.querySelector('.text-box-message');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  let formData = {
    name: namen.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == 'Success') {
      /*       document.querySelector('#alert-success').style.display = 'block'; */
      namen.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    } /* else {
      document.querySelector('#alert-error').style.display = 'block';
    } */
  };

  xhr.send(JSON.stringify(formData));
});

// Slideshow working
/* let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
} */

// Thumbnail image controls
/* function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
} */
