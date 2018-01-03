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
  var bodyWidth = document.body.clientWidth
  var bodyHeight = document.body.clientHeight;

  var randPosX;
  var randPosY;

  function randLoc(){
    randPosX = Math.floor((Math.random()*bodyWidth));
    randPosY = Math.floor((Math.random()*bodyHeight));
  }

  var bouncingDiv=[];
  $(".bounce").each(function(){ bouncingDiv.push($(this));});

  for (var i = 0; i < bouncingDiv.length; i++) {
    console.log(bouncingDiv[i]);
    randLoc();
    $(bouncingDiv[i]).css('left', randPosX);
    $(bouncingDiv[i]).css('top', randPosY);
    $(bouncingDiv[i]).DVDBounce({
      inc:1
    });
  }

  // $('.bounceAbout').DVDBounce({
  //   inc:1
  // });
  //
  // $('.bounceTeam').DVDBounce({
  //   inc:1
  // });
  //
  // $('.bounceShop').DVDBounce({
  //   inc:1
  // });
  //
  // $('.bounceTV').DVDBounce({
  //   inc:1
  // });
  //
  // $('.bounceInternet').DVDBounce({
  //   inc:1
  // });
  //
  // $('.bounceProjects').DVDBounce({
  //   inc:1
  // });
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

  $(".bounceShop").mouseover(function(){
    $(".banner").css("background", "#FF0000");
    $(".banner").css("color", "#FFF");
    $(".bannerLeft").html('<span class = "firstTicker">SHOP</span> SHOP SHOP SHOP SHOP SHOP');
    $(".bannerRight").html('<span class = "firstTicker">SHOP</span> SHOP SHOP SHOP SHOP SHOP');
  });

  $(".bounceShop").mouseout(function(){
    $(".banner").css("background", "white");
    $(".banner").css("color", "#000");
    $(".bannerRight").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
  });

  $(".bounceTV").mouseover(function(){
    $(".banner").css("background", "#0000FF");
    $(".banner").css("color", "#FFF");
    $(".bannerLeft").html('<span class = "firstTicker">SHADETV</span> SHADETV SHADETV SHADETV SHADETV SHADETV');
    $(".bannerRight").html('<span class = "firstTicker">SHADETV</span> SHADETV SHADETV SHADETV SHADETV SHADETV');
  });

  $(".bounceTV").mouseout(function(){
    $(".banner").css("background", "white");
    $(".banner").css("color", "#000");
    $(".bannerRight").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
  });

  $(".bounceInternet").mouseover(function(){
    $(".banner").css("background", "#000");
    $(".banner").css("color", "#00ff00");
    $(".bannerLeft").html('<span class = "firstTicker">INTERNET</span> INTERNET INTERNET INTERNET INTERNET INTERNET');
    $(".bannerRight").html('<span class = "firstTicker">INTERNET</span> INTERNET INTERNET INTERNET INTERNET INTERNET');
  });

  $(".bounceInternet").mouseout(function(){
    $(".banner").css("background", "#fff");
    $(".banner").css("color", "#000");
    $(".bannerRight").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
  });

  $(".bounceProjects").mouseover(function(){
    $(".banner").css("background", "#FFFF00");
    $(".bannerLeft").html('<span class = "firstTicker">PROJECTS</span> PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS');
    $(".bannerRight").html('<span class = "firstTicker">PROJECTS</span> PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS');
  });

  $(".bounceProjects").mouseout(function(){
    $(".banner").css("background", "#fff");
    $(".bannerRight").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADEZINE</span> SHADEZINE SHADEZINE SHADEZINE SHADEZINE SHADEZINE ');
  });
  /******** END MENU ********/


});
