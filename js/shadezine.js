var duration = 20000;
var gap = 200;
var delay = -20000;

$(function () {
  var clicked = false;
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

  /******** GIRLZ ********/
  var randomGirlz=[];
  $(".girlz").each(function(){ randomGirlz.push($(this));});

  for (var i = 0; i < randomGirlz.length; i++) {
    randLocGirlz();
    $(randomGirlz[i]).css('left', randPosX);
    $(randomGirlz[i]).css('top', randPosY);
  }
  /******** END GIRLZ ********/

  /******** BOUNCE ********/
  var bodyWidth =  window.innerWidth;
  var bodyHeight =  window.innerHeight;

  var randPosX;
  var randPosY;

  function randLoc(){
    randPosX = Math.floor((Math.random()*(bodyWidth)));
    randPosY = Math.floor((Math.random()*(bodyHeight)));
  }

  function randLocGirlz(){
    randPosX = Math.floor((Math.random()*(bodyWidth/2)));
    randPosY = Math.floor((Math.random()*(bodyHeight/2)));
  }

  var bouncingDiv=[];
  $(".bounce").each(function(){ bouncingDiv.push($(this));});

  for (var i = 0; i < bouncingDiv.length; i++) {
    randLoc();
    $(bouncingDiv[i]).css('left', randPosX);
    $(bouncingDiv[i]).css('top', randPosY);
    $(bouncingDiv[i]).DVDBounce({
      inc:1
    });
  }
  /******** END BOUNCE ********/

  /******** HOME NAV ********/
  $(".banners").click(function(){
    clicked = false;
    $(".bouncing").css("visibility", "visible");
    $(".st0").css("visibility", "visible");
    $("body").css("background-color", "#fff");
    $(".banner").css("background", "#fff");
  });
  /******** END HOME NAV ********/


  /******** MENU ********/
  $(".bounceAbout").mouseover(function(){
    $(".banner").css("background", "red");
    $(".bannerLeft").html('<span class = "firstTicker">ABOUT</span> ABOUT ABOUT ABOUT ABOUT ABOUT ');
    $(".bannerRight").html('<span class = "firstTicker">ABOUT</span> ABOUT ABOUT ABOUT ABOUT ABOUT ');
    $(".st0").css("fill", "red");
  });

  $(".bounceAbout").mouseout(function(){
    if (!clicked) {
      $(".banner").css("background", "white");
    }
    $(".bannerRight").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
    $(".st0").css("fill", "red");
  });

  $(".bounceTeam").mouseover(function(){
    $(".banner").css("background", "#FF00FF");
    $(".bannerLeft").html('<span class = "firstTicker">TEAM</span> TEAM TEAM TEAM TEAM TEAM ');
    $(".bannerRight").html('<span class = "firstTicker">TEAM</span> TEAM TEAM TEAM TEAM TEAM ');
    $(".st0").css("fill", "#FF00FF");

  });

  $(".bounceTeam").mouseout(function(){
    if (!clicked) {
      $(".banner").css("background", "white");
    }
    $(".bannerRight").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
    $(".st0").css("fill", "red");
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
    $(".bannerRight").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
  });

  $(".bounceTV").mouseover(function(){
    $(".banner").css("background", "#0000FF");
    $(".banner").css("color", "#FFF");
    $(".bannerLeft").html('<span class = "firstTicker">SHADETV</span> SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV');
    $(".bannerRight").html('<span class = "firstTicker">SHADETV</span> SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV');
    $(".st0").css("fill", "#0000FF");
  });

  $(".bounceTV").mouseout(function(){
    $(".banner").css("background", "white");
    $(".banner").css("color", "#000");
    $(".bannerRight").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
    $(".st0").css("fill", "#FF0000");
  });

  $(".bounceInternet").mouseover(function(){
    $(".banner").css("background", "#000");
    $(".banner").css("color", "#00ff00");
    $(".bannerLeft").html('<span class = "firstTicker">INTERNET</span> INTERNET INTERNET INTERNET INTERNET INTERNET');
    $(".bannerRight").html('<span class = "firstTicker">INTERNET</span> INTERNET INTERNET INTERNET INTERNET INTERNET');
    $(".st0").css("fill", "#00FF00");
  });

  $(".bounceInternet").mouseout(function(){
    $(".banner").css("background", "#fff");
    $(".banner").css("color", "#000");
    $(".bannerRight").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
    $(".st0").css("fill", "#ff0000");
  });

  $(".bounceProjects").mouseover(function(){
    $(".banner").css("background", "#FFFF00");
    $(".bannerLeft").html('<span class = "firstTicker">PROJECTS</span> PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS');
    $(".bannerRight").html('<span class = "firstTicker">PROJECTS</span> PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS');
    $(".st0").css("fill", "#ffff00");
  });

  $(".bounceProjects").mouseout(function(){
    $(".banner").css("background", "#fff");
    $(".bannerRight").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
    $(".bannerLeft").html('<span class = "firstTicker">SHADE</span> SHADE SHADE SHADE SHADE SHADE ');
    $(".st0").css("fill", "#ff0000");
  });
  /******** END MENU ********/

  /******** CLICKS ********/
  $(".bounceAbout").click(function(){
    clicked = true;
    $(".bouncing").css("visibility", "hidden");
    $(".st0").css("visibility", "hidden");
    $("body").css("background-color", "#ff0000");
    $(".banner").css("background", "#FF0000");
    // $('.banner').attr('style', 'background: #ff0000 !important');
  });

  $(".bounceTeam").click(function(){
    clicked = true;
    $(".bouncing").css("visibility", "hidden");
    $(".st0").css("visibility", "hidden");
    $("body").css("background-color", "#FF00FF");
    $(".banner").css("background", "##FF00FF");
    // $('.banner').attr('style', 'background: #ff0000 !important');
  });
  /******** CLICKS ********/
});
