//JavaScript
	
$(document).ready(function(e){	
$('#principal').height($('#page2').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
	//precarga el sonido
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('bor','audio/BOR.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('ca','audio/CA.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('pu','audio/PU.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('pa','audio/PA.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('pt','audio/PT.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('po','audio/PO.mp3',function(){},function(e){alert('Error '+e);});
	
	//reproducir las notas
	
	$('.imgcapa').bind('touchstart', function(){$(this).addClass('tocada'); audio.play($(this).attr('id'));});
	$('.imgcapa').bind('touchend',function(){$(this).removeClass('tocada');});


	
	
	},false); //deviceready
});//ready