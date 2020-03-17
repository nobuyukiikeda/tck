import fixHeader from './fixHeader';
fixHeader();
import spFire from './sp';
spFire();

$(function(){
  // gnavカテゴリの数を制限
  const gNav = $('#gNav').children('li');
  for ( let i = 0;i < gNav.length;i++ ) {
    if( i > 4 ) {
      $(gNav[i]).remove();
    }
  }
  $('#gNav li:has(.children)').addClass('cat-parent');
  $('#gNav').css('opacity', 1);

});

// ページロード完了後に発火
$(window).on('load', function(){
  if($('.entry-thumbnail').length) {
    $('.entry-thumbnail').each(function(){
      let data = $(this).attr('data-thumb');
      $(this).find('.thumb-spinner').fadeOut(1000);
      if( !data == '' ) {
        $(this).append('<img src="' + data + '" alt="">');      
      } else {
        $(this).find('.dummy_logo').fadeIn(1000);
      }
      $(this).find('img').fadeIn(1000);
      $(this).find('.thumb-spinner').remove();
    });
  }
});
