// Saves the percentage of window scrolled in --scroll variable
/* window.addEventListener(
  'scroll',
  () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

    console.log(window.scrollY);
  },
  false
); */

// Scrolls um 100vh
/* window.addEventListener('wheel', event => {
  if (event.deltaY > 0) {
    window.scrollBy(0, window.innerHeight);
  }
});

window.addEventListener('wheel', event => {
  if (event.deltaY < 0) {
    window.scrollBy(0, -window.innerHeight);
  }
}); */

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

const hiddenLeft = document.querySelectorAll('.hiddenLeft');
const hiddenRight = document.querySelectorAll('.hiddenRight');
const hiddenUnder = document.querySelectorAll('.hiddenUnder');

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
      } else if (entry.target.classList.contains('hiddenUnder')) {
        entry.target.classList.add('slideInUp');
      }
    } else {
      if (entry.target.classList.contains('hiddenLeft') || entry.target.classList.contains('hiddenRight')) {
        entry.target.classList.remove('slideIn');
      } else if (entry.target.classList.contains('hiddenUnder')) {
        entry.target.classList.remove('slideInUp');
      }
    }
  });
}, options);

hiddenLeft.forEach(element => observer.observe(element));
hiddenRight.forEach(element => observer.observe(element));
hiddenUnder.forEach(element => observer.observe(element));

const contactForm = document.querySelector('.contact');
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
    } /* else {
      document.querySelector('#alert-error').style.display = 'block';
    } */
  };

  xhr.send(JSON.stringify(formData));
});
