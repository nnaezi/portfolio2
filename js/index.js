$(function () {

    // nav
    $('.menu>li>a').click(function (e) {
        e.preventDefault();
        let targetHref = $(this).attr('href')
        let posTop = $(targetHref).offset().top
        $('html,body').stop().animate({ scrollTop: posTop }, 800);
    })

    // scroll
    $('.all > div, footer').on('mousewheel DOMMouseScroll', function (event) {
        let E = event.originalEvent;
        let delta = 0;
        if (E.detail) {
            delta = E.detail * -40;
        } else {
            delta = E.wheelDelta;
        }
        // console.log(this)
        if (delta > 0) {
            //마우스 휠을 올렸을 때 
            if ($(this).attr("class") == "contents") {
                
            } else {
                let posTop = $(this).prev().offset().top;
                $('html,body').stop().animate({ scrollTop: posTop }, 800);
            }
            
        } else {
            //마우스 휠을 내렸을 때 
            if ($(this).attr("class") == "contents") {
                
            } else {
                let posTop = $(this).next().offset().top;
                $('html,body').stop().animate({ scrollTop: posTop }, 800);
            }
            
        }

    });

    // pr
    $(window).scroll(function () {
        let wH = $(window).height() * 0.7;
        let sT = $(window).scrollTop();

        $(".prL_text,.emo>img,.m_icon li,.m_icon li.r2_w_sticker,.m_icon li.r2_g_sticker").each(function () {
            if (sT + wH > $(this).offset().top) {
                $(this).addClass("zzan");
            } else {
                $(this).removeClass("zzan");
            }
        });
    });

    // contents
    $('.wrap').click(function () {
        $('.wrap').removeClass("on")
        $(this).addClass('on');
        $('.con_g_sticker').css('opacity', '0');
    })

    $('.btClose').click(function () {
        $('.wrap').removeClass("on")
        $('.con_g_sticker').css('opacity', '1');
        return false
    });
   
    
    
    // ill_popup

    $(".illScrollContents").scroll(function () {
        
        let scHeight = $(".illScrollContents").height();
        let scdoTop = $(".illScrollContents").offset().top;
        // console.log(scHeight)
        
        $(".ill_text>li").each(function(i){
            let tagtop = $(this).offset().top - scdoTop;
          
            if(scHeight*0.5 > tagtop){
                console.log(i+"번째리스트가 넘어감")
                shotGallery(i)
            }else{
                deleteGallery(i)
            }
        });
        return false;
    })

    function shotGallery(idx){
        $(".ill_popup_img").eq(idx).addClass("on")
    }
    function deleteGallery(idx){
        $(".ill_popup_img").eq(idx).removeClass("on")
    }




//ill_banner
    new Swiper(".ill_banner", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


// edi
    $('.edi').scroll(function(){
        let wH = $('.edi').height()*0.8;
        let sT = $('.edi').scrollTop();

        $(".gen img,.cel img,.cha img,.adv img,.ver img").each(function(){
            if(sT+wH > $(this).offset().top){
            $(this).addClass("zzan");
            }else{
            $(this).removeClass("zzan");
            }
        });
    });

// contact
    $(window).scroll(function(){
        let wH = $(window).height()*0.7;
        let sT = $(window).scrollTop();

        $(".n_txt,.e_txt,.n_img,.e_img").each(function(){
            if(sT+wH > $(this).offset().top){
            $(this).addClass("zzan");
            }else{
            $(this).removeClass("zzan");
            }
        });
    });



























});