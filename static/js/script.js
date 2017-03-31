$(function(){
	$('#button1').click(function(){
		var user = $('#txtUsername').val();
		var pass = $('#txtPassword').val();
		$.ajax({
			url: 'http://127.0.0.1:5000/signUpUser',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
				console.log(typeof response);
				var a=JSON.parse(response)
				console.log(typeof a);
				console.log(a);
				$('#test').text(a.status);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
	$('#button2').click(function(){
		var user = $('#txtUsername').val();
		var pass = $('#txtPassword').val();
		$.ajax({
			url: 'http://127.0.0.1:5000/signUpUser2',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);

				$('#test').text(response.user);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});
