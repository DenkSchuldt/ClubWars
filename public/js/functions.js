
function show(){
	$("#clubwars-content").hide();
	var removeContent = setTimeout(function(){
		newPage();
		clearTimeout(this);
	},20000);
	$("#skip").click(function(){
		newPage();
		clearTimeout(removeContent);
	});
}

function newPage(){
	$("#starwars-content").fadeOut('slow', function(){
		$("#starwars-content").remove();
		$("#clubwars-content").fadeIn('slow');
		$("body").css("overflow-y","visible");		
	});
}

window.onload = show();