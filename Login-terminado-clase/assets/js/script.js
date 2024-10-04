document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);
document.getElementById("loginButton").addEventListener("click", login);
document.getElementById("registerButton").addEventListener("click", validateRegister);

// Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

// FUNCIONES

function anchoPage() {
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0";
        formulario_register.style.display = "none";
    }
}

function iniciarSesion() {
    formulario_register.style.display = "none"; 
    formulario_login.style.display = "block"; 
    contenedor_login_register.style.left = "10px";
    caja_trasera_login.style.opacity = "1"; 
    caja_trasera_register.style.opacity = "1"; 
}

function register() {
    formulario_register.style.display = "block"; 
    formulario_login.style.display = "none"; 
    contenedor_login_register.style.left = "410px"; 
    caja_trasera_register.style.opacity = "1"; 
    caja_trasera_login.style.opacity = "1"; 
}

function login() {
    const firstName = document.getElementById("loginFirstName").value;
    const secondName = document.getElementById("loginSecondName").value;
    const lastName = document.getElementById("loginLastName").value;
    const secondLastName = document.getElementById("loginSecondLastName").value;
    const contact = document.getElementById("loginContact").value;
    const password = document.getElementById("loginPassword").value;

    // Validación de campos vacíos
    if (firstName === "" || secondName === "" || lastName === "" || secondLastName === "" || contact === "" || password === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos',
        });
    } 
    // Validación de longitud de la contraseña
    else if (password.length !== 5) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe tener exactamente 5 caracteres.',
        });
    } 
    // Si todas las condiciones son satisfactorias
    else {
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Inicio de sesión exitoso!',
        });
    }
}

function validateRegister() {
    const firstName = document.getElementById("registerFirstName").value;
    const secondName = document.getElementById("registerSecondName").value;
    const lastName = document.getElementById("registerLastName").value;
    const secondLastName = document.getElementById("registerSecondLastName").value;
    const contact = document.getElementById("registerContact").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender = document.getElementById("registerGender").value; 

    
    if (firstName === "" || secondName === "" || lastName === "" || secondLastName === "" || contact === "" || password === "" || confirmPassword === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos',
        });
    } 
    
    else if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas no coinciden.',
        });
    } 
    
    else if (gender === "") { 
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, selecciona un género.',
        });
    } 
    
    else if (password.length !== 5) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe tener exactamente 5 caracteres.',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Registro exitoso!',
        });
    }
}
