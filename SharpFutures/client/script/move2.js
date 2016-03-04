$(document).ready(function() {
	 
    $("#bio").css("border","3px solid black");
			
	$("#skills").click(function(){
		if ($("#skills").css('z-index') !== 3) {
			$("#skills").css('z-index', 3);
			$("#bio").css('z-index', 2);
			$("#workHistory").css('z-index', 1);
            $("#workHistory").css("border","0px solid black");
            $("#bio").css("border","0px solid black");
            $("#skills").css("border","3px solid black");
		}
	});
	
	$("#bio").click(function(){
		if ($("#bio").css('z-index') !== 3) {
			$("#bio").css('z-index', 3);
			$("#skills").css('z-index', 2);
			$("#workHistory").css('z-index', 1);
            $("#workHistory").css("border","0px solid black");
            $("#bio").css("border","3px solid black");
            $("#skills").css("border","0px solid black");
		}
	});
	
	$("#workHistory").click(function(){
		if ($("#workHistory").css('z-index') !== 3) {
			$("#workHistory").css('z-index', 3);
			$("#skills").css('z-index', 1);
			$("#bio").css('z-index', 2);
            $("#workHistory").css("border","3px solid black");
            $("#bio").css("border","0px solid black");
            $("#skills").css("border","0px solid black");
		}
	});
	
	
	

  $("#hide").click(function(){
        $("#sidenav").slideToggle("slow");
    });

	$('.text').click(function(){
		var $this = $(this);
		$this.toggleClass('text');
		if($this.hasClass('text')){
			$this.text('Hide nav');			
		} else {
			$this.text('Show nav');
		}
	});
	
	
	$(function() {
	$('#sidenav').hover(function() { 
	$("#sidenav").fadeTo("fast", 1);
	}, function() { 
    
    $("#sidenav").fadeTo("slow", 0.45);
});
});

	
	
});

 