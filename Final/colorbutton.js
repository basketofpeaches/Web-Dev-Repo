$(document).ready(function() {
	//click the buttons once to activate the effect
	//click the buttonns twice to undo the effect

	$("#button1").click(function() {
		//show cat
		$("#first").fadeTo("slow", 1);
		$("#second").fadeTo("slow", 1);
		$("#third").fadeTo("slow", 1);
                $(".other").fadeTo("fast", 0);
                $(".dog").fadeTo("fast", 0);
	});

	$("#button1").dblclick(function() {
		//show all pets
		$("#first").fadeTo("fast", 1);
		$("#second").fadeTo("fast", 1);
		$("#third").fadeTo("fast", 1);
                $(".other").fadeTo("fast", 1);
                $(".dog").fadeTo("fast", 1);
	});

	$("#button2").click(function() {
		//hide all warm colors
		$(".cat").fadeTo("fast", 0);
                $(".other").fadeTo("fast", 0);
	});

	$("#button2").dblclick(function() {
		//show dogs
		$(".cat").fadeTo("fast", 1);
                $(".other").fadeTo("fast", 1);
                
	});

	$("#button3").click(function() {
		//show other animals
		$(".cat").fadeTo("fast", 0);
                $(".dog").fadeTo("fast", 0);
	});

	$("#button3").dblclick(function() {
		//show all cool colors
		$(".cat").fadeTo("fast", 1);
                $(".dog").fadeTo("fast", 1);
	});


	//slide down/up menu options
	$(".slider").click(function() {
		$(".container").slideToggle("slow");
	});

	//animate box on pets profile once button clicked
	$(".animator").click(function() {
		var box = $(".box");
		box.animate({width: '10vw'}, "slow");
		
	});

        //animate box once button clicked
	$(".animator").dblclick(function() {
		var box = $(".box");
                box.animate({width: '100vw'}, "slow");
		
	});

});


//notes:
//classes use . (multiple elements)
//ids use # (one element)



	//leaving a page
	// $("something").mousedown(function() {
	// 	//message that pops up when you leave a page
	// 	alert("You're now leaving the main page.");
	// });