var duration = 20000;
var gap = 200;
var delay = -20000;

$(function () {
  /******** MARQUEE ********/
  $('.marqueeTop').marquee({
    duration: duration,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: delay,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,

    pauseOnHover: true,

    gap: gap
  });

  $('.marqueeBottom').marquee({
    duration: duration,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: delay,
    //'left' or 'right'
    direction: 'right',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,

    pauseOnHover: true,

    gap: gap
  });
  /******** END MARQUEE ********/

  /******** BOUNCE ********/
  $('.bounceAbout').DVDBounce({
    inc:1
  });

  $('.bounceTeam').DVDBounce({
    inc:1
  });

  $('.bounceShop').DVDBounce({
    inc:1
  });

  $('.bounceTV').DVDBounce({
    inc:1
  });

  $('.bounceInternet').DVDBounce({
    inc:1
  });

  $('.bounceProjects').DVDBounce({
    inc:1
  });
  /******** END BOUNCE ********/

  /******** MENU ********/
  $(".bounceAbout").mouseover(function(){
    $(".banner").css("background", "red");
    $(".bannerLeft").html('<span class = "firstTicker">ABOUT</span> ABOUT ABOUT ABOUT ABOUT ABOUT ');
    $(".bannerRight").html('<span class = "firstTicker">ABOUT</span> ABOUT ABOUT ABOUT ABOUT ABOUT ');
  });

  $(".bounceAbout").mouseout(function(){
    $(".banner").css("background", "white");
    $(".bannerRight").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
  });

  $(".bounceTeam").mouseover(function(){
    $(".banner").css("background", "#FF00FF");
    $(".bannerLeft").html('<span class = "firstTicker">TEAM</span> TEAM TEAM TEAM TEAM TEAM ');
    $(".bannerRight").html('<span class = "firstTicker">TEAM</span> TEAM TEAM TEAM TEAM TEAM ');
  });

  $(".bounceTeam").mouseout(function(){
    $(".banner").css("background", "white");
    $(".bannerRight").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
  });
  /******** END MENU ********/


});
