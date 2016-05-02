//JavaScript
	
$(document).ready(function(e){	
$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
	//precarga el sonido
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('bor','audio/BOR.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('ca','audio/CA.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('pu','audio/PU.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('pa','audio/PA.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('pt','audio/PT.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('po','audio/PO.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('hi','audio/HI.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('ji','audio/JI.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('le','audio/LE.mp3',function(){},function(e){alert('Error '+e);})
	;audio.preloadFX('mo','audio/MO.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('tu','audio/TU.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('ze','audio/ZE.mp3',function(){},function(e){alert('Error '+e);});
	
	//reproducir las notas
	
	$('.text').bind('touchstart', function(){$(this).addClass('tocada'); audio.play($(this).attr('id'));});
	$('.text').bind('touchend',function(){$(this).removeClass('tocada');});
	
	
	},false); //deviceready
});//ready