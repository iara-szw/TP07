function calcularEdad(nacimiento){
    console.log(nacimiento.slice(0,4)) 
    const anionacimiento=parseInt(nacimiento.slice(0,4));
    const mesNacimiento=parseInt(nacimiento.slice(5,7));
    const diaNacimiento=parseInt(nacimiento.slice(7,10))
    let ahora=new Date();
    const mes=ahora.getMonth()+1;
    const dia=ahora.getDay();
    ahora=ahora.getFullYear();
    let edad=ahora-anionacimiento;
    if(mes<=mesNacimiento){
        if(mes==mesNacimiento){
            if(dia<diaNacimiento){
                edad=edad-1;}}else{
                    edad=edad-1;
                }}
    return edad;
}

function sumarTodo(nlistaPedidos){
let sumaTotal=0;
 for (pedido of nlistaPedidos){
        let posicion=pedido.indexOf(":")
        let num=parseInt(pedido.slice(posicion+1))
        sumaTotal=sumaTotal+num
    }

return sumaTotal;
}