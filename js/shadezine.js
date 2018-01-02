var duration = 20000;
var gap = 200;
var delay = -20000;

$(function () {
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

    // $('.marqueeLeft').marquee({
    //     duration: 1000
    // });
});
