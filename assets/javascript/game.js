clear();
var myWin = 0;
var pcWin = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  


function clear(){

    $("#pcNumber").empty();
    $("#myScore").html(0);
    counter = 0;
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#pcNumber").html(targetNumber);
      
    var numberOptions =[];

    for (var i = 0; i < 12; i++){
        numberOptions[i] = i+1;
    }

    var a, b, i;
    for (i = numberOptions.length; i; i--) {
        a = Math.floor(Math.random() * i);
        b = numberOptions[i - 1];
        numberOptions[i - 1] = numberOptions[a];
        numberOptions[a] = b;
    }

 

    var imageCrystal = $("#blue");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", numberOptions[0]);

    imageCrystal = $("#yellow");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", numberOptions[1]);

    imageCrystal = $("#pink");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", numberOptions[2]);
    
    imageCrystal = $("#green");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", numberOptions[3]);

}


  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $("#myScore").html(counter);


    if (counter == targetNumber) {
      myWin++;
      $("#wins").html(myWin);
      alert("You Have Won!! You Scored "+counter);
      clear();

    }

    else if (counter >= targetNumber) {
      pcWin++;
      $("#losses").html(pcWin);
      alert("You loose!! You Scored "+counter);
      clear();

    }

  });

  $("button").on("click", function(){
    
    $("#mainMenu").toggle();

  })
