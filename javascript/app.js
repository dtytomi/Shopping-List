// when you click on add button it will store the input value into
//an array and also display the value up

$(document).ready(function() {
	$("#userInput").submit(function (event) {

		event.preventDefault();

		var goods = $('#item').val();
	   	var qty   = $('#qty').val();


	   	$("#data").append("<tr>"+"<td>"+'<input type="checkbox" value="1" id="checkbox">'+
	   		'<button>Edit</button>'+"</td>"+"<td>"+goods+
	   				   "</td>"+"<td>" + qty + "</td>"+" </tr>");
   	
  	 		userInput.reset();
	});

	$(".tabContainer").on("change", "input[type=checkbox]", function(){
			if ($(this).is(':checked')){
				$(this).parent().parent().appendTo(".selected");
			}
			else{
				$(this).parent().parent().appendTo(".return");
			}
	});

	$(".tabContainer").on("click", "button", function(){
				
			var item = $(this).parent().next().text();
			var qty = $(this).parent().next().next().text();
				$("#item").val(item);
				$("#qty").val(qty);

			$(this).parent().parent().remove();

	});

});