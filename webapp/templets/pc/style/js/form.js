$(function() {

    //首页贷款申请
    $("#formmore").click(function() {
        var jine = num_check($("#jine").val());
        if ($("#jine").val().length <= 0 || jine == 0) {
            alert("请输入正确的贷款金额!");
            return false;
        }
        identity = $("#identity").val();
        if (identity == 0 || identity == "") {
            alert("请选择贷款产品!");
            return false;
        }
        var name = han_check($("#name").val());
        if ($("#name").val().length <= 0 || name == 0) {
            alert("请输入正确的姓名!");
            return false;
        }
        var tel = mobile_check($("#tel").val());
        if ($("#tel").val().length <= 0 || tel == 0) {
            alert("请输入正确的手机号!");
            return false;
        }
        var f_yzm = $("#f_yzm").val();
        if ($("#f_yzm").val().length <= 0 || f_yzm == 0) {
            alert("请输入正确的图形验证码!");
            return false;
        }
        //alert($("#code").val());
        var code = num_check($("#code").val());
        if ($("#code").val().length <= 0 || code == 0) {
            alert("手机验证码输入有误!");
            return false;
        } else {
            $.ajax({
                url: '/Portal/Advert/yz_code',
                type: "post",
                data: {
                    mobile: $("#tel").val(),
                    code: $("#code").val()
                },
                success: function(data) {
                    var data = JSON.parse(data);
                    if (data.status == 1) {
                        $.ajax({
                            url: '/Portal/Advert/new_order',
                            type: "post",
                            data: {
                                loan_amount: $("#jine").val(),
                                member_name: $("#name").val(),
                                member_phone: $("#tel").val(),
                                p_type_id: identity,
                                promote: 4
                            },
                            success: function(data) {
                                if (data.state == 'success') {
                                    alert('申请成功，稍后会有客服人员与您取得联系，请保持电话畅通！');
                                    $('input[type="text"]').val('');
                                } else {
                                    alert(data.info);
                                }
                            }
                        });

                    } else {
                        alert(data.msg);
                        return false;

                    }
                }
            });
        }


    });

    $('.f_code').on('click', function() {
        var tel = mobile_check($("#tel").val());
        if ($("#tel").val().length <= 0 || tel == 0) {
            alert("请输入正确的手机号!");
            return false;
        }
        f_yzm = $("#f_yzm").val();
        tel = $("#tel").val();
        $.ajax({
            url: '/Portal/Advert/send_iphone',
            type: "post",
            data: {
                mobile: tel,
                img_code: f_yzm,
                code_id: 1
            },
            success: function(data) {
                var data = JSON.parse(data);
                if (data.code == 2) {
                    alert('发送成功');
                    $('.f_code').prop('disabled', true);
                    var num = 120;
                    var timer = setInterval(function() {
                        num--;
                        $('.f_code').val(num + '秒重发');
                        if (num <= 0) {
                            $('.f_code').attr('disabled', false).removeClass('geta').val('获取验证码');
                            clearInterval(timer);
                        }
                    }, 1000);
                } else {
                    alert(data.msg);
                }
            },
        });
        return false;
    })

    $('.p_f_code').on('click', function() {
        var tel = mobile_check($("#p_tel").val());
        if ($("#p_tel").val().length <= 0 || tel == 0) {
            alert("请输入正确的手机号!");
            return false;
        }
        f_yzm = $("#p_f_yzm").val();
        tel = $("#p_tel").val();
        $.ajax({
            url: '/Portal/Advert/send_iphone',
            type: "post",
            data: {
                mobile: tel,
                img_code: f_yzm,
                code_id: 2
            },
            success: function(data) {
                var data = JSON.parse(data);
                if (data.code == 2) {
                    alert('发送成功');
                    $('.p_f_code').prop('disabled', true);
                    var num = 120;
                    var timer = setInterval(function() {
                        num--;
                        $('.p_f_code').val(num + '秒重发');
                        if (num <= 0) {
                            $('.p_f_code').attr('disabled', false).removeClass('geta').val('获取验证码');
                            clearInterval(timer);
                        }
                    }, 1000);
                } else {
                    alert(data.msg);
                }
            },
        });
        return false;
    })

    //

    $('.s_f_code').on('click', function() {
        var tel = mobile_check($("#s_tel").val());
        if ($("#s_tel").val().length <= 0 || tel == 0) {
            alert("请输入正确的手机号!");
            return false;
        }
        f_yzm = $("#s_f_yzm").val();
        tel = $("#s_tel").val();
        $.ajax({
            url: '/Portal/Advert/send_iphone',
            type: "post",
            data: {
                mobile: tel,
                img_code: f_yzm,
                code_id: 3
            },
            success: function(data) {
                var data = JSON.parse(data);
                if (data.code == 2) {
                    alert('发送成功');
                    $('.s_f_code').prop('disabled', true);
                    var num = 120;
                    var timer = setInterval(function() {
                        num--;
                        $('.s_f_code').val(num + '秒重发');
                        if (num <= 0) {
                            $('.s_f_code').attr('disabled', false).removeClass('geta').val('获取验证码');
                            clearInterval(timer);
                        }
                    }, 1000);
                } else {
                    alert(data.msg);
                }
            },
        });
        return false;
    })


    //加盟发送手机短信

    $('.j_f_code').on('click', function() {
        var tel = mobile_check($("#j_tel").val());
        if ($("#j_tel").val().length <= 0 || tel == 0) {
            alert("请输入正确的手机号!");
            return false;
        }
        f_yzm = $("#j_f_yzm").val();
        tel = $("#j_tel").val();
        $.ajax({
            url: '/Portal/Advert/send_iphone',
            type: "post",
            data: {
                mobile: tel,
                img_code: f_yzm,
                code_id: 5
            },
            success: function(data) {
                var data = JSON.parse(data);
                if (data.code == 2) {
                    alert('发送成功');
                    $('.j_f_code').prop('disabled', true);
                    var num = 120;
                    var timer = setInterval(function() {
                        num--;
                        $('.j_f_code').val(num + '秒重发');
                        if (num <= 0) {
                            $('.j_f_code').attr('disabled', false).removeClass('geta').val('获取验证码');
                            clearInterval(timer);
                        }
                    }, 1000);
                } else {
                    alert(data.msg);
                }
            },
        });
        return false;
    })


    $("#formmore2").click(function() {
        var jine = $("#jine").val();
        if ($("#jine").val().length <= 0 || jine == 0) {
            alert("亲！请输入贷款金额!");
            return false;
        }
        var name = han_check($("#name").val());
        if ($("#name").val().length <= 0 || name == 0) {
            alert("亲！请正确输入您姓名!");
            return false;
        }
        var tel = mobile_check($("#tel").val());
        if ($("#tel").val().length <= 0 || tel == 0) {
            alert("亲！请正确输入您的手机号!");
            return false;
        }
        var f_yzm = $("#f_yzm").val();
        if ($("#f_yzm").val().length <= 0 || f_yzm == 0) {
            alert("亲！请正确输入图形验证码!");
            return false;
        }
        var code = num_check($("#code").val());
        if ($("#f_yzm").val().length <= 0 || code == 0) {
            alert("亲！请正确输入短信验证码!");
            return false;
        }
    });

    //评估贷款申请
    $("#formmore3").click(function() {
        var name = han_check($("#p_name").val());
        if ($("#p_name").val().length <= 0 || name == 0) {
            alert("请输入正确的姓名!");
            return false;
        }
        var jine = num_check($("#p_jine").val());
        if ($("#p_jine").val().length <= 0 || jine == 0) {
            alert("请输入正确的贷款金额!");
            return false;
        }
        identity = $("#p_identity").val();
        if (identity == 0 || identity == "") {
            alert("请选择贷款产品!");
            return false;
        }

        var tel = mobile_check($("#p_tel").val());
        if ($("#p_tel").val().length <= 0 || tel == 0) {
            alert("请输入正确的手机号!");
            return false;
        }
        var f_yzm = $("#p_f_yzm").val();
        if ($("#p_f_yzm").val().length <= 0 || f_yzm == 0) {
            alert("请输入正确的图形验证码!");
            return false;
        }
        //alert($("#code").val());
        var code = num_check($("#p_code").val());
        if ($("#p_code").val().length <= 0 || code == 0) {
            alert("手机验证码输入有误!");
            return false;
        } else {
            $.ajax({
                url: '/Portal/Advert/yz_code',
                type: "post",
                data: {
                    mobile: $("#p_tel").val(),
                    code: $("#p_code").val()
                },
                success: function(data) {
                    var data = JSON.parse(data);
                    if (data.status == 1) {
                        $.ajax({
                            url: '/Portal/Advert/new_order',
                            type: "post",
                            data: {
                                loan_amount: $("#p_jine").val(),
                                member_name: $("#p_name").val(),
                                member_phone: $("#p_tel").val(),
                                p_type_id: identity,
                                promote: 4
                            },
                            success: function(data) {
                                if (data.state == 'success') {
                                    alert('申请成功，稍后会有客服人员与您取得联系，请保持电话畅通！');
                                    $('input[type="text"]').val('');
                                } else {
                                    alert(data.info);
                                }
                            }
                        });

                    } else {
                        alert(data.msg);
                        return false;

                    }
                }
            });
        }


    });

    //贷款新闻右侧申请
    $("#subt").click(function() {
        var name = han_check($("#s_name").val());
        if ($("#s_name").val().length <= 0 || name == 0) {
            alert("请输入正确的姓名!");
            return false;
        }

        identity = $("#s_identity").val();
        if (identity == 0 || identity == "") {
            alert("请选择贷款产品!");
            return false;
        }
        var jine = num_check($("#s_jine").val());
        if ($("#s_jine").val().length <= 0 || jine == 0) {
            alert("请输入正确的贷款金额!");
            return false;
        }
        var tel = mobile_check($("#s_tel").val());
        if ($("#s_tel").val().length <= 0 || tel == 0) {
            alert("请输入正确的手机号!");
            return false;
        }
        var f_yzm = $("#s_f_yzm").val();
        if ($("#s_f_yzm").val().length <= 0 || f_yzm == 0) {
            alert("请输入正确的图形验证码!");
            return false;
        }
        //alert($("#code").val());
        var code = num_check($("#s_code").val());
        if ($("#s_code").val().length <= 0 || code == 0) {
            alert("手机验证码输入有误!");
            exit;
        } else {
            $.ajax({
                url: '/Portal/Advert/yz_code',
                type: "post",
                data: {
                    mobile: $("#s_tel").val(),
                    code: $("#s_code").val()
                },
                success: function(data) {
                    var data = JSON.parse(data);
                    if (data.status == 1) {
                        $.ajax({
                            url: '/Portal/Advert/new_order',
                            type: "post",
                            data: {
                                loan_amount: $("#s_jine").val(),
                                member_name: $("#s_name").val(),
                                member_phone: $("#s_tel").val(),
                                p_type_id: identity,
                                promote: 4
                            },
                            success: function(data) {
                                if (data.state == 'success') {
                                    alert('申请成功，稍后会有客服人员与您取得联系，请保持电话畅通！');
                                    $('input[type="text"]').val('');
                                } else {
                                    alert(data.info);
                                    return false;
                                }
                            }
                        });

                    } else {
                        alert(data.msg);
                        return false;
                    }
                }
            });
        }


    });

    //加盟申请
    $(".join").click(function() {
        var name = han_check($("#j_name").val());
        if ($("#j_name").val().length <= 0 || name == 0) {
            alert("请输入正确的姓名!");
            return false;
        }

        var tel = mobile_check($("#j_tel").val());
        if ($("#j_tel").val().length <= 0 || tel == 0) {
            alert("请输入正确的手机号!");
            return false;
        }
        var f_yzm = $("#j_f_yzm").val();
        if ($("#j_f_yzm").val().length <= 0 || f_yzm == 0) {
            alert("请输入正确的图形验证码!");
            return false;
        }
        //alert($("#code").val());
        var code = num_check($("#j_code").val());
        if ($("#j_code").val().length <= 0 || code == 0) {
            alert("手机验证码输入有误!");
            exit;
        } else {
            $.ajax({
                url: '/Portal/Advert/yz_code',
                type: "post",
                data: {
                    mobile: $("#j_tel").val(),
                    code: $("#j_code").val()
                },
                success: function(data) {
                    var data = JSON.parse(data);
                    if (data.status == 1) {
                        $.ajax({
                            url: '/api/weboauth/Franchise',
                            type: "post",
                            data: {
                                name: $("#j_name").val(),
                                mobile: $("#j_tel").val(),
                                type: 2
                            },
                            success: function(data) {
                                var data = JSON.parse(data);
                                if (data.status <= 0) {
                                    alert(data.msg);
                                    return false;
                                } else {
                                    alert(data.msg);
                                    $('input[type="text"]').val('');

                                }
                            }
                        });

                    } else {
                        alert(data.msg);
                        return false;
                    }
                }
            });
        }


    });

    $("#formmore4").click(function() {
        $("#apply").slideDown(200);
        $("body").removeClass("modal-open");
        $("#apply3").hide();
        $(".modal-backdrop2").hide();
        $(".modal-backdrop2").show();
    });

    $("#formmore5").click(function() {
        var content = han_check($("#content").val());
        if ($("#content").val().length <= 0 || content == 0) {
            alert("亲！请正确输入内容!");
            return false;
        }
        var mobile = mobile_check($("#ans_mobile").val());
        if (mobile.length <= 0 || mobile == 0) {
            alert("亲！请正确输入您的手机号!");
            return false;
        }
        code = $("#ans_code").val();
        $.ajax({
            url: '/Answers/add_questions',
            type: "post",
            data: {
                code_img_number: code,
                title: $("#ans_mobile").val(),
                description: $("#content").val(),
                code_id: 4
            },
            success: function(data) {
                if (data.state == 'fail') {
                    alert(data.info);
                } else {
                    alert('您的问题已提交成功');
                    $('input[type="text"]').val('');
                }
            },
        });
    });
})

