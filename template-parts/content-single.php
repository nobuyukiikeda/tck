<?php
/**
 * The template part for displaying content
 *
 * @package WordPress
 * @subpackage tck
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-content">
		<?php
			$format = '<h1 class="post-title">%s</h1>';
			$title = $post->post_title;
			echo sprintf($format,$title);

			entry_meta();
			
			echo '<div class="content-wrap">';
			the_content();
			echo '</div>';
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">

	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
