function fechaYhora() {

    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre",
"Diciembre");

var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

var f=new Date();

 
    myDate = new Date();
    hours = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    if (hours < 10) hours = 0 + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("fecha").innerHTML = `Hoy es: ${diasSemana[f.getDay()]} , ${f.getDate()} de ${meses[f.getMonth()]}  del ${f.getFullYear()}`
    document.getElementById("hora").innerHTML = `La hora actual es: ${hours} : ${minutes} : ${seconds}`;
    
    setInterval("fechaYhora()", 1000);
    }
    
   

