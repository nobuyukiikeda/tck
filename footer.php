<?php
/**
 * The template for displaying the footer
 *
 * @package WordPress
 * @subpackage tck
 * @since 1.0
 * @version 1.2
 */

?>
	<footer class="footer">
			<div class="footer-top">
        <!-- <ul class="footer-nav">
          <li><a href="<?php echo home_url(); ?>">home</a></li>
          <li><a href="<?php echo home_url('about/'); ?>">about</a></li>
          <li><a href="<?php echo home_url('contact/'); ?>">contact</a></li>
        </ul> -->
        <!-- .footer-nav -->
      </div>
      <div class="footer-bottom">
        <div class="copyright"><p>©2017 TC-Knowledge</p></div>
      </div>
	</footer><!-- #colophon -->
</div><!-- .wrap -->
<?php wp_footer(); ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script async src="<?php echo get_stylesheet_directory_uri(); ?>/js/dist/app.js"></script>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/dist/highlight.pack.js"></script>
<script>
  hljs.initHighlightingOnLoad();
  console.log('the');
</script>
</body>
</html>
