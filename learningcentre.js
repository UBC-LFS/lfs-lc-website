jQuery(document).ready(function ($) {
    //$("#container").prepend($("#main-content"));
    $("div[role='main']").prepend($("#main-content"));
    $("#main-content").prepend($("#content"));
    $("#container").prepend($(".image-region"));
});