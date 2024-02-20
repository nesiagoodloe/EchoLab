$(document).ready(function() {
  
  //$("img").draggable()  //alert( //$("img").position().left ); 

  $("#AVATAR").draggable({
    stop: function() {
      // Show an alert when the dragging stops
      alert("Avatar always wins!");
    }
  });
  
    $("#SRT").draggable(
      {
    stop: function() {
      // Show an alert when the dragging stops
      alert("SRT SCAT = top tier");
    }
  });
 
  
  //TODO: if posiiton is on far right side then tell user they won
  
    
  });