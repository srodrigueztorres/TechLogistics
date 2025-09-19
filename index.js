const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());          // ✅ permitir peticiones desde el navegador
app.use(express.json());  // ✅ interpretar JSON en las peticiones


// Conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",        
  password: "Kualalumpur1969**",      
  database: "techlogistics"
});

// Verificar conexión
db.connect(err => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conectado a MySQL ✅");
});

// Ruta de prueba para traer clientes
app.get("/clientes", (req, res) => {
  db.query("SELECT * FROM clientes", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error en la consulta");
      return;
    }
    res.json(results); // Devuelve los clientes en formato JSON
  });
});

// Ruta para agregar un cliente
app.post("/clientes", (req, res) => {
  const { nombre, direccion, telefono, email } = req.body;

  if (!nombre || !email) {
    return res.status(400).send("Faltan datos del cliente");
  }

  const sql = "INSERT INTO clientes (nombre, direccion, telefono, email) VALUES (?, ?, ?, ?)";
  db.query(sql, [nombre, direccion || null, telefono || null, email], (err, result) => {
    if (err) {
      console.error("Error al insertar cliente:", err);
      res.status(500).send("Error al insertar cliente");
      return;
    }
    res.status(201).send("Cliente agregado correctamente ✅");
  });
});

// ==================== PRODUCTOS ====================

// Obtener todos los productos
app.get("/productos", (req, res) => {
  db.query("SELECT * FROM productos", (err, results) => {
    if (err) {
      console.error("Error al consultar productos:", err);
      res.status(500).send("Error en la consulta");
      return;
    }
    res.json(results);
  });
});

// Agregar un producto
app.post("/productos", (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;

  if (!nombre || !precio || !stock) {
    return res.status(400).send("Faltan datos del producto");
  }

  const sql = "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)";
  db.query(sql, [nombre, descripcion, precio, stock], (err, result) => {
    if (err) {
      console.error("Error al insertar producto:", err);
      res.status(500).send("Error al insertar producto");
      return;
    }
    res.status(201).send("Producto agregado correctamente ✅");
  });
});

// =====================
// PEDIDOS
// =====================
app.get("/pedidos", (req, res) => {
  db.query("SELECT * FROM pedidos", (err, results) => {
    if (err) {
      console.error("Error al consultar pedidos:", err);
      res.status(500).send("Error en la consulta de pedidos");
      return;
    }
    res.json(results);
  });
});

app.post("/pedidos", (req, res) => {
  const { id_cliente, fecha } = req.body;
  if (!id_cliente || !fecha) {
    return res.status(400).send("Faltan datos del pedido");
  }

  const sql = "INSERT INTO pedidos (id_cliente, fecha) VALUES (?, ?)";
  db.query(sql, [id_cliente, fecha], (err, result) => {
    if (err) {
      console.error("Error al insertar pedido:", err);
      res.status(500).send("Error al insertar pedido");
      return;
    }
    res.status(201).send("Pedido agregado correctamente ✅");
  });
});

// =====================
// DETALLE PEDIDO
// =====================
app.get("/detalle_pedido", (req, res) => {
  db.query("SELECT * FROM detalle_pedido", (err, results) => {
    if (err) {
      console.error("Error al consultar detalle_pedido:", err);
      res.status(500).send("Error en la consulta de detalle_pedido");
      return;
    }
    res.json(results);
  });
});

app.post("/detalle_pedido", (req, res) => {
  const { id_pedido, id_producto, cantidad, precio_unitario } = req.body;
  if (!id_pedido || !id_producto || !cantidad || !precio_unitario) {
    return res.status(400).send("Faltan datos en detalle_pedido");
  }

  const sql = "INSERT INTO detalle_pedido (id_pedido, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)";
  db.query(sql, [id_pedido, id_producto, cantidad, precio_unitario], (err, result) => {
    if (err) {
      console.error("Error al insertar detalle_pedido:", err);
      res.status(500).send("Error al insertar detalle_pedido");
      return;
    }
    res.status(201).send("Detalle agregado correctamente ✅");
  });
});

