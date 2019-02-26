$(document).ready(function() {
    $('#login').on('click', '#login-submit', function () {
        var data = {
            email: $("#username").val(),
            password: $("#password").val()
        };
        fetch("/login/post_login", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
            .then(response => response.json())
            .then(json => {
                if(!json.connected) return;
                window.location.replace(`${window.location.origin}/index`);
            }); // parses response to JSON
    });

    $('#login').on('keyup', '.form-control', function(evt){
        if(evt.keyCode === 13) $('#login-submit').trigger('click');
    });

    let onChange = function(){
        if($('#username').val() != '' && $('#password').val() != '')
            $('#login-submit').attr('disabled', false);
        else
            $('#login-submit').attr('disabled', true);
    };

    $('#username, #password').on('input', onChange).on('change', onChange);
});