<?php
/**
 *
 * @package WordPress
 * @subpackage tck
 * @since 1.0
 */

 function tck_get_header_sns(){
  ?>
  <div class="site-header-sns-wrap">
    <div class="site-header-sns site-header-facebook">
      <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a>
    </div>
    <div class="site-header-sns site-header-twitter">
      <a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a>
    </div>
    <div class="site-header-sns site-header-rss">
      <a href="<?php bloginfo( 'rss_url' ) ?>" target="_blank"><i class="fa fa-rss"></i></a>
    </div>
  </div>
  <?php
 }

function entry_meta() {
  if ( in_array( get_post_type(), array( 'post', 'attachment' ) ) ) {
    tck_entry_date();
  }
  if ( 'post' === get_post_type() ) {
    tck_entry_tag();
  }
}

function tck_entry_date() {
  $time_string = '<span class="posted-on"><time class="entry-date published updated" datetime="%1$s">%2$s</time></span>';

  if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
    $time_string = '<span class="posted-on"><time class="updated" datetime="%3$s">%4$s</time></span>';
  }

  $time_string = sprintf( $time_string,
    esc_attr( get_the_date( 'c' ) ),
    get_the_date(),
    esc_attr( get_the_modified_date( 'c' ) ),
    get_the_modified_date()
  );

  echo $time_string;
}

function tck_entry_tag() {
  $tags_list = get_the_tag_list( '', _x( ', ', 'Used between list items, there is a space after the comma.', 'twentysixteen' ) );
  if ( $tags_list && ! is_wp_error( $tags_list ) ) {
    printf( '<span class="tags-links"><span class="screen-reader-text">%1$s </span>%2$s</span>',
      _x( 'Tags', 'Used before tag names.', 'twentysixteen' ),
      $tags_list
    );
  }
}

function tck_entry_taxonomies() {
  $categories_list = get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'twentysixteen' ) );
  printf( '<span class="cat-links"><span class="screen-reader-text">%1$s </span>%2$s</span>',
    _x( 'Categories', 'Used before category names.', 'twentysixteen' ),
    $categories_list
  );

  $tags_list = get_the_tag_list( '', _x( ', ', 'Used between list items, there is a space after the comma.', 'twentysixteen' ) );
  if ( $tags_list && ! is_wp_error( $tags_list ) ) {
    printf( '<span class="tags-links"><span class="screen-reader-text">%1$s </span>%2$s</span>',
      _x( 'Tags', 'Used before tag names.', 'twentysixteen' ),
      $tags_list
    );
  }
}