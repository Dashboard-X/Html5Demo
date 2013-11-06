jQuery(window).load(function() {
    $.get('feed.php', function(data){
        $('.sliderkit-nav-clip ul').append(data.thumbs);
        $('.sliderkit-panels').append(data.images);

        jQuery('#sliderkit_galery').sliderkit({
            mousewheel:true,
            keyboard:true,
            shownavitems:4,
            auto:true,
            circular:true,
            navscrollatend:true,
            verticalnav:true,
            navclipcenter:true,
            navitemshover:true,
            panelfxspeed: 2000
        });
    });
});