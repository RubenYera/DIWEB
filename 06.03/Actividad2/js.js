function accionPlay()
{
  if(!medio.paused && !medio.ended) 
  {
    medio.pause();
    play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
  }
  else
  {
    medio.play();
    play.value='||';
    document.body.style.backgroundColor = 'grey';
  }
}
function accionReiniciar()
{
    medio.currentTime=0;
    medio.play();
    play.value='||';
  //Usar propiedad .currentTime
  //Reproducir el vídeo
  //Cambiar el valor del botón a ||
}
function accionRetrasar()
{
    
    if(medio.currentTime<0){
        medio.currentTime=0;
    }else{
        medio.currentTime-=5;
    }
  //Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
}
function accionAdelantar()
{
    
    if(medio.currentTime>medio.duration){
        medio.currentTime=medio.duration;
    }else{
        medio.currentTime+=5;
    }
  //Contemplar que no existen valores mayores a medio.duration  
}
function accionSilenciar()
{
    if(medio.muted==true){
        medio.muted=false;
    }else{
        medio.muted=true;
    }
  //Utilizar medio.muted = true; o medio.muted = false;
}
function accionMasVolumen()
{      
    if(medio.volume<0.95){
        medio.volume+=0.05;
    }
  //Contemplar que el valor máximo de volumen es 1
}
function accionMenosVolumen()
{
    if(medio.volume>0.05){
        medio.volume-=0.05;
    }
  //Contemplar que el valor mínimo de volumen es 0
}

function iniciar() 
{
  
  medio=document.getElementById('medio');
  play=document.getElementById('play');
  reiniciar=document.getElementById('reiniciar');
  retrasar=document.getElementById('retrasar');
  adelantar=document.getElementById('adelantar');
  silenciar=document.getElementById('silenciar');

  play.addEventListener('click', accionPlay);
  reiniciar.addEventListener('click', accionReiniciar);
  retrasar.addEventListener('click', accionRetrasar);
  adelantar.addEventListener('click', accionAdelantar);
  silenciar.addEventListener('click', accionSilenciar);
  menosVolumen.addEventListener('click', accionMenosVolumen);
  masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);