// variable del estado visible del carrito
let carritoVisible = false;

if(document.readyState === "cargando"){
      document.addEventListener("DOMContenidoCargando", cargado)
}else{
    cargado()
}


function cargado() {
//funcionando los botones
      let botonEliminarItem = document.getElementsByClassName("boton-eliminar");
    for (let i = 0; i < botonEliminarItem.length; i++) {
      let button = botonEliminarItem[i];
      button.addEventListener("click" , eliminarItemCarrito);
      }
// funcuion boton sumar y restar

      let botonSumarCantidad = document.getElementsByClassName('sumar-cantidad');
      for (let i = 0; i < botonSumarCantidad.length; i++) {
        const button = botonSumarCantidad[i];
        button.addEventListener('click', sumarCantidad);
      }
        let botonRestarCantidad = document.getElementsByClassName('restar-cantidad');
      for (let i = 0; i < botonRestarCantidad.length; i--) {
        const button = botonRestarCantidad[i];
        button.addEventListener('click', restarCantidad);
      }
} 

// se elimina item selecionado del carrito
function eliminarItemCarrito(e){
      let buttonClickEd = e.target;
      buttonClickEd.parentElement.remove();

//actualizamos el total del carrito
actualizarTotalCarrito();

// funsion q controla si hay o no item 
// si no hay se debe ocultar
ocultarCarrito();
}

function actualizarTotalCarrito() {
      let carrito = document.getElementsByClassName("carrito")[0];
      let items = document.getElementsByClassName('content-items');
      let carritoItems = carrito.getElementsByClassName("carrito-item");
      total = 0;

//se recorre cada elemento para la actualizar el total
  for (let i = 0; i < carrito-items.length; i++) {
      let item = carritoItems[i];
      let precioElemento = item.getElementsByClassName("carrito-item-precio")[0];
    console.log(precioElemento);

//quitamos el punto y el simbolo peso
      let precio = parseFloat(precioElemento.innerText.replace('$','').replace('.','')); 
      console.log(precio);
      let cantidadItem = item.getElementsByClassName("carrito-item-cantidad")[0];
      let cantidad = cantidadItem.value;
      console.log(cantidad);
      total = total + (precio*cantidad);
    }
      document.getElementsByClassName("carrito-precio-total")[0].innerText = '$'  + total.toLocaleString("es")+',00';
}

function ocultarCarrito(){
      let carritoItems = document.getElementsByClassName('carrito-items')[0];
      if (carritoItems.childElementCount == 0) {
        let carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carrito.carritoVisible = false;

      //al no haber item se maximiza el contenedor
      let items = document.getElementsByClassName('content-items')[0];
      items.style.width = '100%';
    }
} 

// aumento de a uno el item a selecionar

function sumarCantidad(e){
  let buttonClickEd = e.target;
  let selector = buttonClickEd.parentElement;
  let cantidadActual = selector.getElementsByClassName("carrito-item-cantidad")[0].value;
  console.log(cantidadActual);
  cantidadActual++;
  
  selector.getElementsByClassName("carrito-item-cantidad")[0].value = cantidadActual;

  actualizarTotalCarrito();
}

function restarCantidad(e){
  let buttonClickEd = e.target;
  let selector = buttonClickEd.parentElement;
  let cantidadActual = selector.getElementsByClassName("carrito-item-cantidad")[0].value;
  console.log(cantidadActual);
  cantidadActual--;

if (cantidadActual > 1) {
  selector.getElementsByClassName("carrito-item-cantidad")[0].value = cantidadActual;
  
      actualizarTotalCarrito();
   }
  
}


 