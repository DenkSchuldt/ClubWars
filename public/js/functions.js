
function show(){
	var removeContent = setTimeout(function(){
		$("#starwars-content").fadeOut('slow', function(){
			$("#starwars-content").remove();
			$("#clubwars-content").show('slow');
		});
		clearTimeout(this);
	},20000);
}

window.onload = show();