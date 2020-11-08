// Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

$('button').on('click', function(){
    socket.emit('siguienteTicket', {
        mensaje: `El siguiente Ticket es: pez`
    }, function(res){
        label.text(res);
        console.log(res);
    });
});

socket.emit('enviarMensaje', {
    usuario: 'Bryan',
    mensaje: 'Hola mundo'
}, function(res){
    console.log(res);
});

// Escuchar información
socket.on('enviarMensaje', function(res){
    console.log(res);
});

socket.on('estadoActual', function(res){
    label.text(res.actual);
});