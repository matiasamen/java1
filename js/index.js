let email = prompt("Ingrese su correo electrónico:");
let password = prompt("Ingrese su contraseña:");

if (email && password) {
    // Si ambos campos están llenos, procesar el formulario
    console.log("Formulario enviado correctamente.");
} else {
    console.log("Por favor, complete todos los campos obligatorios.");
}

const EDAD = prompt("ingresar edad del usuario");
const EDAD_NUMEROS = parseInt(EDAD);

if(isNaN(EDAD_NUMEROS))
    {console.log("poner solamente valores numericos");}

else{
    if(EDAD_NUMEROS >=18)
        {console.log("buen viaje,permiso concedido");}

else if(EDAD_NUMEROS == 16 || EDAD_NUMEROS == 17)
    {console.log("podras viajar con el permiso de tus padres")
let permisoPadre=prompt("tenes el permiso de tus padres responder si o no");
if(permisoPadre=="si") 
    {console.log("buen viaje,permiso concedido");}
else(permisoPadre==="no")
{console.log("sin permiso no podras viajar,vuelva cuando lo tenga");}

}
else if(EDAD_NUMEROS<=15)
    {console.log("no cumples ningun requisito,viaje denegado");}
}
