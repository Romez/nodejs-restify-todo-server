$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:9088',
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        headers: {
            'Authorization':'Basic admin:pass',
            'token':'xxxxxxxxxxxxxxxxxxxx'
        },

        success: function (data) {
            var tasks = data.tasks;

            if(tasks.length){
                $('#tasks').html('');
                _.each(tasks, function (value) {
                    $('#tasks').append('<div>'+value.task+'</div>');
                    console.log(value);
                });
            } else {
                $('#tasks').html('Статей нет');
            }
        }
    });


});