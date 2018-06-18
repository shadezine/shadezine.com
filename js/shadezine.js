var duration = 20000;
var gap = 200;
var delay = -20000;

var clickedAbout = false;
var clickedInternet = false;
var clickedTeam = false;
var clickedTV = false;
var clickedShop = false;

$(function () {

  if($(window).width() < $(window).height()) {
    document.getElementById("changeAbout").innerHTML ="Shade is a concept. An art house. A name cultivated out of a friendship between two creative women of color who saw a void online and in the art world. Shade is currently run out of the Bay Area. Our space is ever changing and uncontainable. <br> <br> Azha Ayanna Luckman is a multidisciplinary artist, photographer, and creative director of SHADE. Luckman reclaims the gaze that has routinely catered to white or male narratives. She cares about representation of people of color in photography, media, and all visual arts + histories. Centered in these realms, her work creates space for black, queer youth like herself. <br> <br> Apryl Fuentes is an editorial writer, copy editor, and cofounder of Shade. Her work includes creative direction, content curation, video direction and visual storytelling. Through a myriad of mediums, Fuentes documents the ever changing world around her in proximity to the identities and spaces she encompasses.";

    if (clickedAbout = false) {
      document.ontouchmove = function(e){ e.preventDefault(); }
    }
  }

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

  var bouncingTeamDiv=[];
  $(".bouncingTeam").each(function(){ bouncingTeamDiv.push($(this));});
  for (var i = 0; i < bouncingTeamDiv.length; i++) {
    randLocGirlz();
    $(bouncingTeamDiv[i]).css('left', randPosX);
    $(bouncingTeamDiv[i]).css('top', randPosY);
    $(bouncingTeamDiv[i]).DVDBounce({
      inc:0
    });
  }

    /******** GIRLZ ********/
    var randomGirlz=[];
    $(".girlz").each(function(){ randomGirlz.push($(this));});
    for (var i = 0; i < randomGirlz.length; i++) {
      randLocGirlz();
      $(randomGirlz[i]).css('left', randPosX);
      $(randomGirlz[i]).css('top', randPosY);
    }
    /******** END GIRLZ ********/
  /******** END BOUNCE ********/

  /******** HOME NAV ********/
  $(".banners").click(function(){
    clickedAbout = false;
    clickedInternet = false;
    clickedTeam = false;
    clickedTV = false;
    clickedShop = false;
    $(".bouncing").css("visibility", "visible");
    $(".st0").css("visibility", "visible");
    $("body").css("background-color", "#fff");
    $(".banner").css("background", "#fff");
    $(".banner").css("color", "#000");
    $(".aboutContainer").css("visibility", "hidden");
    $(".internetContainer").css("visibility", "hidden");
    $(".content").css("visibility", "hidden");
    $(".teamContainer").css("visibility", "hidden");
    $(".tvContainer").css("visibility", "hidden");
    $(".shopContainer").css("visibility", "hidden");
    $("iframe").css("visibility", "hidden");
    $("#backgroundTV").attr('src', 'images/whiteNoise.gif');
    $(".apryl").css("visibility", "visible");
    $(".azha").css("visibility", "visible");
    $(".bannerRight").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE');
    $(".bannerLeft").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE ');
    $(".TVCopy").css("visibility", "hidden");
    $("#backgroundTV").css("visibility", "hidden");

  });
  /******** END HOME NAV ********/


  /******** MENU ********/
  $(".bounceAbout").mouseover(function(){
    $(".banner").css("background", "red");
    $(".bannerLeft").html('<span class = "firstTicker">ABOUT</span> ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ');
    $(".bannerRight").html('<span class = "firstTicker">ABOUT</span> ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ');
    $(".st0").css("fill", "red");
  });

  $(".bounceAbout").mouseout(function(){
    if (!clickedAbout) {
      $(".banner").css("background", "white");
      $(".bannerRight").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE');
      $(".bannerLeft").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE ');
    }
    $(".st0").css("fill", "red");
  });

  $(".bounceTeam").mouseover(function(){
    $(".banner").css("background", "#FF00FF");
    $(".bannerLeft").html('<span class = "firstTicker">TEAM</span> TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM ');
    $(".bannerRight").html('<span class = "firstTicker">TEAM</span> TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM ');
    $(".st0").css("fill", "#FF00FF");

  });

  $(".bounceTeam").mouseout(function(){
    if (!clickedTeam) {
      $(".banner").css("background", "white");
      $(".bannerRight").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE');
      $(".bannerLeft").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE ');
    }
    $(".st0").css("fill", "red");
  });

  $(".bounceShop").mouseover(function(){
    $(".banner").css("background", "#FF0000");
    $(".banner").css("color", "#000");
    $(".bannerLeft").html('<span class = "firstTicker">SHOP</span> SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP');
    $(".bannerRight").html('<span class = "firstTicker">SHOP</span> SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP');
  });

  $(".bounceShop").mouseout(function(){
    if (!clickedShop) {
      $(".banner").css("background", "white");
      $(".banner").css("color", "#000");
      $(".bannerRight").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE');
      $(".bannerLeft").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE ');
    }
    $(".st0").css("fill", "#FF0000");
  });

  $(".bounceTV").mouseover(function(){
    $(".banner").css("background", "#0000FF");
    $(".banner").css("color", "#FFF");
    $(".bannerLeft").html('<span class = "firstTicker">SHADETV</span> SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV');
    $(".bannerRight").html('<span class = "firstTicker">SHADETV</span> SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV');
    $(".st0").css("fill", "#0000FF");
  });

  $(".bounceTV").mouseout(function(){
    if (!clickedTV) {
      $(".banner").css("background", "white");
      $(".banner").css("color", "#000");
      $(".bannerRight").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE ');
      $(".bannerLeft").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE ');
    }
    $(".st0").css("fill", "#FF0000");
  });

  $(".bounceInternet").mouseover(function(){
    $(".banner").css("background", "#000");
    $(".banner").css("color", "#00ff00");
    $(".bannerLeft").html('<span class = "firstTicker">INTERNET</span> INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET');
    $(".bannerRight").html('<span class = "firstTicker">INTERNET</span> INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET');
    $(".st0").css("fill", "#00FF00");
  });

  $(".bounceInternet").mouseout(function(){
    if (!clickedInternet) {
      $(".banner").css("background", "#fff");
      $(".banner").css("color", "#000");
      $(".bannerRight").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE');
      $(".bannerLeft").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE ');
    }
    $(".st0").css("fill", "#ff0000");
  });

  $(".bounceProjects").mouseover(function(){
    $(".banner").css("background", "#FFFF00");
    $(".bannerLeft").html('<span class = "firstTicker">PROJECTS</span>  PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS');
    $(".bannerRight").html('<span class = "firstTicker">PROJECTS</span> PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS');
    $(".st0").css("fill", "#ffff00");
  });

  $(".bounceProjects").mouseout(function(){
    $(".banner").css("background", "#fff");
    $(".bannerRight").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE');
    $(".bannerLeft").html('<span class = "firstTicker">SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE SHADE ');
    $(".st0").css("fill", "#ff0000");
  });
  /******** END MENU ********/

  /******** CLICKS ********/
    /******** ABOUT ********/
    $(".bounceAbout").click(function(){
      clickedAbout = true;
      $(".bouncing").css("visibility", "hidden");
      $(".st0").css("visibility", "hidden");
      $("body").css("background-color", "#ff0000");
      $(".banner").css("background", "#FF0000");
      $(".aboutContainer").css("visibility", "visible");
      $(".bannerLeft").html('<span class = "firstTicker">ABOUT</span> ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ');
      $(".bannerRight").html('<span class = "firstTicker">ABOUT</span> ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ');
      // $('.banner').attr('style', 'background: #ff0000 !important');
    });

    $(".azha").mouseover(function(){
      $(".aboutShade").html('Azha Ayanna Luckman is a multidisciplinary artist, photographer, and creative director of SHADE. Luckman reclaims the gaze that has routinely catered to white or male narratives. She cares about representation of people of color in photography, media, and all visual arts + histories. Centered in these realms, her work creates space for black, queer youth like herself.');
      if (clickedAbout) {
        $(".apryl").css("visibility", "hidden");
      }
    });

    $(".azha").mouseout(function(){
      $(".aboutShade").html('Shade is a concept. An art house. A name cultivated out of a friendship between two creative women of color who saw avoid online and in the art world. Shade is currently run out of the Bay Area. Our space is ever changing and uncontainable.<br> <br> <a class = "email" href="mailto:contactshadezine@gmail.com?subject=feedback">contactshadezine@gmail.com</a>');
      if (clickedAbout) {
        $(".apryl").css("visibility", "visible");
      }
    });

    $(".apryl").mouseover(function(){
      $(".aboutShade").html('Apryl Fuentes is an editorial writer, copy editor, and cofounder of Shade. Her work includes creative direction, content curation, video direction and visual storytelling. Through a myriad of mediums, Fuentes documents the ever changing world around her in proximity to the identities and spaces she encompasses.');
      if (clickedAbout) {
        $(".azha").css("visibility", "hidden");
      }
    });

    $(".apryl").mouseout(function(){
      $(".aboutShade").html('Shade is a concept. An art house. A name cultivated out of a friendship between two creative women of color who saw avoid online and in the art world. Shade is currently run out of the Bay Area. Our space is ever changing and uncontainable.<br> <br> <a class = "email" href="mailto:contactshadezine@gmail.com?subject=feedback">contactshadezine@gmail.com</a>');
      if (clickedAbout) {
        $(".azha").css("visibility", "visible");
      }
    });
    /******** END ABOUT ********/

    /******** INTERNET *******/
    $(".bounceInternet").click(function(){
      clickedInternet = true;
      $(".internetContainer").css("visibility", "visible");
      $(".bouncing").css("visibility", "hidden");
      $(".st0").css("visibility", "hidden");
      $("body").css("background-color", "#000");
      $(".banner").css("background", "#000");
      $(".apryl").css("visibility", "hidden");
      $(".azha").css("visibility", "hidden");
      $(".bannerLeft").html('<span class = "firstTicker">INTERNET</span> INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET');
      $(".bannerRight").html('<span class = "firstTicker">INTERNET</span> INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET INTERNET');
    });
    /******** END INTERNET ********/

    /******** TEAM ********/
    $(".bounceTeam").click(function(){
      clickedTeam = true;
      $(".content").css("visibility", "visible");
      $(".teamContainer").css("visibility", "visible");
      $(".bouncing").css("visibility", "hidden");
      $(".st0").css("visibility", "hidden");
      $("body").css("background-color", "#FF00FF");
      $(".banner").css("background", "#FF00FF");
      $(".apryl").css("visibility", "hidden");
      $(".azha").css("visibility", "hidden");
      $(".bannerLeft").html('<span class = "firstTicker">TEAM</span> TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM ');
      $(".bannerRight").html('<span class = "firstTicker">TEAM</span> TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM TEAM ');
    });

    // $(".bounceApryl").click(function(){
    //   $(".bounceApryl").css("z-index", "3");
    //   $(".bounceAzha").css("z-index", "2");
    //   $(".bounceRewina").css("z-index", "2");
    //   $(".bounceBritney").css("z-index", "2");
    //   $(".bouncing").css("z-index", "1");
    // });
    //
    // $(".bounceAzha").click(function(){
    //   $(".bounceAzha").css("z-index", "3");
    //   $(".bounceApryl").css("z-index", "2");
    //   $(".bounceRewina").css("z-index", "2");
    //   $(".bounceBritney").css("z-index", "2");
    //   $(".bouncing").css("z-index", "1");
    // });
    //
    // $(".bounceRewina").click(function(){
    //   $(".bounceAzha").css("z-index", "2");
    //   $(".bounceApryl").css("z-index", "2");
    //   $(".bounceRewina").css("z-index", "3");
    //   $(".bounceBritney").css("z-index", "2");
    //   $(".bouncing").css("z-index", "1");
    // });
    //
    // $(".bounceBritney").click(function(){
    //   $(".bounceAzha").css("z-index", "2");
    //   $(".bounceApryl").css("z-index", "2");
    //   $(".bounceRewina").css("z-index", "2");
    //   $(".bounceBritney").css("z-index", "3");
    //   $(".bouncing").css("z-index", "1");
    // });

    $(".bounceApryl").mouseover(function(){
      $(".contentApryl").css("visibility", "hidden");
      $(".contentApryl2").css("visibility", "visible");
      $(".bounceApryl").css("z-index", "3");
      $(".bounceAzha").css("z-index", "2");
      $(".bounceRewina").css("z-index", "2");
      $(".bounceBritney").css("z-index", "2");
      $(".bouncing").css("z-index", "1");
    });

    $(".bounceApryl").mouseout(function(){
      $(".contentApryl").css("visibility", "visible");
      $(".contentApryl2").css("visibility", "hidden");
    });

    $(".bounceAzha").mouseover(function(){
      $(".bounceAzha").css("z-index", "3");
      $(".bounceApryl").css("z-index", "2");
      $(".bounceRewina").css("z-index", "2");
      $(".bounceBritney").css("z-index", "2");
      $(".bouncing").css("z-index", "1");
      $(".contentAzha").css("visibility", "hidden");
      $(".contentAzha2").css("visibility", "visible");
    });

    $(".bounceAzha").mouseout(function(){
      $(".contentAzha").css("visibility", "visible");
      $(".contentAzha2").css("visibility", "hidden");
    });

    $(".bounceRewina").mouseover(function(){
      $(".contentRewina").css("visibility", "hidden");
      $(".contentRewina2").css("visibility", "visible");
      $(".bounceAzha").css("z-index", "2");
      $(".bounceApryl").css("z-index", "2");
      $(".bounceRewina").css("z-index", "3");
      $(".bounceBritney").css("z-index", "2");
      $(".bouncing").css("z-index", "1");
    });

    $(".bounceRewina").mouseout(function(){
      $(".contentRewina").css("visibility", "visible");
      $(".contentRewina2").css("visibility", "hidden");
    });

    $(".bounceBritney").mouseover(function(){
      $(".bounceAzha").css("z-index", "2");
      $(".bounceApryl").css("z-index", "2");
      $(".bounceRewina").css("z-index", "2");
      $(".bounceBritney").css("z-index", "3");
      $(".bouncing").css("z-index", "1");
      $(".contentBritney").css("visibility", "hidden");
      $(".contentBritney2").css("visibility", "visible");
    });

    $(".bounceBritney").mouseout(function(){
      $(".contentBritney").css("visibility", "visible");
      $(".contentBritney2").css("visibility", "hidden");
    });


    /******** END TEAM ********/

    /******** TV ********/
    $(".bounceTV").click(function(){
      clickedTV = true;
      $(".tvContainer").css("visibility", "visible");
      $(".bouncing").css("visibility", "hidden");
      $(".st0").css("visibility", "hidden");
      $("body").css("background-color", "#0000FF");
      $(".banner").css("background", "#0000FF");
      $(".apryl").css("visibility", "hidden");
      $(".azha").css("visibility", "hidden");
      $(".bannerLeft").html('<span class = "firstTicker">SHADETV</span> SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV');
      $(".bannerRight").html('<span class = "firstTicker">SHADETV</span> SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV SHADETV');
      if($(window).width() < $(window).height()) {
        $(".iframeMobile").css("visibility", "visible");
        $(".TVCopy").css("visibility", "hidden");
      }
      $("#backgroundTV").css("visibility", "visible");

    });

    $(".channel1").click(function(){
      $(".TVCopy").css("visibility", "hidden");
      $("iframe").css("visibility", "visible");
      $("#backgroundTV").attr('src', 'images/bg.png');
      $("iframe").attr('src', 'https://www.youtube.com/embed/w8x7tPK3T1c');
      $("#backgroundTV").css("visibility", "visible");

    });

    $(".channel2").click(function(){
      $(".TVCopy").css("visibility", "hidden");
      $("iframe").css("visibility", "visible");
      $("#backgroundTV").attr('src', 'images/bg.png');
      $("iframe").attr('src', 'https://www.youtube.com/embed/NseWbkSU2go');
      $("#backgroundTV").css("visibility", "visible");
    });

    $(".channel3").click(function(){
      $(".TVCopy").css("visibility", "visible");
      $("iframe").css("visibility", "hidden");
      $("#backgroundTV").css("visibility", "hidden");
    });
    /******** END TV ********/

    /******** SHOP ********/
    $(".bounceShop").click(function(){
      clickedShop = true;
      $(".bouncing").css("visibility", "hidden");
      $(".st0").css("visibility", "hidden");
      $("body").css("background-color", "#fff");
      $(".banner").css("background", "#ff0000");
      $(".shopContainer").css("visibility", "visible");
      $(".apryl").css("visibility", "hidden");
      $(".azha").css("visibility", "hidden");
      $(".bannerLeft").html('<span class = "firstTicker">SHOP</span> SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP');
      $(".bannerRight").html('<span class = "firstTicker">SHOP</span> SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP');
    });
    /******** END SHOP ********/

  /******** CLICKS ********/
});
