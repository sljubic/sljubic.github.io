function setLanguage(lang) {
  const hrElements = document.querySelectorAll('.hr');
  const enElements = document.querySelectorAll('.en');
  const btnHR = document.getElementById('lang-hr');
  const btnEN = document.getElementById('lang-en');
  const btnHRnav = document.getElementById('lang-hr-nav');
  const btnENnav = document.getElementById('lang-en-nav');
  
  if(lang==='hr'){
    hrElements.forEach(el => el.style.display='inline');
    enElements.forEach(el => el.style.display='none');
    document.documentElement.lang='hr';
    btnHR.classList.add('active'); btnEN.classList.remove('active');
    btnHRnav.classList.add('active'); btnENnav.classList.remove('active');
  } else {
    hrElements.forEach(el => el.style.display='none');
    enElements.forEach(el => el.style.display='inline');
    document.documentElement.lang='en';
    btnHR.classList.remove('active'); btnEN.classList.add('active');
    btnHRnav.classList.remove('active'); btnENnav.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => setLanguage('hr'));

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const flags = document.querySelector('.lang-toggle-nav');
  flags.style.display = window.scrollY > header.offsetHeight ? 'flex' : 'none';
});
