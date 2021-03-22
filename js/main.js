const buttonPlay = document.querySelector('.service__button-play');
const videoPoster = document.querySelector('.service__poster');
const video = document.querySelector('.service__content-video');
const btnBurger = document.querySelector('.header__togler');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

function videoPlay() {
  buttonPlay.classList.add('display--none');
  videoPoster.classList.add('display--none');
  video.setAttribute(
    'src',
    'https://www.youtube.com/embed/wnTZyvOs1-k?&autoplay=1'
  );
}
function navMenu() {
  header.classList.toggle('header--mobile');
  nav.classList.toggle('is-open');
}

btnBurger.addEventListener('click', navMenu);
buttonPlay.addEventListener('click', videoPlay);
