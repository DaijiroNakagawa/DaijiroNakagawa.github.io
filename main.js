$(function(){
    var $ham = $(".hamburger-wrap");
    var $nav = $(".h-nav");
    $ham.on("click", function(){
        console.log("ok!");
        $ham.toggleClass("active");
        $nav.toggleClass("active");
    });
});
