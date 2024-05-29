let email = prompt("Ingrese su correo electrónico:");
let password = prompt("Ingrese su contraseña:");

if (email && password) {
    // Si ambos campos están llenos, procesar el formulario
    console.log("Formulario enviado correctamente.");
} else {
    console.log("Por favor, complete todos los campos obligatorios.");
}