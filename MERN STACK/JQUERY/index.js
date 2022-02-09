//Manipulating Elements with JQUERY
$("button").addClass("css-1");

//Manipulating CSS with JQUERY
$("h4").addClass("css-1");
$("h2").css("font-family","fantasy");
$("h6").text("")

//Manipulating Text with JQUERY
//$("button").text("Click MEEEEEE");
$("button").html("<em>Press ME!</em>");

//Manipulating attributes with JQUERY
$("img").attr("src","tom1.png");

//EventListeners
$("h5").click(function(){
  $("h5").css("color","purple");
})

$(document).keydown(function(event){
  $("h1").text(event.key);
})

$("h2").on("mouseover",function(){
  $("h2").text("HIma Rani Mathews");
})

// adding tags
$("h1").before("<button>New</button>");
$("h1").after("<button>New after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");


//Animation with JQUERY
$("button").click(function(){
  $("img").toggle();
    $("h1").slideToggle();
    $("h3").animate({opacity:0.4});
})
