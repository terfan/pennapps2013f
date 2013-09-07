
$(document).ready(function() {

	function showMessage1() {
		$(".message1").fadeIn(1500);
		$(".message1").delay(50);
		$(".message1").fadeOut(1500, showMessage2());
	}

	function showMessage2() {
		$(".message2").delay(2000)
		$(".message2").fadeIn(1500);
	}

	showMessage1();

	$(".message2").click(function(e) {
    	slideScreen($("#welcome"), $("#main"));
  	});

  	function slideScreen(curr, next) {
  		curr.hide();
  		next.css("visibility", "visible");
  		next.fadeIn();
	}
	
	var i=0;
/*input list-->input and input-enter*/

function addtext(){   
   var inp = document.getElementById('input').value;   
    i++;
    inp =  '<p>'+inp+'</p>';
     $(inp).appendTo('#list_of_struggles');
        $("#bus_container").css('background-img', imgArray[i]);
    }


});




