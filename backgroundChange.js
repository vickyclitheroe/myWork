$(document).ready(function(){
	$( "#button").hover(function() {
  $( this ).effect( "highlight" );
});

	$("#button").click( function(){
	
		var colors = ["#CCCCCC","#333333","#990099","#FFFF00","#FF00FF", "#00FFFF", "#00FF00", "#FF0000","#CC99FF","#00CCFF", "#00CC00", "#FF3399", "#FF3300", "#FFFF00", "#FF0000", "#00FFFF", "#FF0066","#66FF99","#FF3399","#6600CC","#3333CC","#FFFF99","#CC3300","#339966","#FF99CC", "#800000", "#993399", "#CCFF33"
 ];                
  		var rand = Math.floor(Math.random()*colors.length); 

  		$('body').css("background-color", colors[rand]);
  		$('#button').css("color", colors[rand] );

    });
});
