//borrar la variable //var mouseEvent = "vacio";//

var posicion_dedo_x, posicion_dedo_y;

    canvas = document.getElementById("lienzo");
    dibujo = canvas.getContext("2d");

    color = "black";
    ancholinea = 1;

    //como el ancho se adaptara a cada pantalla
    //lo ponemos dentro de una nueva variable

    var ancho=screen.width;

    //usamos estos valores para centrar el contenido
    //pueden ser cualquier valor, la idea es centrarlo
    //son valores en pixeles

    nuevo_ancho=screen.width -70;
    nuevo_alto=screen.height -300;

    //anchos de pantalla bootstrap
    //mas de 1200px para pcs escritorio
    //1200 a 992px laptops
    //992 a 768px tablets
    //menos de 768px celulares
    
//vamos a crearla para telefonos y tablets
//la ponemos en rango desde 992px

if(ancho<992){
    document.getElementById("lienzo").width=nuevo_ancho;
    document.getElementById("lienzo").height=nuevo_alto;
}

//se cambian los eventos de mouse pues ahora usamos el dedo
//clic= mousedown ahora es touchstart

    function my_touchstart(e)
    {
        //inicio de la actividad adicional
        color = document.getElementById("color").value;
        ancholinea = document.getElementById("ancholinea").value;
        
        //el [0] significa que sólo reconoce 1 dedo
        //e. significa que es un evento
        //clientX es la coordenada en X
        //e.touches[0].clientX es la coordenada del dedo
        // la posicion del dedo lee la ubicacion dentro de la pantalla

        posicion_dedo_x = e.touches[0].clientX - canvas.offsetLeft;
        posicion_dedo_y = e.touches[0].clientY - canvas.offsetTop;
    }

    //aplica la funcion al lienzo
    canvas.addEventListener("touchstart", my_touchstart);
    

    //touchemove lee el movimiento del dedo en pantalla

    function my_touchmove(e)
    {
        
            //leemos la posicion exacta del dedo en pantalla

            posicion_dedo_actual_x = e.touches[0].clientX - canvas.offsetLeft;
            posicion_dedo_actual_y = e.touches[0].clientY - canvas.offsetTop;

            //dejamos el codigo que dibuja y reconoce color y ancho

            dibujo.beginPath();  //le dice al lienzo que empiece a dibujar
            dibujo.strokeStyle = color;
            dibujo.lineWidth = ancholinea;

        //moveto se posiciona para saber donde empieza a moverse
        //que es donde esta el dedo
        //lineto se mueve hacia donde va el dedo por eso sigue su coord actual
        dibujo.moveTo(posicion_dedo_x, posicion_dedo_y);
        dibujo.lineTo(posicion_dedo_actual_x, posicion_dedo_actual_y);
        dibujo.stroke();
        
        posicion_dedo_x = posicion_dedo_actual_x; 
        posicion_dedo_y = posicion_dedo_actual_y;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    

//actividad adicional
function limpiar() {
    dibujo.clearRect(0, 0, dibujo.canvas.width, dibujo.canvas.height);
}