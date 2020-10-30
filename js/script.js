$(document).ready(function(){
	$('.modal').modal();
});

jQuery(function ($) {
	$(".phone").mask("+9(999) 999-99-99");
});

function checkForm(form)
{   
	  if (document.getElementById("CV_target").value == '' && document.getElementById("exp_target").value == '')
	{
		document.getElementById("nosend").innerHTML="Прикрепите резюме или расскажите о своем опыте работы!";
		return false; 
	}
	return true;
}
