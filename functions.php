<?php
/**
 * model_owned functions and definitions
 *
 * @package WordPress
 * @subpackage tck
 * @since 1.0
 */

// adminバー非表示
add_filter('show_admin_bar', '__return_false');


require get_template_directory() . '/inc/template-tags.php';

// bodyにページのスラッグ名を追加
function pagename_class($classes = '') {
  if (is_page()) {
    $page = get_post();
    $classes[] = $page->post_name;
  }
  return $classes;
}
add_filter('body_class', 'pagename_class');

// カテゴリ一覧を取得
function tck_head_cat() {
  $args = array(
    'title_li' => null,
    // 'number'   => 10,
    'depth'    => 2
  );
  wp_list_categories($args);
}

// 投稿ページにサムネイルを追加
add_theme_support( 'post-thumbnails' ); 





