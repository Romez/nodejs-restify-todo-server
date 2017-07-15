$(document).ready(function () {
    var socket = io.connect('http://localhost:9088');

    $('form').submit(function (event) {
        event.preventDefault();
        var textArea = $('textarea[name="msg"]');
        socket.emit('chat message', textArea.val());
        textArea.val('');
    });

    socket.on('chat message', function (msg) {
        $('#chat-window').append('<div class="msg">'+msg+'</div>');
    })

});