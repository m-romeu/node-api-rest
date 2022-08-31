'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db,(err,res) => {
	if(err){
		console.log('Error de conexion a bdd')
	}
	console.log('conexión a base de datos establecida...')
})

app.listen(config.port,() => {
	console.log(`APi REST corriendo en http://localhost:${config.port}`)
})

