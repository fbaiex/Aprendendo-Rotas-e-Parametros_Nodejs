const express = require("express");
const app = express();

app.get("/",function(req,res){

    res.send("Bem Vindo ao Projeto Fabio Aiex Dev!")
});

app.get("/blog/:artigo?",function(req,res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo: </h2>" + artigo);
    }else{
        res.send("Bem vindo ao blog pessoal de Fabio Aiex dev!");
    }

});

app.get("/canal/youtube",function(req,res){

    res.send("Bem vindo ao meu canal!");
})

app.get("/ola/:nome/:empresa", function(req,res){

    var nome = req.params.nome;
    var empresa = req.params.empresa;

    res.send("<h1>Oi " + nome + " do " + empresa + "</h1>");
})


app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})