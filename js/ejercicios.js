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
    const frutas=["Manzana","Banana","Kiwi","Frutilla","Mandarina","Naranja","Pera","Sandia","Pomelo","Melon"]
    for(const fruta of frutas){
            console.log(fruta);
    }
    const pedida=document.getElementById("fruta");
    if(frutas.includes(pedida)){
        console.log(`Si, tenemos ${pedida}`)
    }else{
        console.log(`No, no tenemos ${pedida}`)
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