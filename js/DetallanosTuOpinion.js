var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var numero = document.getElementById('numero');
var email = document.getElementById('correo');
var mensaje = document.getElementById('mensaje');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarformulario(){
    console.log('Enviando formulario...');    
    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingrese su nombre');
    }

    if(apellido.value === null || apellido.value === ''){
        mensajesError.push('Ingrese su apellido');
    }

    if(numero.value === null|| numero.value === ''){
        mensajesError.push('Ingrese su numero');
    }

    if(mensaje.value === null || mensaje.value === ''){
        mensajesError.push('Ingrese su mensaje');
    }

    error.innerHTML = mensajesError.join(',');
 

    return false;
}
//confirmar compra
document.addEventListener("DOMContentLoaded", function() {
    var nextBtn = document.getElementById('nextBtn');
    var confirmationPopup = document.getElementById('confirmationPopup');
    var backBtn = document.getElementById('backBtn');
    var confirmBtn = document.getElementById('confirmBtn');

    nextBtn.addEventListener('click', function() {
        popup.classList.remove('active');
        confirmationPopup.classList.add('active');
    });

    backBtn.addEventListener('click', function() {
        confirmationPopup.classList.remove('active');
        popup.classList.add('active');
    });

    confirmBtn.addEventListener('click', function() {
        var confirmPurchase = confirm("Desea confirmar la compra?");
        if (confirmPurchase) {
            // Close the popups and display confirmation message
            confirmationPopup.classList.remove('active');
            popup.classList.remove('active');
            alert("Compra confirmada");
        }
    });

    // Optionally, you can handle form submission if needed
    var purchaseForm = document.getElementById('purchaseForm');
    purchaseForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Handle form submission logic here
    });
});

   
