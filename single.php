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

<main id="main" class="site-main single" role="main">
  <?php
    while ( have_posts() ) : the_post();
      get_template_part( 'template-parts/content', 'single' );
      // End the loop.
    endwhile;
  ?>
</main><!-- #main -->
<?php // get_sidebar(); ?>

<?php get_footer();