// =====================
// ENVIOS
// =====================
app.get("/envios", (req, res) => {
  db.query("SELECT * FROM envios", (err, results) => {
    if (err) {
      console.error("Error al consultar envios:", err);
      res.status(500).send("Error en la consulta de envios");
      return;
    }
    res.json(results);
  });
});

app.post("/envios", (req, res) => {
  const { id_pedido, id_estado_envio, id_ruta, id_transportista } = req.body;
  if (!id_pedido || !id_estado_envio || !id_ruta || !id_transportista) {
    return res.status(400).send("Faltan datos del envío");
  }

  const sql = "INSERT INTO envios (id_pedido, id_estado_envio, id_ruta, id_transportista) VALUES (?, ?, ?, ?)";
  db.query(sql, [id_pedido, id_estado_envio, id_ruta, id_transportista], (err, result) => {
    if (err) {
      console.error("Error al insertar envío:", err);
      res.status(500).send("Error al insertar envío");
      return;
    }
    res.status(201).send("Envío agregado correctamente ✅");
  });
});

// =====================
// ESTADOS ENVIO
// =====================
app.get("/estados_envio", (req, res) => {
  db.query("SELECT * FROM estados_envio", (err, results) => {
    if (err) {
      console.error("Error al consultar estados_envio:", err);
      res.status(500).send("Error en la consulta de estados_envio");
      return;
    }
    res.json(results);
  });
});

app.post("/estados_envio", (req, res) => {
  const { estado } = req.body;
  if (!estado) return res.status(400).send("Falta el nombre del estado");

  db.query("INSERT INTO estados_envio (estado) VALUES (?)", [estado], (err, result) => {
    if (err) {
      console.error("Error al insertar estado_envio:", err);
      res.status(500).send("Error al insertar estado_envio");
      return;
    }
    res.status(201).send("Estado agregado correctamente ✅");
  });
});

// =====================
// RUTAS
// =====================
app.get("/rutas", (req, res) => {
  db.query("SELECT * FROM rutas", (err, results) => {
    if (err) {
      console.error("Error al consultar rutas:", err);
      res.status(500).send("Error en la consulta de rutas");
      return;
    }
    res.json(results);
  });
});

app.post("/rutas", (req, res) => {
  const { origen, destino, distancia } = req.body;
  if (!origen || !destino || !distancia) {
    return res.status(400).send("Faltan datos de la ruta");
  }

  const sql = "INSERT INTO rutas (origen, destino, distancia) VALUES (?, ?, ?)";
  db.query(sql, [origen, destino, distancia], (err, result) => {
    if (err) {
      console.error("Error al insertar ruta:", err);
      res.status(500).send("Error al insertar ruta");
      return;
    }
    res.status(201).send("Ruta agregada correctamente ✅");
  });
});

// =====================
// TRANSPORTISTAS
// =====================
app.get("/transportistas", (req, res) => {
  db.query("SELECT * FROM transportistas", (err, results) => {
    if (err) {
      console.error("Error al consultar transportistas:", err);
      res.status(500).send("Error en la consulta de transportistas");
      return;
    }
    res.json(results);
  });
});

app.post("/transportistas", (req, res) => {
  const { nombre, telefono, licencia } = req.body;
  if (!nombre || !telefono || !licencia) {
    return res.status(400).send("Faltan datos del transportista");
  }

  const sql = "INSERT INTO transportistas (nombre, telefono, licencia) VALUES (?, ?, ?)";
  db.query(sql, [nombre, telefono, licencia], (err, result) => {
    if (err) {
      console.error("Error al insertar transportista:", err);
      res.status(500).send("Error al insertar transportista");
      return;
    }
    res.status(201).send("Transportista agregado correctamente ✅");
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
