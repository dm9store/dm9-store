const contenedor = document.getElementById("contenedor-productos");

productos.forEach(producto => {

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