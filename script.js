jQuery(document).ready(function($) { //Needed for Wordpress !
    $(function()
    {
        $(".circle-hover").hover(function()
        {
            $(".cir-11").addClass("hover-visible");
            $(".link-name").addClass("link-name-visible");
        }, function()
        {
            // var link = $(".cir-11");
            // window.setTimeout(function(){
            //     $(link).removeClass("hover-visible");
            //     $(".link-name").removeClass("link-name-visible");
            // }, 1000);
        });
    });
  });  