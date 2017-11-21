$("document").ready(function(){
    $("#fraseDos").animate({
        left:'0px',
        opacity:'1'
    },500,function(){
        $("#fraseUno").animate({
            left:'0px',
            opacity:'1'
        },500)
    });

    $(".containerMini").mouseover(function(){
        $(this).css({
            backgroundColor:'#000',
            color:'#FFF'
        });
        $(this).animate({
            top:'-20px',            
        },500);
    });

    $(".containerMini").mouseout(function(){
        $(this).css({
            backgroundColor:'#CCC',
            color:'#444d57'
        });
        $(this).animate({
            top:'0px'
        },500);
    });
});


