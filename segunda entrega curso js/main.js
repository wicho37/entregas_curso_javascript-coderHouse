let button = document.getElementById("compra");

const productos = [
  {
    tecnologia: [
      { id: 1, nombre: "teclado", precio: 23000 },
      { id: 2, nombre: "mause", precio: 52000 },
      { id: 3, nombre: "pantalla", precio: 353000 },
      { id: 4, nombre: "parlantes", precio: 80000 },
    ],
  },
  {
    ropa: [
      { id: 1, nombre: "buzo", precio: 35000 },
      { id: 2, nombre: "camisa", precio: 28000 },
      { id: 3, nombre: "jean", precio: 53000 },
      { id: 4, nombre: "tenis", precio: 130000 },
    ],
  },
];

const busquedaProducto = (producto) => {
  let result = productos[0].tecnologia.filter((element) => element.nombre === producto);

  if (result.length === 0) {
    result = productos[1].ropa.filter((element) => element.nombre === producto);
  }
  
  return result[0];
};

const manejador = () => {
  let pedir = parseInt(prompt("que deseas comprar :  1= tegnologia, 2= ropa,"));
  let listado = 0;
  let mensaje = ("");
  let contendorResultadoFinal = []
  let factura;

  if (pedir === 1) {
    for (let i = 0; i < productos[0].tecnologia.length; i++) {
      mensaje += `
                Id: ${productos[0].tecnologia[i].id}
                Nombre: ${productos[0].tecnologia[i].nombre}
                Valor: ${productos[0].tecnologia[i].precio}
            `;
    }
  } else if (pedir === 2) {
    for (let i = 0; i < productos[1].ropa.length; i++) {
      mensaje += `
                  Id: ${productos[1].ropa[i].id}
                  Nombre: ${productos[1].ropa[i].nombre}
                  Valor: ${productos[1].ropa[i].precio}
              `;
    }
  } else {
    alert("Escribe un numero valido");
  }
  
  listado = prompt("Escoge el producto que deseas " + mensaje );

  alert("Escogiste " +  busquedaProducto(listado).nombre);

  



  contendorResultadoFinal.push(busquedaProducto(listado)) 

  console.log(contendorResultadoFinal), "---> El contenedor" 
 
  for (let i = 0; i < contendorResultadoFinal.length; i++) {
    factura = contendorResultadoFinal[i].precio + listado;
  } 
};

button.addEventListener("click", manejador);
 


/* const items = document.getElementById("items");
const templateCard = document.getElementById("template-Card").content

document.addEventListener("DOMContentLoaded",() => {
  fetchData()
})  */