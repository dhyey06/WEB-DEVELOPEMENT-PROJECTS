$(document).ready(function(){
    $("#home").click(function(){
      $("#home").hide(1000);
      $("#news").show(1000);
      $("img").slideDown(2000);
      $(".news-content").hide(2000);
      $(".about").show(1000);
      $(".contact").show(1000);

    });
  });


$(document).ready(function(){
    $("#news").click(function(){
      $("#news").hide(1000);
      $("#home").show(1000);
      $("img").slideUp(2000);
      $(".news-content").show(2000);
      $(".about").show(1000);
      $(".contact").show(1000);
      $("img").hide(1000);
    });
  });


$(document).ready(function(){
    $(".contact").click(function(){
      $(".contact").hide(1000);
      $(".about").show(1000);
      $(".news").show(1000);
      $(".home").show(1000);
      $("img").slideUp(1000);
      $("news-content").slideUp(1000);

    });
  });


$(document).ready(function(){
    $(".about").click(function(){
      $(".about").hide(1000);
      $(".contact").show(1000);
      $(".news").show(1000);
      $(".home").show(1000);
      $("img").slideUp(1000);
      $("news-content").slideUp(1000);
    });
  });