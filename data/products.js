const productos = [
    {
        id: 1,
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
    id: 2,
    nombre: "Stereo Headphones",
    marca: "WAER",
    categoria: "Audio",
    precio: 25000,
    moneda: "Gs",
    imagen: "images/products/auricular waer.jpeg",
    descripcion: "Auriculares estéreo con micrófono incorporado."
},

{
    id: 3,
    nombre: "Auriculares High Quality",
    marca: "Ecopower",
    categoria: "Audio",
    precio: 35000,
    moneda: "Gs",
    imagen: "images/products/auricular ecopower.jpeg",
    descripcion: "Auriculares USB-C con micrófono y control de volumen."
},

{
    id: 4,
    nombre: "Ultrapods Max Blanco",
    marca: "Listen To Me",
    categoria: "Audio",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/auricular blanco.jpeg",
    descripcion: "Auriculares inalámbricos Bluetooth 5.3 color blanco."
},

{
    id: 5,
    nombre: "Ultrapods Max Negro",
    marca: "Listen To Me",
    categoria: "Audio",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/auricular negro.jpeg",
    descripcion: "Auriculares inalámbricos Bluetooth 5.3 color negro."
},
{
    id: 6,
    nombre: "Power Bank Smart Charge",
    marca: "Ecopower",
    categoria: "Accesorios",
    precio: 150000,
    moneda: "Gs",
    imagen: "images/products/power-bank.jpeg",
    descripcion: "Power Bank Ecopower de 12000mAh con carga rápida de 15W, indicador digital de batería y compatibilidad con carga inalámbrica."
},

{
    id: 7,
    nombre: "Cargador Tipo C",
    marca: "Ecopower",
    categoria: "Cargadores",
    precio: 20000,
    moneda: "Gs",
    imagen: "images/products/cargador-tipo-c.jpeg",
    descripcion: "Cargador Ecopower de 2.1A con cable USB Tipo-C integrado, ideal para una carga rápida y segura."
},

{
    id: 8,
    nombre: "Cargador Micro USB",
    marca: "Ecopower",
    categoria: "Cargadores",
    precio: 20000,
    moneda: "Gs",
    imagen: "images/products/cargador-micro-usb.jpeg",
    descripcion: "Cargador Ecopower de 2.1A con cable Micro USB integrado, compatible con una amplia variedad de dispositivos."
},

{
    id: 9,
    nombre: "Cargador iPhone",
    marca: "Ecopower",
    categoria: "Cargadores",
    precio: 30000,
    moneda: "Gs",
    imagen: "images/products/cargador-iphone.jpeg",
    descripcion: "Cargador Ecopower con cable Lightning integrado para iPhone, ofreciendo una carga estable, rápida y segura."
},

{
    id: 10,
    nombre: "Cargador Notebook Universal",
    marca: "WAER",
    categoria: "Cargadores",
    precio: 80000,
    moneda: "Gs",
    imagen: "images/products/cargador-notebook.jpeg",
    descripcion: "Adaptador universal para notebook con múltiples conectores intercambiables y voltaje ajustable, compatible con diversas marcas."
},
{
    id: 11,
    nombre: "Radio Solar FM AM",
    marca: "Ecopower",
    categoria: "Audio",
    descripcion: "Radio portátil Ecopower con panel solar, bandas FM/AM/SW, conectividad Bluetooth, reproducción por USB y tarjeta TF. Ideal para el hogar, viajes y actividades al aire libre.",
    precio: 100000,
    moneda: "Gs",
    imagen: "images/products/radio-solar.jpeg"
},

{
    id: 12,
    nombre: "Parlante Speaker Bluetooth",
    marca: "Ecopower",
    categoria: "Audio",
    descripcion: "Parlante Bluetooth portátil Ecopower con iluminación LED, batería recargable y reproducción mediante Bluetooth, USB y tarjeta TF. Excelente sonido para música en cualquier lugar.",
    precio: 100000,
    moneda: "Gs",
    imagen: "images/products/speaker-ecopower.jpeg"
},

{
    id: 13,
    nombre: "Parlante Wireless",
    marca: "LUO",
    categoria: "Audio",
    descripcion: "Parlante inalámbrico LUO con conexión Bluetooth, radio FM, entrada USB y tarjeta TF. Compacto, portátil y con luces LED para disfrutar de tu música favorita.",
    precio: 70000,
    moneda: "Gs",
    imagen: "images/products/wireless-luo.jpeg"
},

{
    id: 14,
    nombre: "Portable Speaker Wireless",
    marca: "Charge 3",
    categoria: "Audio",
    descripcion: "Parlante portátil inalámbrico con sonido potente, conexión Bluetooth, batería recargable y diseño resistente. Ideal para reuniones, viajes y uso diario.",
    precio: 120000,
    moneda: "Gs",
    imagen: "images/products/charge3.jpeg"
},
{
    id: 15,
    nombre: "Soporte Celular para Moto",
    marca: "Holder",
    categoria: "Accesorios",
    descripcion: "Soporte universal para celular de moto y bicicleta con rotación de 360°, agarre firme y fácil instalación en el manillar.",
    precio: 40000,
    moneda: "Gs",
    imagen: "images/products/soporte-moto.jpeg"
},

{
    id: 16,
    nombre: "Cargador USB para Moto",
    marca: "Inova",
    categoria: "Cargadores",
    descripcion: "Cargador USB para motocicleta Inova con instalación sencilla, ideal para cargar celulares y otros dispositivos durante el viaje.",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/cargador-moto.jpeg"
},

{
    id: 17,
    nombre: "Soporte de Teléfono para Auto",
    marca: "360°",
    categoria: "Accesorios",
    descripcion: "Soporte universal para teléfono de automóvil con giro de 360°, ventosa de alta adherencia y compatibilidad con la mayoría de los smartphones.",
    precio: 30000,
    moneda: "Gs",
    imagen: "images/products/soporte-auto.jpeg"
},

{
    id: 18,
    nombre: "Car Charger",
    marca: "Ecopower",
    categoria: "Accesorios",
    descripcion: "Cargador para automóvil Ecopower de carga rápida de 55W con puertos USB y USB-C, compatible con teléfonos, tablets y otros dispositivos.",
    precio: 35000,
    moneda: "Gs",
    imagen: "images/products/car-charger-ecopower.jpeg"
},

{
    id: 19,
    nombre: "Car Charger",
    marca: "WAER",
    categoria: "Accesorios",
    descripcion: "Cargador para automóvil WAER PD20W + QC3.0 con carga rápida, puerto USB y USB-C, ideal para mantener tus dispositivos siempre cargados.",
    precio: 20000,
    moneda: "Gs",
    imagen: "images/products/car-charger-waer.jpeg"
},
{
    id: 21,
    nombre: "Mouse Wireless EP-K005",
    marca: "Ecopower",
    categoria: "Computacion",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/mouse-wireless-ep-k005.jpeg",
    descripcion: "Mouse inalámbrico Ecopower EP-K005 de diseño ergonómico, conexión estable y respuesta precisa. Ideal para computadoras y notebooks, perfecto para trabajo, estudio y uso diario."
},
{
    id: 22,
    nombre: "Cámara Espía WiFi A9",
    marca: "A9",
    categoria: "Seguridad",
    precio: 70000,
    moneda: "Gs",
    imagen: "images/products/camara-espia-a9.jpeg",
    descripcion: "Mini cámara IP WiFi A9 con grabación HD. Permite monitoreo remoto desde el celular, detección de movimiento y vigilancia discreta para hogar, oficina o negocio."
},
{
    id: 23,
    nombre: "Smart Bracelet",
    marca: "China",
    categoria: "Accesorios",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/smart-bracelet.jpeg",
    descripcion: "Pulsera inteligente con monitoreo de actividad física, frecuencia cardíaca, contador de pasos, notificaciones y funciones deportivas. Compatible con Android e iPhone."
},
{
    id: 24,
    nombre: "Internet TV Box LU-V82",
    marca: "LUO",
    categoria: "Entretenimiento",
    precio: 150000,
    moneda: "Gs",
    imagen: "images/products/internet-tv-box-luo.jpeg",
    descripcion: "TV Box LUO LU-V82 con sistema Android para convertir cualquier televisor en un Smart TV. Compatible con YouTube, Netflix, aplicaciones de streaming y navegación por Internet."
},
{
    id: 25,
    nombre: "Control Universal Air Mouse LU-i13",
    marca: "LUO",
    categoria: "Entretenimiento",
    precio: 80000,
    moneda: "Gs",
    imagen: "images/products/control-universal-luo.jpeg",
    descripcion: "Control remoto inalámbrico Air Mouse con teclado integrado, conexión 2.4 GHz y Bluetooth 5.2. Ideal para TV Box, Smart TV, PC y dispositivos Android."
},
{
    id: 26,
    nombre: "Foco Cámara WiFi 360°",
    marca: "360°",
    categoria: "Seguridad",
    precio: 80000,
    moneda: "Gs",
    imagen: "images/products/foco-camara-360.jpeg",
    descripcion: "Cámara de seguridad WiFi con diseño de foco LED, visión de 360°, monitoreo remoto desde el celular, detección de movimiento, visión nocturna y audio bidireccional. Ideal para el hogar, oficina o negocio."
},
{
    id: 27,
    nombre: "Jarra Eléctrica WA-20A",
    marca: "WAER",
    categoria: "Hogar",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/jarra-electrica-waer.jpeg",
    descripcion: "Jarra eléctrica WAER de 2 litros fabricada en acero inoxidable, con apagado automático y base giratoria. Ideal para preparar agua caliente de forma rápida y segura para café, té o mate."
},
{
    id: 28,
    nombre: "Estufa Eléctrica MO-QH612",
    marca: "MOX",
    categoria: "Hogar",
    precio: 90000,
    moneda: "Gs",
    imagen: "images/products/estufa-electrica-mox.jpeg",
    descripcion: "Estufa eléctrica MOX de cuarzo con dos niveles de potencia (600W/1200W), sistema de protección contra sobrecalentamiento y diseño compacto. Ideal para calentar habitaciones pequeñas de manera eficiente."
},
{
    id: 29,
    nombre: "Máquina Corta Pelo WA-2909",
    marca: "WAER",
    categoria: "Hogar",
    precio: 100000,
    moneda: "Gs",
    imagen: "images/products/maquina-corta-pelo-waer.jpeg",
    descripcion: "Máquina cortadora de cabello profesional WAER WA-2909 con batería recargable, cuchillas de alta precisión y pantalla digital. Ideal para barbería y uso doméstico."
},
{
    id: 30,
    nombre: "Máquina Shaver WA-097",
    marca: "WAER",
    categoria: "Hogar",
    precio: 150000,
    moneda: "Gs",
    imagen: "images/products/maquina-shaver-waer.jpeg",
    descripcion: "Máquina shaver profesional WAER WA-097 con doble cabezal de afeitado, batería recargable de larga duración y diseño resistente al agua. Perfecta para un acabado suave y preciso."
},
{
    id: 31,
    nombre: "Tira LED RGB 5M",
    marca: "China",
    categoria: "Iluminación",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/tira-led-rgb.jpeg",
    descripcion: "Tira LED RGB de 5 metros con control remoto, múltiples colores y efectos de iluminación. Ideal para decorar habitaciones, escritorios, salas de entretenimiento y negocios."
},
{
    id: 32,
    nombre: "Micrófono Inalámbrico YQ10556",
    marca: "HENGDA",
    categoria: "Audio",
    precio: 50000,
    moneda: "Gs",
    imagen: "images/products/microfono-inalambrico-hengda.jpeg",
    descripcion: "Micrófono inalámbrico HENGDA YQ10556 compatible con celulares y otros dispositivos. Ideal para grabaciones, entrevistas, transmisiones en vivo, TikTok y creación de contenido."
},
{
    id: 36,
    nombre: "Auricular Inalámbrico YQ10569",
    marca: "Hengda",
    categoria: "Audio",
    precio: 60000,
    moneda: "Gs",
    imagen: "images/products/auricular-hengda-yq10569.jpeg",
    descripcion: "Auricular inalámbrico Hengda YQ10569 con conexión Bluetooth, micrófono incorporado, sonido estéreo Hi-Res y diseño ligero para mayor comodidad. Ideal para música, llamadas y uso diario."
},

{
    id: 37,
    nombre: "Auricular Inalámbrico YQ10562",
    marca: "Hengda",
    categoria: "Audio",
    precio: 65000,
    moneda: "Gs",
    imagen: "images/products/auricular-hengda-yq10562.jpeg",
    descripcion: "Auricular inalámbrico Hengda YQ10562 con Bluetooth, entrada para tarjeta TF, reproducción MP3, micrófono con reducción de ruido y batería recargable. Perfecto para disfrutar música sin cables."
},

{
    id: 38,
    nombre: "Aro de Luz LU-330",
    marca: "LUO",
    categoria: "Iluminacion",
    precio: 100000,
    moneda: "Gs",
    imagen: "images/products/aro-de-luz-lu330.jpeg",
    descripcion: "Aro de luz LED LUO LU-330 con diferentes niveles de brillo y temperatura de color. Ideal para transmisiones en vivo, maquillaje, fotografía, videollamadas y creación de contenido."
},

{
    id: 39,
    nombre: "Zapatilla Eléctrica EP-310",
    marca: "Ecopower",
    categoria: "Computacion",
    precio: 45000,
    moneda: "Gs",
    imagen: "images/products/zapatilla-ecopower-ep310.jpeg",
    descripcion: "Zapatilla eléctrica Ecopower EP-310 con 6 tomas de corriente, cable de 2 metros e interruptor de encendido y apagado. Ideal para computadoras, televisores, cargadores y equipos electrónicos."
},
];