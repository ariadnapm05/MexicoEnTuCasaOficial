function comprar(costo, cantidad){
     if (cantidad !=0)
   alert("Continuar la compra")
    if(cantidad != 0){
         ciudad = prompt("Ingrese su domicilio: ");
    iva = costo * 0.15;
    envio = 0;
    total = 0;
    if( (ciudad == "Oaxaca") || (ciudad == "oaxaca")){
        envio =0;
    }else{
        envio =0; 
    }
    total = costo + iva;
    precioCantidad = total *cantidad;
    total = precioCantidad + envio;
    alert("Precio unitario = $" + costo + 
    "\nIVA por producto: $" + iva + 
    "\nEnvio: $" + envio +
    "\nTotal: $" + total);

    }else{
        alert("La cantidad de productos debe ser mayor a 0.")
  }
  if (cantidad !=0)
   alert("Compra Exitosa")
}

const nombre = document.getElementById("name")
const apellidos = document.getElementById("apellidos")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <10){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
  
    
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Todo Fue Realizado "
    }
})


