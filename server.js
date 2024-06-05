const express = require("express");
const path = require("path");

// Cria uma instância do aplicativo Express
const app = express();

// Define o diretório público onde serão servidos os arquivos estáticos
app.use(express.static(path.join(__dirname, "src")));

// Define a porta na qual o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
