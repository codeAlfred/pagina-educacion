document.addEventListener('DOMContentLoaded',function(){
    
    var img=[];

    img[0]='img/jugo.png';
    img[1]='img/leche.png';
    img[2]='img/pastel.png';
    img[3]='img/manzana.png';
    
    
    var indice=0;
    
    function mostrarimg(){
        var cambio = document.getElementById('cambio');
        
       
        
        if(indice<3){
            indice++;
        }else {
            indice=0;
        }
        cambio.src=img[indice];
        
            
    }


setInterval(mostrarimg,2500);
} );















