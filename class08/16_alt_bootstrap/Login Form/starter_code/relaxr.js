jQuery(document).ready(function(){
    jQuery('#relaxrExistingUser a').click(function (e) {
        e.preventDefault()
        jQuery(this).tab('show')
    })

    jQuery('.validatedForm').validate({
            rules : {
                password : {
                    minlength : 5
                },
                password_confirm : {
                    minlength : 5,
                    equalTo : "#password"
                }
            })
});