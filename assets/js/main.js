/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

/*
 * Registration Form
*/

$('#registration-form').submit(function(e){
    e.preventDefault();
    

    //window.alert(5 + 6);
    var postForm = { //Fetch form data
            'name'     : $('#registration-form #name').val(),
            'phone'      : $('#registration-form #phone').val(),
            'email'     : $('#registration-form #email').val(),
            'organization'       : $('#registration-form #organization').val(),
            'address'   : $('#registration-form #address').val(),
            'title'     : $('#registration-form #paper_title').val()
    };
    /*var pattern = new RegExp("[~'!@#$%^&*()-+_=:]");  
    var pattern_ = new RegExp("[~'!#$%^&*()-+_=:]");  
    if($("#name").val() != "" && $("#name").val() != null){  
        if(pattern.test($("#name").val())){  
            alert("非法字符！");  
            $("#name").attr("value","");  
            $("#name").focus();  
            return false;  
        }  
    }  
    if($("#organization").val() != "" && $("#organization").val() != null){  
        if(pattern.test($("#organization").val())){  
            alert("非法字符！");  
            $("#organization").attr("value","");  
            $("#organization").focus();  
            return false;  
        }  
    }  
    if($("#address").val() != "" && $("#address").val() != null){  
        if(pattern.test($("#address").val())){  
            alert("非法字符！");  
            $("#address").attr("value","");  
            $("#address").focus();  
            return false;  
        }  
    }  
    if($("#paper_title").val() != "" && $("#paper_title").val() != null){  
        if(pattern.test($("#paper_title").val())){  
            alert("非法字符！");  
            $("#paper_title").attr("value","");  
            $("#paper_title").focus();  
            return false;  
        }  
    }  
    if($("#email").val() != "" && $("#email").val() != null){  
        if(pattern_.test($("#email").val())){  
            alert("非法字符！");  
            $("#email").attr("value","");  
            $("#email").focus();  
            return false;  
        }  
    }*/

    $.ajax({
            type      : 'POST',
            url       : 'http://120.79.3.161:8888/register',
            data      : postForm,
            dataType  : 'json',
            success   : function(data) {
                            //onsole.log(res)
                            if (data.success) {
                                $('#registration-form').hide();
                                $('#registration-msg .alert').html("Registration Successful");
                                $('#registration-msg .alert').removeClass("alert-danger");
                                $('#registration-msg .alert').addClass("alert-success");
                                $('#registration-msg').show();
                            }
                            else
                            {
                                $('#registration-form').show();
                                $('#registration-msg .alert').html("Registration Failed");
                                $('#registration-msg .alert').removeClass("alert-success");
                                $('#registration-msg .alert').addClass("alert-danger");
                                $('#registration-msg').show();
                            }
                        },
            error       :function(res) {
                            console.log(res)
                        },
        });
});
$('#upload-form').submit(function(e){
    e.preventDefault();
    //window.alert('hi');
    var formData = new FormData($('#upload-form')[0]);
    $("#uploading-msg").html('文件上传中，请等待...');
    $.ajax({
           url: "http://120.79.3.161:8888/upload",
           data: formData,
           type: "POST",
           dataType: 'json',
           cache: false,//上传文件无需缓存
           processData: false,//用于对data参数进行序列化处理 这里必须false
           contentType: false, //必须
           success: function (data) {
               if (data.success) {
                    $('#upload-form').hide();
                    $("#uploading-msg").hide();
                    $('#upload-msg .alert').html("Upload Successful");
                    $('#upload-msg .alert').removeClass("alert-danger");
                    $('#upload-msg .alert').addClass("alert-success");
                    $('#upload-msg').show();
                }
                else
                {
                    $('#upload-form').show();
                    $('#upload-msg .alert').html("Registration Failed");
                    $('#upload-msg .alert').removeClass("alert-success");
                    $('#upload-msg .alert').addClass("alert-danger");
                    $('#upload-msg').show();
                }
           }
    });
});
/*
 * SmoothScroll
*/

smoothScroll.init();