$(document).ready(function(){
  $('#pizza').ready(function(){
    $('#pizza').effect('slide',{times:1},1800);
    
    $('#pepper1').hide();
    $('#pepper2').hide();
    $('#pepper3').hide();
    $('#pepper4').hide();
    
    $('#pepperoni1').hide();
    $('#pepperoni2').hide();
    $('#pepperoni3').hide();
    $('#pepperoni4').hide();
    
    $('#mushroom1').hide();
    $('#mushroom2').hide();
    $('#mushroom3').hide();
    $('#mushroom4').hide();
    $('#mushroom5').hide();
      
    
    
   $('#pepperbox').click(function()
    {
      if($('#pepperbox').is(':checked'))
        {
      $('#pepper1').show();
      $('#pepper2').show();
      $('#pepper3').show();
      $('#pepper4').show();
        }
      else
        {
       $('#pepper1').hide();
       $('#pepper2').hide();
       $('#pepper3').hide();
       $('#pepper4').hide();   
            
        }
    });
      
   $('#pepperonibox').click(function()
    {
      if($('#pepperonibox').is(':checked'))
     {
      $('#pepperoni1').show();
      $('#pepperoni2').show();
      $('#pepperoni3').show();
      $('#pepperoni4').show();
     }
      else
        {
          $('#pepperoni1').hide();
      		$('#pepperoni2').hide();
      		$('#pepperoni3').hide();
      		$('#pepperoni4').hide();  
          
        }
     
    }); 
     
   $('#mushbox').click(function()
    {
		if ($('#mushbox').is(':checked'))
    	{
      		$('#mushroom1').show();
      		$('#mushroom2').show();
      		$('#mushroom3').show();
      		$('#mushroom4').show();
      		$('#mushroom5').show();
      	}
      	else
      	{
      		$('#mushroom1').hide();
      		$('#mushroom2').hide();
      		$('#mushroom3').hide();
      		$('#mushroom4').hide();
      		$('#mushroom5').hide();

      	}
    });
    
    $('#cheesebox').click(function()
    {
      if( $('#cheesebox').is(':checked'))
      {
         $('#pizza').css("background-color","#F5CB25");
      }
      else
      {
        
          $('#pizza').css("background-color","#F00C17");
      }
    });

    
    
    
  });
                    
});
