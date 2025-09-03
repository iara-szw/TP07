//ejercicio 1
function calcularEdad(){ 
    console.log("ejercicio1")
   const nacimientoa=fetch(document.getElementById("nacimiento"))
const nacimiento=document.getElementById("nacimiento");
const nombre=document.getElementById("nombre");
const edad=calcularEdad(nacimiento)
console.log(`Hola ${nombre}, tienes ${edad} años!`)
}

//ejericio 2
function buscarFruta(){
    console.log("ejercicio2")
    const frutas=["manzana","banana","kiwi","frutilla","mandarina","naranja","pera","sandia","pomelo","melon"]
    for(const fruta of frutas){
            console.log(fruta);
    }
    const pedida=document.getElementById("fruta");
    if(frutas.includes(pedida.value.toLowerCase())){
        console.log(`Si, tenemos ${pedida.value}`)
    }else{
        console.log(`No, no tenemos ${pedida.value}`)
    }
}

//ejericicio 3
function comparardiez(){
    console.log("ejercicio3")

    console.log(10=='10')
    console.log(10==='10')
    let num=10.6
    console.log(typeof(num))
    console.log(true==1)
    
}

//ejercicio 4
function ciudades(){
   const ciudad = {
    nombre:'Buenos Aires',
    fechaFundacion:'1990-02-02',
    poblacion:283874739,
    extension:'a'
   }
}

//ejercicio 5
function doblenum(numeros){
   numeros
}