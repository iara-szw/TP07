//ejercicio 1
function calcularEdadJs(){ 
    console.log("ejercicio1")
const nacimiento=document.getElementById("nacimiento");
const nombre=document.getElementById("nombre");
if(nombre.value.length==0 || nacimiento.value.length==0){console.log("Ingresa toda la informacion antes de calcular");return;}
const edad=calcularEdad(nacimiento.value)
console.log(`Hola ${nombre.value}, tienes ${edad} años!`)
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
function mostrarCiudad(){
   const ciudad = {
    nombre:'Buenos Aires',
    fechaFundacion:'1990-02-02',
    poblacion:283874739,
    extension:'3939029KM'
   }
   for (x in ciudad){
    console.log("Clave: "+x+" Valor: "+ciudad[x]);
   }
}

//ejercicio 5
function dobleNum(numeros){
   const nueva=numeros.map(num => num*2);
   for(num of nueva){
    console.log(num);
   }
}

//ejercicio 6
function asteriscos(){
    console.log("A:")
    for(let i=1;i<6;i++){
        console.log("*".repeat(i))
    }
    console.log("B:")
    let j=4;
    for(let k=1;k<11;k=k+2){
        if(j<0){
            console.log("*".repeat(k));
        }else{
            console.log("-".repeat(j)+"*".repeat(k)+"-".repeat(j));
            j=j-1;
        }

    }
}

//ejercicio7
function nombresA(){
    let nombres=document.getElementById("listaNombres").value;
    nombress=nombres.split(",");
    console.log(nombress)
    let nombresA=nombress.filter(nombre => nombre.startsWith('A'));
    let nuevosNombres=document.getElementById("nuevosNombres");
    nuevosNombres.innerHTML=nombresA;

}

//ejercicio8
function fraseReemplazar(){

    let palabra1=document.getElementById("reemplazar").value;
    let palabra2=document.getElementById("reemplazo").value;
    let frase=document.getElementById("Frase").value;
    let frasee=document.getElementById("frasee");

    frasee.innerHTML=frase.replace(palabra1,palabra2);
}

//ejercicio9
function mostrarCaracteres(){
    let cadena=document.getElementById("Cadena").value;
    let numero=document.getElementById("Numero").value;
    let caracteres=document.getElementById("caracteres");
    caracteres.innerHTML=cadena.slice(0, numero)

}



//ejercicio10
function reemplazarComas(){
    let listaElementos=document.getElementById("listaElementos").value;
    let elementos=document.getElementById("elementos");
    listaElementos=listaElementos.split(",");
  elementos.innerHTML=listaElementos.join("-");

}

//ejericicio11
function calcularTotal(){
    let listaPedidos=document.getElementById("listaPedidos").value;
    const nlistaPedidos=listaPedidos.split(",")
    const sumaTotal=sumarTodo(nlistaPedidos);
    let total=document.getElementById("total")
    total.innerHTML=sumaTotal
}