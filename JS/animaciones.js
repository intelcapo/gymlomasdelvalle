$("document").ready(function(){
    /*$(".lnk").css({color:'#FFF'});*/

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
            backgroundColor:'#00bcd4',
            color:'#b2ebf2'
        });
        $(this).animate({
            top:'-20px',            
        },500);
    });

    $(".containerMini").mouseout(function(){
        $(this).css({
            backgroundColor: '#03a9f4',
            color:'#b2ebf2'
        });
        $(this).animate({
            top:'0px'
        },500);
    });

    animateSection(getRandomNumber());
  
});

function animateSection(typeAnimation){
    console.log(typeAnimation);
    
    $(".information").css({
        display:'none'
    });   

    switch(typeAnimation){
        case 1:
            $(".imgAnimate").css({
                //opacity:'0',
                marginTop:'-1500px' 
            });
            $(".imgAnimate").animate({
                marginTop:'0'
            
            },800,function(){$(".information").fadeIn(500);});
        break;
        case 2:
            $(".imgAnimate").css({
                //opacity:'0',
                marginLeft:'-1500px' 
            });
            $(".imgAnimate").animate({
                marginLeft:'0'
            
            },800,function(){$(".information").fadeIn(500);});
        break;
        case 3:
            $(".imgAnimate").css({
                //opacity:'0',
                marginRight:'-1500px' 
            });
            $(".imgAnimate").animate({
                marginRight:'0'
            
            },800,function(){$(".information").fadeIn(500);});
        break;
        case 4:
            $(".imgAnimate").css({
                //opacity:'0',
                marginTop:'3000px' 
            });
            $(".imgAnimate").animate({
                marginTop:'0'
            
            },800,function(){$(".information").fadeIn(500);});
        break;
        default:
        break;
    }
}

function getRandomNumber(){
    return Math.floor(Math.random() * (5-1)) + 1;
}

