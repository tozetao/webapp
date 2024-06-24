import { classicMovieContent } from './modules/classicMovie.js';
import { hotMovieContent } from './modules/hotMovie.js';
import { theaterContent } from './modules/theater.js';
import { willComingContent } from './modules/willComing.js';

document.addEventListener('touchstart', function(event) {
  event.preventDefault()
}, {
  passive: false
})

const main = document.querySelector('#main')
const links = document.querySelectorAll('#topNav a')

function activeLink(link) {
  // link.classList.remove('active')
  links.forEach(link => {
    link.className = '';
  });
  // link.classList.add('active')
  link.className = 'active'
}

const topNav = document.querySelector('#topNav')
topNav.addEventListener('touchstart', event => {
  switch (event.target.id) {
    case 'hot':
      console.log(main)
      main.innerHTML = hotMovieContent
      activeLink(event.target)
      break;
    case 'theater':
      main.innerHTML = theaterContent
      activeLink(event.target)
      break;
    case 'willComing':
      main.innerHTML = willComingContent
      activeLink(event.target)
      break;
    case 'classic':
      main.innerHTML = classicMovieContent
      activeLink(event.target)
      break;
    default:
      break;
  }
})

const footer = document.querySelector('#footer')
footer.addEventListener('touchstart', function(event) {
  console.log(event.target)
  console.log(event.target.parentNode)
})
