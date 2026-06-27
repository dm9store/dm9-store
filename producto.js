const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));


const producto = productos.find(p => p.id === id);

const contenedor = document.getElementById("detalle-producto");

if (producto) {
    contenedor.innerHTML = `
        <div class="producto-detalle">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="info-producto">

                <h1>${producto.nombre}</h1>

                <h3>${producto.marca}</h3>

                <p>${producto.descripcion}</p>

                <h2>${producto.precio.toLocaleString()} ${producto.moneda}</h2>

                <a href="index.html" class="boton-volver">← Volver a la tienda</a>

            </div>

        </div>
    `;
} else {

    contenedor.innerHTML = `
        <h2>Producto no encontrado.</h2>
        <a href="index.html">Volver</a>
    `;

}