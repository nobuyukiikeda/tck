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
			$link = get_permalink();
			if( has_post_thumbnail() ){
				$id = get_post_thumbnail_id();
				$attachment = wp_get_attachment_image_src($id, 'large');
				$thumbnail = $attachment[0];
				echo '<div class="entry-thumbnail-wrap"><a class="entry-thumbnail" href="'. $link .'" data-thumb="' . $thumbnail . '"><div class="thumb-spinner"><div class="spinner"><div class="cube1"></div><div class="cube2"></div></div></div></a></div>';
			} else {
				$thumbnail = (get_stylesheet_directory_uri() . '/img/common/dummy_thumb.jpg');
				echo '<div class="entry-thumbnail-wrap"><a class="entry-thumbnail" href="'. $link .'" data-thumb=""><span class="dummy_logo"></span><div class="thumb-spinner"><div class="spinner"><div class="cube1"></div><div class="cube2"></div></div></div></a></div>';

			}


			echo '<h2 class="entry-title"><a href="' . $link . '" rel="bookmark">';
			if(mb_strlen($post->post_title, 'UTF-8')>20){
				$title = mb_substr($post->post_title, 0, 20, 'UTF-8');
				echo $title . '...';
			}else{
				echo $post->post_title;
			}
			echo '</a></h2>';

			entry_meta();

			// echo (sprintf( '<div class="entry-sammary"><p>%s</p></div>', get_the_excerpt() ) );

			wp_link_pages( array(
				'before'      => '<div class="page-links"><span class="page-links-title">Pages: </span>',
				'after'       => '</div>',
				'link_before' => '<span>',
				'link_after'  => '</span>',
				'pagelink'    => '<span class="screen-reader-text">Page </span>%',
				'separator'   => '<span class="screen-reader-text">, </span>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">

	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
