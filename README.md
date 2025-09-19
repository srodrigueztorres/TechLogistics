README.md: TechLogistics - Sistema de Gestión de Envíos
Descripción del Proyecto
TechLogistics es una aplicación web full-stack diseñada para la gestión integral de procesos logísticos. Su objetivo principal es centralizar y optimizar la administración de clientes, productos, pedidos, y envíos, facilitando un control eficiente y una visión clara de las operaciones de una empresa.

Características Principales
El sistema cuenta con las siguientes funcionalidades, cada una con su propia interfaz dedicada:

Gestión de Clientes: Permite registrar nuevos clientes con información como nombre, dirección, teléfono y correo electrónico.

Gestión de Productos: Ofrece una interfaz para registrar nuevos productos, incluyendo su nombre, descripción, precio y la cantidad en stock.

Gestión de Pedidos: Facilita la creación de nuevos pedidos, asociándolos a un cliente y a una fecha específica.

Gestión del Detalle de Pedido: Permite agregar productos específicos a cada pedido, registrando la cantidad y el precio unitario.

Gestión de Envíos: Permite registrar un envío, asociándolo a un pedido, un estado, una ruta y un transportista.

Gestión de Estados de Envío: Ofrece una función para registrar y listar los diferentes estados por los que puede pasar un envío (por ejemplo, "En preparación", "En camino", "Entregado").

Tecnologías Utilizadas
El proyecto está construido con una arquitectura clara de dos capas, frontend y backend.

Backend
Node.js y Express: El servidor backend fue desarrollado con Node.js y el framework Express. Se encarga de la lógica del negocio y expone una API RESTful para la comunicación con el frontend.

MySQL: La persistencia de los datos se maneja con una base de datos MySQL, que almacena toda la información del sistema de manera organizada.

Dependencias de Node.js: Las dependencias clave para el correcto funcionamiento del backend son express, mysql2 para la conexión con la base de datos, y cors para permitir las peticiones desde el navegador.

Frontend
HTML y JavaScript: La interfaz de usuario fue creada utilizando HTML para la estructura y JavaScript para la interactividad y para realizar las peticiones al backend.

API Fetch: El frontend utiliza la API fetch de JavaScript para comunicarse con la API RESTful del backend, enviando y recibiendo datos en formato JSON.

Estructura del Proyecto
La estructura del proyecto se organiza de la siguiente manera:

index.html: La página principal que sirve como menú de navegación hacia las diferentes secciones.

clientes.html: Interfaz para la gestión de clientes.

productos.html: Interfaz para la gestión de productos.

pedidos.html: Interfaz para la gestión de pedidos.

detalle_pedido.html: Interfaz para gestionar los productos dentro de un pedido.

envios.html: Interfaz para registrar y gestionar envíos.

estados_envio.html: Interfaz para la gestión de los estados de un envío.

index.js: El archivo principal del servidor backend que gestiona las rutas de la API y la interacción con la base de datos.

package.json: Archivo de configuración que lista las dependencias del proyecto.

Configuración y Uso
Para poner en marcha el proyecto, se requiere:

Un entorno de ejecución de Node.js.

Un servidor de base de datos MySQL.

Instalar las dependencias del proyecto utilizando el comando npm install.

Ejecutar el servidor con npm start.
