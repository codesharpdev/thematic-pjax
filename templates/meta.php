<?php
header('X-Link-Canonical: ' . get_permalink());
if (!is_singular()) {
    header('X-Link-Previous: ' . get_previous_posts_page_link());
    header('X-Link-Next: ' . get_next_posts_page_link());
} else {
    header('X-Link-Previous: ' . get_permalink(get_adjacent_post($in_same_cat = false, $excluded_categories = '', $previous = true)->ID));
    header('X-Link-Next: ' . get_permalink(get_adjacent_post($in_same_cat = false, $excluded_categories = '', $previous = false)->ID)); 
}
?>