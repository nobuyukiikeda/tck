<?php
/**
 * The header for our theme
 *
 * @package WordPress
 * @subpackage tck
 * @since 1.0
 * @version 1.0
 */

?>
<!DOCTYPE html>
<html>
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-67528979-8"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-67528979-8');
  </script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <?php wp_head(); ?>
  <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
</head>

<body <?php body_class($class); ?>>
    <div class="wrapper">
      <h1 id="site-description" class="site-description">Technology + Creative Knowledge blog.</h1>  
      <header id="header" class="header">
        <div class="nav-toggle">
          <span></span><span></span><span></span>
      </div>
      <div class="header-content">
          <div class="logo-wrap">
            <a href="<?php echo home_url(); ?>" class="site-logo"><h2><img src="<?php echo get_stylesheet_directory_uri() ?>/img/header/logo_set1.svg"></h2></a>
        </div><!-- .logo-wrap -->

        <?php if( wp_is_mobile() ) : ?>
            <div class="sp-nav-overlay"></div>
            <div class="nav-wrap">
              <h4 class="nav-title"><img src="<?php echo get_stylesheet_directory_uri() ?>/img/header/typo_menu.svg" alt="メニュー"></h4>
              <ul id="gNav" class="nav">
                <?php tck_head_cat(); ?>
            </ul>
            <?php // tck_get_header_sns(); ?>
        </div><!-- .nav-wrap -->

        <?php else: ?><!-- if PC -->
        <div class="nav-wrap">
          <ul id="gNav" class="nav">
            <?php tck_head_cat(); ?>
        </ul>
        <?php // tck_get_header_sns(); ?>
    </div><!-- .nav-wrap -->

    <?php endif; ?><!-- if PC end -->


</div><!-- .header-content -->
	</header><!-- #masthead -->