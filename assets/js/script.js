$('document').ready(function () {

 
    $('#google_translate_element').on("click", function () {

        // Change font family and color
        $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
            .css({
                'color': '#544F4B',
                'font-family': 'Roboto',
                                'width':'100%',
                               
            });
        // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');
            
                // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');
      
        // Change the padding of the languages
        $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');
      
        // Change the width of the languages
        $("iframe").contents().find('.goog-te-menu2-item').css(
            {'width': '25%'
            });
        $("iframe").contents().find('td').css('width', '100%');
      
        // Change hover effects
        $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
            $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
        }, function () {
            $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
        });
    
        // Change Google's default blue border
        $("iframe").contents().find('.goog-te-menu2').css('border', 'none');
    
        // Change the iframe's box shadow
        $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');
        
      
      
        // Change the iframe's size and position?
        $(".goog-te-menu-frame").css({
            'height': '100%',
            'width': '100%',
            'top': '0px'
        });
     
        
        // $(".goog-te-menu2-item").contents().find('div').css({
        //     'padding-top': '5px',
        //     'padding-bottom': '12px',
        // });
        $("iframe").contents().find('tr').css('display', 'grid');
        // Change iframes's size
        $("iframe").contents().find('.goog-te-menu2').css({
            'height': '100%',
            'width': '100%',
            'overflowY':'scroll'
        //     'width': '50%',
        // 'height': '40%',
        // 'top': '7%'
        });
    //    $(".goog-te-gadget-simple").contents().find('img').css('display', 'none');
    var xl="1440";
    var lg="1024";
    var md="768";
    var sm="";
    var xs="359"
    if($( window ).width()==md){
        $(".goog-te-menu-frame").css({
            'width':'19.5%',
            'height':'50%',
            'margin-top':'70px',
            'left':'51%'
        });
        // $("#google_translate_element").css({
        //     'margin-top':'2%'
        //         });
    }else if($( window ).width()==lg){
        $(".goog-te-menu-frame").css({
            'width':'14.5%',
            'height':'50%',
            'margin-top':'70px',
            'left':'34%'
        });
        // $("#google_translate_element").css({
        //     'margin-top':'2%'
        //         });
    }else if(($( window ).width()>"1200")&&($( window ).width()<"1400")){
        $(".goog-te-menu-frame").css({
            'width':'12%',
            'height':'50%',
            'margin-top':'73px',
            'left':'44%'
        });
        // $("#google_translate_element").css({
        //     'margin-top':'2%'
        //         });
    }
    else if($( window ).width()==xl){
        $(".goog-te-menu-frame").css({
            'width':'10.5%',
            'height':'50%',
            'margin-top':'70px',
            'left':'45%'
        });
    //     $("#google_translate_element").css({
    // 'margin-top':'2%'
    //     });
    }else if($( window ).width()<=xs){
        $(".goog-te-menu-frame").css({
            'width':'40%',
            'height':'50%',
            'margin-top':'70px',
            'left':'25%'
        });
    }else if(($( window ).width()>="360")&&($( window ).width()<="539")){
        $(".goog-te-menu-frame").css({
            'width':'40%',
            'height':'50%',
            'margin-top':'70px',
            'left':'32%'
        });
    }
    else if(($( window ).width()>="540")&&($( window ).width()<="767")){
        $(".goog-te-menu-frame").css({
            'width':'30%',
            'height':'50%',
            'margin-top':'70px',
            'left':'45%'
        });
    }else if($( window ).width()>="2560"){
        $(".goog-te-menu-frame").css({
            'width':'10%',
            'height':'50%',
            'margin-top':'70px',
            'left':'45.5%'
        });
        $(".goog-te-menu2 *").css({
            'fontSize':'12pt'
        });
        
    }
    });
    });