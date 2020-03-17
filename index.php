<?php
/**
 * The main template file
 *
 * @package WordPress
 * @subpackage tck
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<main id="main" class="site-main list-page" role="main">
  <?php
  if ( have_posts() ) :
    // Start the loop.
    echo '<div class="article-list">';
    while ( have_posts() ) : the_post();
      get_template_part( 'template-parts/content', get_post_format() );
      // End the loop.
    endwhile;
    echo '</div>';

    // Previous/next page navigation.
    the_posts_pagination( array(
      'prev_text'          => __( 'Previous page', 'twentysixteen' ),
      'next_text'          => __( 'Next page', 'twentysixteen' ),
      'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentysixteen' ) . ' </span>',
    ) );

    // If no content, include the "No posts found" template.
  else :
    get_template_part( 'template-parts/content', 'none' );
  endif;
  ?>
</main><!-- #main -->
<?php // get_sidebar(); ?>

<?php get_footer();
