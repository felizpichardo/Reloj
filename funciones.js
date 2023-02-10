 (function () {

     var m = function(){
          t= 1+2; 
     }

     function getAMorPM ( fecha){
        var hora =  fecha.getHours( );
        if (hora < 12 ){
          return 'AM'
         } else {
               return 'PM'
          }
     
     }; 

     

     var actualizarHora = function ( ) {

             fecha = new  Date ( ) ,
             
            horas = fecha.getHours ( ) ,
            ampm = getAMorPM(fecha),
           minutos = fecha.getMinutes ( ) , 
           segundos = fecha.getSeconds ( ) ,
            diasemana = fecha.getDay ( ) ,
            dia = fecha.getDate ( ),
            mes = fecha.getMonth ( ) ,
            year = fecha.getFullYear ( ) ;

           var  pHoras = document.getElementById ( 'horas' ) ,
            pAMPM = document.getElementById  ( 'ampm' ) ,
            pMinutos = document.getElementById  ( 'minutos' ) ,
            pSegundos = document.getElementById  ( 'segundos' ) ,
            pDiaSemana = document.getElementById  ( 'diasemana' ) ,
            pDia= document.getElementById  ( 'dia' ) ,
            pMes = document.getElementById  ( 'mes' ) ,
            pYear = document.getElementById  ( 'year' ) ;
        
            var semana = [' Domingo',' Lunes',' Martes', ' Miercoles',' Jueves', ' Viernes', ' Sabado' ]
            pDiaSemana.textContent = semana [diasemana] ;
            pDia.textContent = dia ;

            var meses = [' Enero',' Febrero',' Marzo', ' Abril',' Mayo', ' Junio', ' Julio' ,' Agosto',' Septiembre',' Octubre',' Noviembre', ' Diciembre' ]
             pMes.textContent = meses [mes] ;

             pYear.textContent = year ;

             if (horas >= 12 ) { 
                horas = horas - 12 ; 
                ampm = ' pm ' ;

                 } else {
                    ampm =' am ' ;
                }
                
      
                 pHoras.textContent = horas ;
                 pAMPM.textContent = ampm ;

                 if (minutos < 10 ) {minutos = "0 "+ minutos };
                 if (segundos < 10 ) { segundos = "0" + segundos };


                 pMinutos.textContent = minutos ;
                 pSegundos.textContent = segundos 
                 
     }


  actualizarHora  ( ) ;
  var intervalo = setInterval (actualizarHora, 1000)
  

 })()