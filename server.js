const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
   const itens = [
      {
         Title: "D",
         message: "esenvolver aplicações de forma fácil"
      },
      {
         Title: "E",
         message: "js usa Java script para redenrizar Html"
      },
      {
         Title: "M",
         message: "uito facil de Usar"
      },
      {
         Title: "A",
         message: "lefante"
      },
      {
         Title: "I",
         message: "nstall Ejs"
      },
      {
         Title: "S",
         message: "intaxe simples."
      }
   ];
   const subtitle = "Uma linguagem de modelagem para criação de páginas html utilzando JS"
   res.render("pages/index",{
      qualitys: itens,
      subtitle: subtitle,
   });
})

app.get("/sobre", function (req, res) {
   res.render("pages/about");
})

app.listen(8080);
console.log("Run...")