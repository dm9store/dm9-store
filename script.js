const contenedor = document.getElementById("contenedor-productos");
const buscador = document.getElementById("buscador");

function mostrarProductos(lista){

    contenedor.innerHTML = "";

    lista.forEach(producto => {

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

mostrarProductos(productos);

buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const filtrados = productos.filter(producto =>

        producto.nombre.toLowerCase().includes(texto) ||
        producto.marca.toLowerCase().includes(texto)

    );

    mostrarProductos(filtrados);

});