// Importar los módulos necesarios
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Configurar middleware
app.use(bodyParser.json());

// Configurar conexión a la base de datos
const db = mysql.createConnection({
  host: "begdjsssutpmr6doz8oq-mysql.services.clever-cloud.com", // Cambiar según la configuración de tu base de datos
  user: "uq0xle40irfk6uo5", // Usuario de tu base de datos
  password: "bCorlAsmJCKRwYsmZKfY", // Contraseña de tu base de datos
  database: "begdjsssutpmr6doz8oq", // Cambiar al nombre real de tu base de datos
});

// Verificar conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

// Ruta POST existente
app.post("/api/data", (req, res) => {
  console.log(req.body);
  res.status(200).send("Data received");
});

// Nueva ruta GET para obtener winCount
app.get("/api/wins", (req, res) => {
  const query = "SELECT win_count FROM wins"; // Consulta para obtener win_count

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error al ejecutar la consulta:", err);
      return res.status(500).json({ error: "Error al obtener los datos" });
    }

    // Devolver los resultados en formato JSON
    res.status(200).json({ wins: results });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
