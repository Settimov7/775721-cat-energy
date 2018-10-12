if (window.innerWidth <= 768) {
  var mainNavigation = document.querySelector('.main-navigation');
  var navigationToggle = mainNavigation.querySelector('.main-navigation__toggle');

  mainNavigation.classList.remove('main-navigation--nojs');

  navigationToggle.addEventListener('click', function() {
    if (mainNavigation.classList.contains('main-navigation--closed')) {
      mainNavigation.classList.remove('main-navigation--closed');
      mainNavigation.classList.add('main-navigation--opened');
    } else {
      mainNavigation.classList.remove('main-navigation--opened');
      mainNavigation.classList.add('main-navigation--closed');
    }
  });
}
