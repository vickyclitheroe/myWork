$(document).ready(function() {
  
  var answers = [ "It is certain",
"It is decidedly so",
 "Without a doubt",
 "Yes definitely",
 "You may rely on it",
 "As I see it, yes",
 "Most likely",
 "Outlook good",
 "Yes",
 "Signs point to yes",
 "Reply hazy try again",
 "Ask again later",
 "Better not tell you now",
 "Cannot predict now",
 "Concentrate and ask again",
 "Don't count on it",
 "My reply is no",
"My sources say no",
 "Outlook not so good",
 "Very doubtful"];
    
    


$('#button').click(function(){
  
  $('#ball').effect('shake');
  var question = $('#textBox').val();
  
  if ( question.length <= 2)
  {
     showTextInTriangle( "You need to enter a real question ");
  }
  else
  {
     showAnswer(); 
  }

});



function showAnswer()
{
    var randomNumber = Math.floor(Math.random()*answers.length)
   
    var answer = answers[randomNumber];
   
    showTextInTriangle( answer);
}
 
function showTextInTriangle( message )
{
  $("p#Message").text(message);
  $("#Message").hide();
  $("#Message").fadeIn(1500);
  
}

$("#form").submit(function(e) {
    e.preventDefault();
});

});
    
