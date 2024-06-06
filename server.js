const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "src")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
