const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes"));

app.set("port", process.env.PORT || 3000);

// Iniciar el servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor iniciado en http://localhost:${app.get("port")}`);
});
