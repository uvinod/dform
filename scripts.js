var form = function() {

	var formJson = '[{"elementName": "input", "elementType": "text", "elementLabel": "User Name", "elementId": "userName" }, {"elementName": "input", "elementType": "password", "elementLabel": "Password", "elementId": "password" }, {"elementName": "input", "elementType": "submit", "elementLabel": "Submit", "elementId": "frmSubmit" }]';

	this.buildForm = function(){
		
		var formValues = $.parseJSON(formJson); 

		$('<form>').attr({name: 'Form', id: 'Form', action: 'login', method: 'post'}).appendTo($('#loginDiv'));			

		$(formValues).each(function(i){

			if (formValues[i].elementName == "input") {

				if(formValues[i].elementType != "submit" ) {
					$('<label>').attr({for: formValues[i].elementId}).text(formValues[i].elementLabel).appendTo($('#Form'));	
				}
   				
   				$('<input>').attr({type: formValues[i].elementType, id: formValues[i].elementId, value: formValues[i].elementType == 'submit' ? formValues[i].elementLabel : ''}).appendTo($('#Form'));

 			}
		});		
	}

	this.submitForm = function(){
		
		var url = "path/login.php"; 

	    $.ajax({
			type: "POST",
			url: url,
			data: $('#Form').serialize(), 
			success: function(data)
			{
				$('<div>'+data+'</div>').appendTo($('#loginDiv'));
			}
		});		
		
	}

}

var formObj = new form({ });
formObj.buildForm();


$(function() {
	$('#Form').submit(function(e){
		e.preventDefault();
		formObj.submitForm();		
	});
});

