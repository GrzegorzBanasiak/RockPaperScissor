function losuj(min, max) {
	var argc = arguments.length;
	    if (argc === 0) {
	        min = 0;
	        max = 2147483647;    } else if (argc === 1) {
	        throw new Error('Funkcja wymaga podania obu argumentów min i max');
	    }
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drukowanie(liczba){
 
 if(liczba == "0"){
  	$(".bot").html('<i class="fa fa-hand-rock-o fa-5x" aria-hidden="true"></i>');
  } else if (liczba == "1"){
  	$(".bot").html('<i class="fa fa-hand-paper-o fa-5x" aria-hidden="true"></i>');
  } else if (liczba == "2"){
  	$(".bot").html('<i class="fa fa-hand-scissors-o fa-5x" aria-hidden="true"></i>');
  }

}


function drukowaniePlayer(liczba){
  
  if(liczba == "0"){
  	$(".player").html('<i class="fa fa-hand-rock-o fa-5x fa-flip-horizontal" aria-hidden="true"></i>');
  } else if (liczba == "1"){
  	$(".player").html('<i class="fa fa-hand-paper-o fa-5x fa-flip-horizontal" aria-hidden="true"></i>');
  } else if (liczba == "2"){
  	$(".player").html('<i class="fa fa-hand-scissors-o fa-5x fa-flip-horizontal" aria-hidden="true"></i>');
  }
}

var pkt = 0;
var pktBot =0;

function addPktBot(){
	pktBot += 1;
	$(".botLicznik").hide("slow");
	setTimeout('$(".botLicznik").text(pktBot)',800);
	$(".botLicznik").show("slow");
	
}

function addPktPlayer(){
	pkt += 1;
	$(".playerLicznik").hide("slow");	
	setTimeout('$(".playerLicznik").text(pkt)',800);
	$(".playerLicznik").show("slow");
}

function punktacja(wynik,wynikBot){
	if(wynik == wynikBot){

	} else if(wynik == "0" && wynikBot == "1"){
		addPktBot();
	} else if(wynik == "0" && wynikBot == "2"){
		addPktPlayer()
	} else if(wynik == "1" && wynikBot == "2"){
		addPktBot();
	} else if(wynik == "1" && wynikBot == "0"){
		addPktPlayer()
	} else if(wynik == "2" && wynikBot == "0"){
		addPktBot();
	} else if(wynik == "2" && wynikBot == "1"){
		addPktPlayer()
	}
}

$("document").ready(function(){

	$("button").mouseenter(function(){
          $(this).css({
                                        "color":"#99CCFF",
                                        "opacity":"0.5"
                                      });

        });
       $("button").mouseleave(function(){
          $(this).css({
                                       "color":"white",
                                        "opacity":"1.0"
                                      });
          
        });

	$("button").click(function(){

		var val = $(this).attr("id");
		drukowaniePlayer(val);

		var znak = losuj(0,2);
		drukowanie(znak);

		punktacja(val,znak);
	});


});