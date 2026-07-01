const contenedor = document.getElementById("contenedor-productos");
const buscador = document.getElementById("buscador");
const botonesCategorias = document.querySelectorAll(".categoria");

let categoriaSeleccionada = "Todos";
let textoBusqueda = "";

function mostrarProductos(listaProductos) {

    contenedor.innerHTML = "";

    listaProductos.forEach(producto => {

        contenedor.innerHTML += `
            <div class="producto">

                <img src="${producto.imagen}" alt="${producto.nombre}">

                <h3>${producto.nombre}</h3>

                <p>${producto.marca}</p>

                <h4>${producto.precio.toLocaleString()} ${producto.moneda}</h4>

                <a href="producto.html?id=${producto.id}" class="boton-producto">
                    Ver producto
                </a>

            </div>
        `;

    });

}

function filtrarProductos() {

    let resultado = productos;

    if (categoriaSeleccionada !== "Todos") {

        resultado = resultado.filter(producto =>
            producto.categoria === categoriaSeleccionada
        );

    }

    if (textoBusqueda !== "") {

        resultado = resultado.filter(producto =>
            producto.nombre.toLowerCase().includes(textoBusqueda) ||
            producto.marca.toLowerCase().includes(textoBusqueda)
        );

    }

    mostrarProductos(resultado);

}

buscador.addEventListener("input", () => {

    textoBusqueda = buscador.value.toLowerCase();

    filtrarProductos();

});

mostrarProductos(productos);

botonesCategorias.forEach(boton => {

    boton.addEventListener("click", () => {

        console.log(boton.dataset.categoria);

        botonesCategorias.forEach(b => b.classList.remove("activa"));

        boton.classList.add("activa");

        categoriaSeleccionada = boton.dataset.categoria;

        filtrarProductos();

    });

});