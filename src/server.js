const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const {
        pageLanding,
        pageStudy,
        pageGiveClasses,
        saveClasses
} = require('./pages')

// configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server

// receber os dados do req.body
.use(express.urlencoded({ extended: true }))

// configurar arquivos estáticos (css, javascript, images)
.use(express.static("public"))

// rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// start do servidor
.listen(5500)
