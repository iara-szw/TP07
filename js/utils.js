function calcularEdad(nacimiento){
    console.log(nacimiento.slice(0,3)) 
    let anionacimiento=parseInt(nacimiento.slice(0,3));
    let ahora=Date.now();
    ahora=ahora.getFullYear();
    return ahora-anionacimiento;
}