/*$("#subt").click(function(){
    var name = han_check($("#name").val());
    if ( $("#name").val().length<=0 || name == 0){
        alert("亲！请正确输入您姓名!");
        return false; 
    }
    var jine = $("#jine").val();
    if ( $("#jine").val().length<=0 || jine == 0){
        alert("亲！请输入贷款金额!");
        return false; 
    }
    var tel = mobile_check($("#tel").val());
    if ( $("#tel").val().length<=0 || tel == 0){
        alert("亲！请正确输入您的手机号!");
        return false;
    }
    var f_yzm =$("#f_yzm").val();
    if ( $("#f_yzm").val().length<=0 || f_yzm == 0){
        alert("亲！请正确输入图形验证码!");
        return false;
    }
    var code =num_check($("#code").val());
    if ( $("#f_yzm").val().length<=0 || code == 0){
        alert("亲！请正确输入短信验证码!");
        return false;
    }
});*/
function mobile_check(phone) {
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!reg.test(phone)) {
        return 0;
    } else {
        return 1;
    }
}
//中文验证
function han_check(num) {
    var reg = /[\u4e00-\u9fa5]/;
    if (!reg.test(num)) {
        return 0;
    } else {
        return 1;
    }
}
//数字验证
function num_check(num) {
    var reg = /^[0-9]*$/;
    if (!reg.test(num)) {
        return 0; //验证失败
    } else {
        return 1; //验证成功
    }
}

