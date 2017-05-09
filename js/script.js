function castParallax() {
  window.addEventListener("scroll", function(event){

  var top = this.pageYOffset;

  var hero = document.querySelector('.hero');
  var speed = 30, yPos = (top * speed / 100);

  if (top >=0 && top < 300){
    layer.setAttribute("style", "height: " + height + "px");
  } else if (top >= 300){
    layer.setAttribute("style", "height: 300px");
  }
  });


}

// function dispelParallax() {
//   $("#nonparallax").css('display','block');
//   $("#parallax").css('display','none');
// }

// function castSmoothScroll() {
//   $.srSmoothscroll({
//     step: 80,
//     speed: 300,
//     ease: 'linear'
//   });
// }



function startSite() {

  var platform = navigator.platform.toLowerCase();
  var userAgent = navigator.userAgent.toLowerCase();

  if ( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 ){

    console.log('Parralax feature is not supported on iDevices');

  } else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1){

    castParallax();
    // if ($.browser.webkit) {
    //   castSmoothScroll();
    // }
  } else {

    castParallax();

  }

}

document.body.onload = startSite();