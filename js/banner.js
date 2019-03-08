window.addEventListener('DOMContentLoaded', function(){
//    console.log('el contenido ha cargado');
    //creo array de imagenes
    var imagenes =[];
    //agrego alementos al array
    imagenes[0]='img/banner1.jpeg';
    imagenes[1]='img/banner2.jpeg';
    imagenes[2]='img/banner3.jpeg';
    //variable inicial
    var indiceImagenes =0;
    //creo una funcion que cambie las imagenes automaticamente
    function cambiarImagenes(){
    //document.name.atributo	
    document.imgban.src = imagenes[indiceImagenes];
        
        if(indiceImagenes<2){
            indiceImagenes++;
        }else{
            indiceImagenes=0;
        }
    }
    
    setInterval(cambiarImagenes,3000);
    
});

