function begin() {
    var $money = parseInt($("input[name='zhiye']:checked").val()) + parseInt($("input[name='yue']:checked").val()) + parseInt($("input[name='fang']:checked").val());
    $('#shue').animateNumber({
        number: $money
    });
    $(".jieguo").css("border", "5px solid #0f7ce9");
}
$(function() {
    var $div_li = $("#zhiye dd");
    $div_li.click(function() {
        var index = $div_li.index(this);
        $(this).addClass("radin").siblings().removeClass("radin");
    });
})
$(function() {
    var $div_li = $("#yue dd");
    $div_li.click(function() {
        var index = $div_li.index(this);
        $(this).addClass("radin").siblings().removeClass("radin");
    });
})
$(function() {
    var $div_li = $("#fang dd");
    $div_li.click(function() {
        var index = $div_li.index(this);
        $(this).addClass("radin").siblings().removeClass("radin");
    });
})
$(document).ready(function() {
    $("#hide").click(function() {
        $("#apply").slideUp(200);
        $("body").removeClass("modal-open");
    });
    $(".sqdk").click(function() {
        $("#apply").slideDown(500);
        $("body").addClass("modal-open");
    });
    $("#hide2").click(function() {
        $("#apply2").slideUp(200);
        $("body").removeClass("modal-open");
    });
    $("#ljzd").click(function() {
        $("#apply2").slideDown(500);
        $("body").addClass("modal-open");
    });
    $("#hide3").click(function() {
        $("#apply3").slideUp(200);
        $("body").removeClass("modal-open");
    });
    $(".cked").click(function() {
        $("#apply3").slideDown(500);
        $("body").addClass("modal-open");
    });
    $(".wytw").click(function() {
        $("#apply4").slideDown(500);
        $("body").addClass("modal-open");
    });
    $("#hide4").click(function() {
        $("#apply4").slideUp(200);
        $("body").removeClass("modal-open");
    });
    $("#bnext").click(function() {
        var name = han_check($("#name").val());
        if ($("#name").val().length <= 0 || name == 0) {
            alert("亲！请输入正确姓名!");
            return false;
        }
        var jine = $("#jine").val();
        if ($("#jine").val().length <= 0 || jine == 0) {
            alert("亲！请输入正确贷款金额!");
            return false;
        }
        var diqu = han_check($("#diqu").val());
        if ($("#diqu").val().length <= 0 || diqu == 0) {
            alert("亲！请输入正确地区!");
            return false;
        }
        var ysr = $("#ysr").val();
        if ($("#ysr").val().length <= 0 || ysr == 0) {
            alert("亲！请输入正确月收入!");
            return false;
        }
        var dkyt = han_check($("#dkyt").val());
        if ($("#dkyt").val().length <= 0 || dkyt == 0) {
            alert("亲！请输入正确月收入!");
            return false;
        }
        var qixian = $("#qixian").val();
        if ($("#qixian").val().length <= 0 || qixian == 0) {
            alert("亲！请输入正确贷款期限!");
            return false;
        }
        $(".dyb").hide();
        $(".deb").show();
        var zhengxin = han_check($("#zhengxin").val());
        if ($("#zhengxin").val().length <= 0 || zhengxin == 0) {
            alert("亲！请输入正确征信情况!");
            return false;
        }
        var zjbd = han_check($("#zjbd").val());
        if ($("#zjbd").val().length <= 0 || zjbd == 0) {
            alert("亲！请输入正确在缴保单!");
            return false;
        }
        var mobile = mobile_check($("#mobile").val());
        if ($("#mobile").val().length <= 0 || mobile == 0) {
            alert("亲！请正确输入您的手机号!");
            return false;
        }

        var code = num_check($("#code").val());
        if ($("#f_yzm").val().length <= 0 || code == 0) {
            alert("亲！请正确输入短信验证码!");
            return false;
        }
    })
});

$(function() {
    $('.city_show').on('click', function() {
        $('.city_t>.city_hot').toggleClass('dn');
    })
});


//问答验证
