
function show(){
	$("#clubwars-content").hide();
	var removeContent = setTimeout(function(){
		$("#starwars-content").fadeOut('slow', function(){
			$("#starwars-content").remove();
			$("#participantes").hide();
			$("#clubwars-content").show('slow');
		});
		clearTimeout(this);
	},20000);
}

window.onload = show();