const productos = [
    {
        id: "DM9001",
        nombre: "True Wireless Headset",
        marca: "M10",
        categoria: "Audio",
        precio: 40000,
        moneda: "Gs",
        imagen: "images/products/m10.jpeg",
        descripcion: "Auriculares inalámbricos Bluetooth M10 con estuche de carga y excelente calidad de sonido."
    }
,
{
    id: "DM9002",
    nombre: "Stereo Headphones",
    marca: "WAER",
    categoria: "Audio",
    precio: 25000,
    moneda: "Gs",
    imagen: "images/products/auricular waer.jpeg",
    descripcion: "Auriculares estéreo con micrófono incorporado."
},

{
    id: "DM9003",
    nombre: "Auriculares High Quality",
    marca: "Ecopower",
    categoria: "Audio",
    precio: 35000,
    moneda: "Gs",
    imagen: "images/products/auricular ecopower.jpeg",
    descripcion: "Auriculares USB-C con micrófono y control de volumen."
},

{
    id: "DM9004",
    nombre: "Ultrapods Max Blanco",
    marca: "Listen To Me",
    categoria: "Audio",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/auricular blanco.jpeg",
    descripcion: "Auriculares inalámbricos Bluetooth 5.3 color blanco."
},

{
    id: "DM9005",
    nombre: "Ultrapods Max Negro",
    marca: "Listen To Me",
    categoria: "Audio",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/auricular negro.jpeg",
    descripcion: "Auriculares inalámbricos Bluetooth 5.3 color negro."
},
{
    id: "DM9006",
    nombre: "Power Bank Smart Charge",
    marca: "Ecopower",
    categoria: "Accesorios",
    precio: 150000,
    moneda: "Gs",
    imagen: "images/products/power-bank.jpeg",
    descripcion: "Power Bank Ecopower de 12000mAh con carga rápida de 15W, indicador digital de batería y compatibilidad con carga inalámbrica."
},

{
    id: "DM9007",
    nombre: "Cargador Tipo C",
    marca: "Ecopower",
    categoria: "Cargadores",
    precio: 20000,
    moneda: "Gs",
    imagen: "images/products/cargador-tipo-c.jpeg",
    descripcion: "Cargador Ecopower de 2.1A con cable USB Tipo-C integrado, ideal para una carga rápida y segura."
},

{
    id: "DM9008",
    nombre: "Cargador Micro USB",
    marca: "Ecopower",
    categoria: "Cargadores",
    precio: 20000,
    moneda: "Gs",
    imagen: "images/products/cargador-micro-usb.jpeg",
    descripcion: "Cargador Ecopower de 2.1A con cable Micro USB integrado, compatible con una amplia variedad de dispositivos."
},

{
    id: "DM9009",
    nombre: "Cargador iPhone",
    marca: "Ecopower",
    categoria: "Cargadores",
    precio: 30000,
    moneda: "Gs",
    imagen: "images/products/cargador-iphone.jpeg",
    descripcion: "Cargador Ecopower con cable Lightning integrado para iPhone, ofreciendo una carga estable, rápida y segura."
},

{
    id: "DM9010",
    nombre: "Cargador Notebook Universal",
    marca: "WAER",
    categoria: "Cargadores",
    precio: 80000,
    moneda: "Gs",
    imagen: "images/products/cargador-notebook.jpeg",
    descripcion: "Adaptador universal para notebook con múltiples conectores intercambiables y voltaje ajustable, compatible con diversas marcas."
},
{
    id: "DM9011",
    nombre: "Radio Solar FM AM",
    marca: "Ecopower",
    descripcion: "Radio portátil Ecopower con panel solar, bandas FM/AM/SW, conectividad Bluetooth, reproducción por USB y tarjeta TF. Ideal para el hogar, viajes y actividades al aire libre.",
    precio: 100000,
    moneda: "Gs",
    imagen: "images/products/radio-solar.jpeg"
},

{
    id: "DM9012",
    nombre: "Parlante Speaker Bluetooth",
    marca: "Ecopower",
    descripcion: "Parlante Bluetooth portátil Ecopower con iluminación LED, batería recargable y reproducción mediante Bluetooth, USB y tarjeta TF. Excelente sonido para música en cualquier lugar.",
    precio: 100000,
    moneda: "Gs",
    imagen: "images/products/speaker-ecopower.jpeg"
},

{
    id: "DM9013",
    nombre: "Parlante Wireless",
    marca: "LUO",
    descripcion: "Parlante inalámbrico LUO con conexión Bluetooth, radio FM, entrada USB y tarjeta TF. Compacto, portátil y con luces LED para disfrutar de tu música favorita.",
    precio: 70000,
    moneda: "Gs",
    imagen: "images/products/wireless-luo.jpeg"
},

{
    id: "DM9014",
    nombre: "Portable Speaker Wireless",
    marca: "Charge 3",
    descripcion: "Parlante portátil inalámbrico con sonido potente, conexión Bluetooth, batería recargable y diseño resistente. Ideal para reuniones, viajes y uso diario.",
    precio: 120000,
    moneda: "Gs",
    imagen: "images/products/charge3.jpeg"
},
{
    id: "DM9015",
    nombre: "Soporte Celular para Moto",
    marca: "Holder",
    descripcion: "Soporte universal para celular de moto y bicicleta con rotación de 360°, agarre firme y fácil instalación en el manillar.",
    precio: 40000,
    moneda: "Gs",
    imagen: "images/products/soporte-moto.jpeg"
},

{
    id: "DM9016",
    nombre: "Cargador USB para Moto",
    marca: "Inova",
    descripcion: "Cargador USB para motocicleta Inova con instalación sencilla, ideal para cargar celulares y otros dispositivos durante el viaje.",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/cargador-moto.jpeg"
},

{
    id: "DM9017",
    nombre: "Soporte de Teléfono para Auto",
    marca: "360°",
    descripcion: "Soporte universal para teléfono de automóvil con giro de 360°, ventosa de alta adherencia y compatibilidad con la mayoría de los smartphones.",
    precio: 30000,
    moneda: "Gs",
    imagen: "images/products/soporte-auto.jpeg"
},

{
    id: "DM9018",
    nombre: "Car Charger",
    marca: "Ecopower",
    descripcion: "Cargador para automóvil Ecopower de carga rápida de 55W con puertos USB y USB-C, compatible con teléfonos, tablets y otros dispositivos.",
    precio: 35000,
    moneda: "Gs",
    imagen: "images/products/car-charger-ecopower.jpeg"
},

{
    id: "DM9019",
    nombre: "Car Charger",
    marca: "WAER",
    descripcion: "Cargador para automóvil WAER PD20W + QC3.0 con carga rápida, puerto USB y USB-C, ideal para mantener tus dispositivos siempre cargados.",
    precio: 20000,
    moneda: "Gs",
    imagen: "images/products/car-charger-waer.jpeg"
},
{
    id: 21,
    nombre: "Mouse Wireless EP-K005",
    marca: "Ecopower",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/mouse-wireless-ep-k005.jpeg",
    descripcion: "Mouse inalámbrico Ecopower EP-K005 de diseño ergonómico, conexión estable y respuesta precisa. Ideal para computadoras y notebooks, perfecto para trabajo, estudio y uso diario."
},
{
    id: 22,
    nombre: "Cámara Espía WiFi A9",
    marca: "A9",
    precio: 70000,
    moneda: "Gs",
    imagen: "images/products/camara-espia-a9.jpeg",
    descripcion: "Mini cámara IP WiFi A9 con grabación HD. Permite monitoreo remoto desde el celular, detección de movimiento y vigilancia discreta para hogar, oficina o negocio."
},
{
    id: 23,
    nombre: "Smart Bracelet",
    marca: "China",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/smart-bracelet.jpeg",
    descripcion: "Pulsera inteligente con monitoreo de actividad física, frecuencia cardíaca, contador de pasos, notificaciones y funciones deportivas. Compatible con Android e iPhone."
},
{
    id: 24,
    nombre: "Internet TV Box LU-V82",
    marca: "LUO",
    precio: 150000,
    moneda: "Gs",
    imagen: "images/products/internet-tv-box-luo.jpeg",
    descripcion: "TV Box LUO LU-V82 con sistema Android para convertir cualquier televisor en un Smart TV. Compatible con YouTube, Netflix, aplicaciones de streaming y navegación por Internet."
},
{
    id: 25,
    nombre: "Control Universal Air Mouse LU-i13",
    marca: "LUO",
    precio: 80000,
    moneda: "Gs",
    imagen: "images/products/control-universal-luo.jpeg",
    descripcion: "Control remoto inalámbrico Air Mouse con teclado integrado, conexión 2.4 GHz y Bluetooth 5.2. Ideal para TV Box, Smart TV, PC y dispositivos Android."
},
{
    id: 26,
    nombre: "Foco Cámara WiFi 360°",
    marca: "360°",
    precio: 80000,
    moneda: "Gs",
    imagen: "images/products/foco-camara-360.jpeg",
    descripcion: "Cámara de seguridad WiFi con diseño de foco LED, visión de 360°, monitoreo remoto desde el celular, detección de movimiento, visión nocturna y audio bidireccional. Ideal para el hogar, oficina o negocio."
},
{
    id: 27,
    nombre: "Jarra Eléctrica WA-20A",
    marca: "WAER",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/jarra-electrica-waer.jpeg",
    descripcion: "Jarra eléctrica WAER de 2 litros fabricada en acero inoxidable, con apagado automático y base giratoria. Ideal para preparar agua caliente de forma rápida y segura para café, té o mate."
},
{
    id: 28,
    nombre: "Estufa Eléctrica MO-QH612",
    marca: "MOX",
    precio: 90000,
    moneda: "Gs",
    imagen: "images/products/estufa-electrica-mox.jpeg",
    descripcion: "Estufa eléctrica MOX de cuarzo con dos niveles de potencia (600W/1200W), sistema de protección contra sobrecalentamiento y diseño compacto. Ideal para calentar habitaciones pequeñas de manera eficiente."
}
];