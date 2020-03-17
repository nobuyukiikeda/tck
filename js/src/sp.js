export default function() {
  // SPナビゲーション
  


  // SPナビトグル
  const navOpen = () => {
    $('.sp-nav-overlay').fadeIn();
    $('#header').addClass('is-open');
    $('body, html').css('overflow', 'hidden');
  }
  const navClose = () => {
    $('.sp-nav-overlay').fadeOut();
    $('#header').removeClass('is-open');
    $('body, html').css('overflow', 'visible');
  }

  $('.nav-toggle').on('click', () => {
    if ( $('#header').hasClass('is-open') ) {
      navClose();
    } else {
      navOpen();
    }
  });
  $('.sp-nav-overlay').on('click', () => {
    navClose();
  });

}
