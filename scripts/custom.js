//------------------------------
// HIDE VERIFICATION
//------------------------------

$("#mayor").click(function() {
	$(".validator").addClass("slideUp");
	$(".logo").removeClass("hide");
	$(".social").removeClass("hide");
});

//------------------------------
// ADD MOUSEWHEEL
//------------------------------

$('main').mousewheel(function(e, delta) {
  this.scrollLeft -= (delta * 40);
  e.preventDefault();
});


//------------------------------
// RESIZE SECTION FOR RESPONSIVE (MANTEIN ASPECT RATIO)
//------------------------------
var aspectratio = 1920 / 1080;
var windowwidth = $(window).width();
var windowheight = $(window).height();
var sectionwidth = windowheight * aspectratio;
//alert(sectionwidth);

/*$( window ).resize(function() {*/
if (sectionwidth > windowwidth) {
    $("section").css("width", sectionwidth)
}
/*});*/


//------------------------------
// BOTTLE TRANSPARENCY
//------------------------------
$(document).ready(function(){
	$(".family").mouseenter(function(){
		$(".family").addClass("transparent");
		$("#textofamilia").css("color", "#E02127");
	})
	$(".family").mouseleave(function(){
		$(".family").removeClass("transparent");
		$("#textofamilia").css("color", "transparent");
	})
	$(".family").mouseenter(function(event) {
		$(event.target).removeClass("transparent");
		$(event.target).siblings().removeClass("transparent");
		var parent = event.target.parentElement;
		var parentid = parent.id
		switch (parentid) {
			case "269": $("#textofamilia").html("soy una lata chica");
				break;
			case "355": $("#textofamilia").html("soy una lata no tan chica");
				break;
			case "473": $("#textofamilia").html("soy una lata mas grande");
				break;
			case "ln": $("#textofamilia").html("Una brahmita entre semana no se le niega a nadie");
				break;
			case "1l": $("#textofamilia").html("Soy una botella de litro");
			 break;
			case "12l": $("#textofamilia").html("Soy una botella mas grande");
			 break;
			case "sixpack": $("#textofamilia").html("Soy un Sixpack");
		}
	})
});

//------------------------------
// MENU
//------------------------------

// CERRAR
$(".close").click(function() {
  $(".menu").addClass("slideRight");
  $(".menu").removeClass("slideLeft");
});

// ABRIR
$(".title_nosotros,title_malta,title_familia").click(function() {
  $(".menu").addClass("slideLeft");
});

// CERRAR EN LINK
$(".menu ul li").click(function() {
	$(".menu").addClass("slideRight");
    $(".menu").removeClass("slideLeft");
});


//------------------------------
// SECTION POSITIONS
//------------------------------

var sectionwidth = $("section").width();
var nosotros = sectionwidth * 0 ;
var tapa = sectionwidth * 1;
var ingredientes = sectionwidth * 2;
var chopp = sectionwidth * 4;
var malta = sectionwidth * 5;
var familia = sectionwidth * 6 ;
var botella = sectionwidth * 7;


//------------------------------
// MENU SCROLL
//------------------------------

$("#nosotros").click(function() {
  $("main").animate({
  	scrollLeft: nosotros
  });
});

$("#malta").click(function() {
	$("main").animate({
  	scrollLeft: malta
  });
});

$("#familia").click(function() {
  $("main").animate({
  	scrollLeft: familia
  });
});


//------------------------------
// MENU OPACITY
//------------------------------
$(document).ready(function(){
$(".menu ul li").hover(function(){
	$(".menu ul li").not(event.target).animate({
		opacity: 0.5,
	},1,
	function(){}
)

},
function(){
	$(".menu ul li").animate({
		opacity:1,
	},10,
function(){})
})

});


//------------------------------
// MENU CHANGE TITLE
//------------------------------
$(document).ready(function(){
	var hamburger = $(".hamburger span")
	 $("main").scroll(function(){
		 var scrolling = $(this).scrollLeft();
		 if (scrolling >= malta && scrolling < familia) {
			 $(".hamburger span").removeClass();
			 $(".hamburger span").addClass("title_malta");
		 }
		 else if (scrolling >= familia && scrolling < botella) {
			 $(".hamburger span").removeClass();
			 $(".hamburger span").addClass("title_familia");
		 }
		 else if (scrolling < malta){
			 $(".hamburger span").removeClass();
			 $(".hamburger span").addClass("title_nosotros");
		 }
		 else if (scrolling >= botella) {
			 $(".hamburger span").removeClass();
			 $(".hamburger span").addClass("title_none");

		 }
	})
	$("main").scroll(function(){
		var scrolling2 = $(this).scrollLeft();
		if (scrolling2 >= nosotros && scrolling2 < tapa) {
			$(".hamburger span").removeClass("title_white");
			$(".hamburger span").addClass("title_red");			
		}
		else if (scrolling2 >= tapa && scrolling2 < ingredientes){
			$(".hamburger span").removeClass("title_red");
			$(".hamburger span").addClass("title_white");
			$(".nosotros_tapa .invisible").addClass("showRight");
		}
		else if (scrolling2 >= ingredientes && scrolling2 < chopp) {
			$(".hamburger span").removeClass("title_white");
			$(".hamburger span").addClass("title_red");
		}
		else if (scrolling2 >= chopp && scrolling2 < familia)	{
			$(".hamburger span").removeClass("title_red");
			$(".hamburger span").addClass("title_white");
		}
		else if (scrolling2 >= familia && scrolling2 < botella) {
			$(".hamburger span").removeClass("title_white");
			$(".hamburger span").addClass("title_red");
		}
		else if (scrolling2 >= botella) {
			$(".hamburger span").removeClass("title_red");
		}
	})
		$("main").scroll(function(){
			var scrolling2 = $(this).scrollLeft();
			var social_difference = ($(".social ul").width()) + 35;


		 if (scrolling2 >= social_difference && scrolling2 < tapa) {
			$(".social ul li i").removeClass("red");
			$(".social ul li i").addClass("white");
		}

		else if (scrolling2 >= tapa + social_difference && scrolling2 < chopp){
			$(".social ul li i").removeClass("white");
			$(".social ul li i").addClass("red");
		}
		else if (scrolling2 >= chopp + social_difference && scrolling2 < familia){
			$(".social ul li i").removeClass("red");
			$(".social ul li i").addClass("white");
		}

		else if (scrolling2 <= nosotros ){
			$(".social ul li i").removeClass("white");
			$(".social ul li i").addClass("red");
		}
	})
})
