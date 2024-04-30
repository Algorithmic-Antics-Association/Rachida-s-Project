$(document).ready(function(){
  $("a").on('click', function(event) {
    console.log("Anchor link clicked");
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
        $("#links a").css("margin","-20px 20px -20px 20px");
        $("#header").css("border-bottom","medium solid #461778");
    }else{
        $("#middle").css("background-size","100% auto"); 
        $("#links a").css("margin","1px 20px -10px 20px");
        $("#header").css("border-bottom","none");
        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);

