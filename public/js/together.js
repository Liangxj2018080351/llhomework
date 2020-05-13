// 登录提示开始
$(function () {
    $("#name").blur(function () {
        $("#names").empty();
        var name = $(this).val();
        var e = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
        if (name == "" || name == null) {
            $("#name").after("<span id='names' style='color: red;font-size:12px'>必填项目</span>");
            $("#name").css("border","1px solid red");
        } else if (!e.test(name)) {
            $("#name").after("<p id='names' style='color: red;font-size:12px;margin-top:3px'>手机格式不正确</p>");
            $("#name").css("border","1px solid red");
        }else{
            $("#name").css("border","1px solid #e5e5e5");
        }
    });
    $("#mm").blur(function () {
        $("#pwds").empty();
        var mm = $(this).val();
        var p = /^[A-Za-z0-9]{8,20}$/;
        if (mm == "" || mm == null) {
            $("#mm").after("<p id='pwds' style='color: red;font-size:12px'>必填项目</p>");
            $("#mm").css("border","1px solid red");
        } else if (!p.test(mm)) {
            $("#mm").after("<p id='pwds' style='color: red;font-size:12px;margin-top:3px'>密码格式不正确</p>");
            $("#mm").css("border","1px solid red");
        }else{
            $("#mm").css("border","1px solid #e5e5e5");
        }
    });
})
// 登录提示结束
// 注册提示开始
$(function () {
    $("#iphone").blur(function () {
        $("#names3").empty();
        //获取手机号文本框内容
        var iphone = $(this).val();
        //设置文本框格式
        var e = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
        if (iphone == "" || iphone == null) {
            $("#iphone").after("<p id='names3' style='color: red;font-size:12px;display:inline;'>必填项目</p>");
            $("#iphone").css("border","1px solid red");
        } else if (!e.test(iphone)) {
            $("#iphone").after("<p id='names3' style='color: red;font-size:12px;margin-top:3px'>手机格式不正确</p>");
            $("#iphone").css("border","1px solid red");
        }else{
            $("#iphone").css("border","1px solid #e5e5e5");
        }
    });
    $("#psd").blur(function () {
        var psd = $(this).val();
        var p = /^[A-Za-z0-9]{8,20}$/;
        $("#names4").empty();
        if (psd == null || psd == "") {
            $("#psd").after("<p id='names4' style='color: red;font-size:12px;display:inline;margin:0;top: -6px;position: relative;'>必填项目</p>");
            $("#psd").css("border","1px solid red");
        } else if (!p.test(psd)) {
            $("#psd").after("<p id='names4' style='color: red;font-size:12px;margin-top:3px'>密码格式不正确</p>");
            $("#psd").css("border","1px solid red");
        }else{
            $("#psd").css("border","1px solid #e5e5e5");
        }
    });
    $("#em").blur(function () {
        var em = $(this).val();
        var ema = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        $("#names2").empty();
        if (em == null || em == "") {
            $("#em").after("<p id='names2' style='color: red;font-size:12px;display:inline;'>必填</p>")
            $("#em").css("border","1px solid red");
        } else if (!ema.test(em)) {
            $("#em").after("<p id='names2' style='color: red;font-size:12px;margin-top:3px'>邮箱格式不正确</p>")
            $("#em").css("border","1px solid red");
        }else{
            $("#em").css("border","1px solid #e5e5e5");
        }
    });
})
// 注册提示结束
// 小眼睛显示与隐藏开始
$(document).ready(function() {
    $("#dj").click(function() {
        if ($("#mm").attr("type") == "text") {
            $("#mm").attr("type", "password");
            // $("#dj img").css("opacity", 0.5)
        } else {
            $("#mm").attr("type", "text");
            // $("#dj img").css("opacity", 1)
        }
    });
});
$(document).ready(function() {
    $("#ps").click(function() {
        if ($("#psd").attr("type") == "text") {
            $("#psd").attr("type", "password");
            // $("#dj img").css("opacity", 0.5)
        } else {
            $("#psd").attr("type", "text");
            // $("#dj img").css("opacity", 1)
        }
    });
});
// 显示与隐藏结束
// 注册成功提示
$(document).ready(function() {
    $(function() {
        $("#btn").click(function() {
            name = $("#iphone").val();
            psd = $("#psd").val();
            em=$("#em").val();
            //获取确认密码文本框内容
            if (name.match(/^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/) &&
                psd.match(/^[A-Za-z0-9]{8,20}$/)&&em.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)
            ){
                console.log(name,psd,em);
                // alert("注册成功");
                return true;
            }
            return false;
        });
        $("#denlu").click(function() {
            names = $("#name").val();
            mm = $("#mm").val();
            if (names.match(/^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/) &&
            mm.match(/^[A-Za-z0-9]{8,20}$/)) {
                console.log(names,mm)
                // alert("登录成功");
                return true;
            }
            return false;
        })
    });
})