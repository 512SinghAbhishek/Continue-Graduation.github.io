(function(){
    $('.flex-container').waitForImages(function() {
        $('.spinner').fadeOut();
}, $.noop, true);

$(".flex-slide").each(function(){
    $(this).hover(function(){
        $(this).find('.flex-title').css({
            transform: 'rotate(0deg)',
            top: '10%'
        });
        $(this).find('.flex-about').css({
            opacity: '1'
        });
    }, function(){
        $(this).find('.flex-title').css({
            transform: 'rotate(90deg)',
            top: '15%'
        });
        $(this).find('.flex-about').css({
            opacity: '0'
        });
    })
});
})();


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

