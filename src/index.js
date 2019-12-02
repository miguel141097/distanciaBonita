//Distancia minima de una coordenada a la intersección de dos rectas
function minDistanciaCruce(coordenada) {
    var distancia = Math.ceil(coordenada) - coordenada;
    var minimo = Math.min(distancia, 1 - distancia);
    
    return parseFloat(minimo.toFixed(2));
}


//Calcula si dos valores están en un mismo rango entero [Math.floor , Math.ceil] de longitud una unidad
function estaCalleParalela(coordenada_1, coordenada_2) {
    return (Math.ceil(coordenada_1) == Math.ceil(coordenada_2));
}


function distanciaBonita(salida, llegada) {
     
    //Distnacia mínima válida para casi todos los casos
    var distanciaMinima = Math.abs(salida[0] - llegada[0]) + Math.abs(salida[1] - llegada[1]);
    var diferencia = 0;
    
    //Caso 1: Rectas horizontales paralelas
    if( (estaCalleParalela(salida[0], llegada[0])) && (!estaCalleParalela(salida[1], llegada[1])) ) 
        diferencia = Math.min( minDistanciaCruce(salida[0]), minDistanciaCruce(llegada[0]) );

    //Caso 2: Rectas verticales paralelas
    else if( (!estaCalleParalela(salida[0], llegada[0])) && (estaCalleParalela(salida[1], llegada[1])) )
        diferencia = Math.min( minDistanciaCruce(salida[1]), minDistanciaCruce(llegada[1]) );
    
    //En caso cumplirse uno de los dos casos anteriores, debe añadirse esa distancia extra cálculada
    distanciaMinima += (diferencia * 2)
    return parseFloat(distanciaMinima.toFixed(2));

}