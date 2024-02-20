$(document).ready(function(){
    console.log("ready!");

    // Hide buttons initially
    $("#likeTupac, #dontKnowTupac").hide();

    // Button click handler for the "NEXT" button
    $("#nextButton").click(function(){
      // Show the additional buttons
      $("#likeTupac, #dontKnowTupac").show();
    });

    // Button click handler for "Click here if you like Tupac"
    $("#likeTupac").click(function(){
      let name = $("#fname").val();
      alert(name + ", R.I.P a legend");
    });

    // Button click handler for "Click here if you don't know who Tupac is"
    $("#dontKnowTupac").click(function(){
      let name = $("#fname").val();
      alert(name + ", learn your Tupac");
    });
  });