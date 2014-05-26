$(document).ready(function(){

  var clicks = 0;
  var inGame = false;
  $( "#clickCounter").hide();
  $( "#button").hide();
  $("#button").click( counter ); 
   $( "#TryAgain").hide();
  
  
  $('#start').click( startGame );  
  
  
  
  
  function startGame()
  {
     $('h1').fadeOut('fast');
    $( "#TryAgain").hide();

    $('h3').hide();
    SetUpStartButton();
    
    $( "#start").unbind( "click" ); 
    $("#start").click( counter ); 
     
    $("#clickCounter").show();
    $('#clickCounter').css("margin-top", "15%");
    $('#clickCounter').css("left", "43%");
    $("p#clickCounter").text(clicks);
    
    setTimeout( resetGame , 15000 );
    inGame = true;
  }
  
  // Set up the css for the start button
  function SetUpStartButton()
  {
     $('#start').html("");
     $('#start').css("background-color", "black");
     $('#start').css("height", "100px");
     $('#start').css("width", "180px");
     $('#start').css("left", "42%"); 
     $('#start').css("margin-top", "5%"); 
    
  }
  
  //this function counts the clicks
  function counter()
  {    
    if ( inGame === true)
    {
     clicks++; 
     $("p#clickCounter").text(clicks);
    }
  }
 
  //4th function = all this will happen after 5 secs  
  function resetGame()
  {
    
       $( "#TryAgain").show();

    $('#start').html("Start");
    $('#start').css("font-size", "300%");
    $('#start').css("margin-top", "25%");
    $('#start').css("background-color", "purple");
    
    $('#clickCounter').css("margin-top", "4%");
    $('#clickCounter').css("margin-left", "3%");
   
    $( "#start").unbind( "click" );
    $("#start").click( startGame ); 
    
    
   $('#button').hide();
   clicks = 0;
   inGame = false;
    
  }
  
  
  
  
});
