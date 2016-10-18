//$(document).ready(function(){});
//$(selector).keyup();
$("span.help-block").hide();

function validar(campo){

	if(campo == 'nombre'){
		
		var valor = $("#nombre").val();
		if( valor == null || valor.length < 3 || /^\s+$/.test(valor) ) {
    		$("#icontext1").remove();
			$("#nombre").parent().parent().attr("class","form-group has-error has-feedback");
    		$("#nombre").parent().children("span").text("Debe ingresar su nombre").show();
    		$("#nombre").parent().append("<span id='icontext1' class='glyphicon glyphicon-remove form-control-feedback'></span>");	  		
	  		return false;
	  	}else if(!isNaN(valor) ) {
	  		$("#icontext1").remove();
			$("#nombre").parent().parent().attr("class","form-group has-error has-feedback");
    		$("#nombre").parent().children("span").text("No debe contener numeros").show();
    		$("#nombre").parent().append("<span id='icontext1' class='glyphicon glyphicon-remove form-control-feedback'></span>");
			return false;
	  	}else{
			$("#icontext1").remove();
			$("#nombre").parent().parent().attr("class","form-group has-success has-feedback"); //parent():elemento padre
			$("#nombre").parent().children("span").text("").hide();//children: elemento hijo
			$("#nombre").parent().append("<span id='icontext1' class='glyphicon glyphicon-ok form-control-feedback'></span>");
	   		return true;
	  	}
	}	
	if(campo == 'apellido'){
		
		var valor = $("#apellido").val();
		if( valor == null || valor.length < 3 || /^\s+$/.test(valor) ) {
    		$("#icontext2").remove();
			$("#apellido").parent().parent().attr("class","form-group has-error has-feedback");
    		$("#apellido").parent().children("span").text("Debe ingresar su apellido").show();
    		$("#apellido").parent().append("<span id='icontext2' class='glyphicon glyphicon-remove form-control-feedback'></span>");	  		
	  		return false;
	  	}else if(!isNaN(valor) ) {
	  		$("#icontext2").remove();
			$("#apellido").parent().parent().attr("class","form-group has-error has-feedback");
    		$("#apellido").parent().children("span").text("No debe contener solo letras").show();
    		$("#apellido").parent().append("<span id='icontext2' class='glyphicon glyphicon-remove form-control-feedback'></span>");
			return false;
	  	}else{
			$("#icontext2").remove();
			$("#apellido").parent().parent().attr("class","form-group has-success has-feedback"); //parent():elemento padre
			$("#apellido").parent().children("span").text("").hide();//children: elemento hijo
			$("#apellido").parent().append("<span id='icontext2' class='glyphicon glyphicon-ok form-control-feedback'></span>");
	   		return true;
	  	}		
	}
	if(campo == 'celular'){
		
		var valor = $("#celular").val();
		if( /^\d{11}$/.test(valor) ) {
    		$("#icontext3").remove();
			$("#celular").parent().parent().attr("class","form-group has-success has-feedback");
    		$("#celular").parent().children("span").text("").hide();
    		$("#celular").parent().append("<span id='icontext3' class='glyphicon glyphicon-ok form-control-feedback'></span>");		  		
	  		return true;
		}else{
			$("#icontext3").remove();
			$("#celular").parent().parent().attr("class","form-group has-error has-feedback");
    		$("#celular").parent().children("span").text("Sin separacion ej: 04149876543").show();
    		$("#celular").parent().append("<span id='icontext3' class='glyphicon glyphicon-remove form-control-feedback'></span>");	  		
	  		return false;
		}
	}
	if(campo == 'email'){
			var valor = $("#email").val();
			var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
			//valido el campo obligatorio
		    	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
		    		$("#icontext4").remove();
					$("#email").parent().parent().attr("class","form-group has-error has-feedback");
		    		$("#email").parent().children("span").text("Debe ingresar su email").show();
		    		$("#email").parent().append("<span id='icontext4' class='glyphicon glyphicon-remove form-control-feedback'></span>");
		        	return false;
					//comprueba que el correo ingresado cumpla con el formato requerido	
				}else if(!regex.test(valor)) {
	    			$("#icontext4").remove();
		    		$("#email").parent().parent().attr("class","form-group has-error has-feedback"); //parent():elemento padre
		    		$("#email").parent().children("span").text("Debe ingresar correctamente su email").show();//children: elemento hijo
		    		$("#email").parent().append("<span id='icontext4' class='glyphicon glyphicon-remove form-control-feedback'></span>");
		       		return false;
				}else{
		       		$("#icontext4").remove();
		    		$("#email").parent().parent().attr("class","form-group has-success has-feedback"); //parent():elemento padre
		    		$("#email").parent().children("span").text("").hide();//children: elemento hijo
		    		$("#email").parent().append("<span id='icontext4' class='glyphicon glyphicon-ok form-control-feedback'></span>");
		       		return true;
       			}
		}	
}

$("#btnvalidar").click(verificar);


function verificar(){

    var v1=0, v2=0, v3=0, v4=0;
    v1 = validar('nombre');
    v2 = validar('apellido');
    v3 = validar('celular');
    v4 = validar('email');

        if (v1==true && v2==true && v3==true && v4==true) {
           $("form").submit(); 
        }

	return false;		 
}

