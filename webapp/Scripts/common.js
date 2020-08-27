var ValiDataModel = {
    intege: "^-?[1-9]\\d*$",
    intege1: "^[1-9]\\d*$",
    intege2: "^-[1-9]\\d*$",
    intege3: "^(\\d{12}|\\d{0})$",
    num: "^([+-]?)\\d*\\.?\\d+$",
    num1: "^[1-9]\\d*|0$",
    num2: "^-[1-9]\\d*|0$",
    decmal: "^(([+-]?)([1-9]\\d*(\\.\\d+)*|0(.\\d+)+)+)$",
    decmal1: "^([1-9]\\d*(\\.\\d+)*|0(.\\d+)+)$",
    decmal2: "^-((\\d*(\\.\\d+)*|0(\\.\\d+)+)+)$",
    email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
    color: "^[a-fA-F0-9]{6}$",
    url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",
    chinese: "^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",
    ascii: "^[\\x00-\\xFF]+$",
    zipcode: "^\\d{6}$",
    mobile: "^(13|14|15|17|18)[0-9]{9}$",
    ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",
    notempty: "^\\S+$",
    picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",
    rar: "(.*)\\.(rar|zip|7zip|tgz)$",
    date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",
    qq: "^[1-9]*[1-9][0-9]*$",
    tel: "^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",
    letter: "^[A-Za-z]+$",
    letter_u: "^[A-Z]+$",
    letter_l: "^[a-z]+$",
    TaiWanidcard: "^[A-Za-z]{1}[0-9]{9}$",
    Hongkongidcard: "^[A-Za-z]{1}[0-9]{6}\\([0-9]{1}\\)$",
    idcard: "^[1-9]([0-9]{14}|[0-9]{17})$",
    guid: "^[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}",
    notNull: "^(([a-zA-Z0-9_])|([\\u4e00-\\u9fa5])|([^\\x00-\\xff]))+$",
    notNull1: "[^\\u4e00-\\u9fa5\'])*",
    extName: "^(([a-zA-Z]+,)?)+[a-zA-Z]+$",
    name: "^[^<>]+$",
    point: "^-?\\d+$",
    allNull: "^[^<>/\\\\']*$",
    username: "^\\w+$",
    all: "^[^<>/\\\\']+$"
};
function isValiData(strValiModel, strValue) {
    var objRegExp = eval("/" + strValiModel + "/");
    return objRegExp.test(strValue)
};
String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "")
};
String.prototype.Ltrim = function () {
    return this.replace(/(^\s*)/g, "")
};
String.prototype.Rtrim = function () {
    return this.replace(/(\s*$)/g, "")
};
var msg = function (msg) {
    $("#msgContent").html(msg);
    $('#my-alert').modal({ target: '#my-alert' });    
    return false;
}
var msgtourl = function (msg, url) {
    $("#msgContent").html(msg);
    $('#my-alert').modal({ target: '#my-alert' });
    $('#my-alert .am-modal-btn').one("click", function () {
        window.location.href = url;
    });
    return false;
}
$.format = function (source, params) {
    if (arguments.length == 1)
        return function () {
            var args = $.makeArray(arguments);
            args.unshift(source);
            return $.format.apply(this, args);
        };
    if (arguments.length > 2 && params.constructor != Array) {
        params = $.makeArray(arguments).slice(1);
    }
    if (params.constructor != Array) {
        params = [params];
    }
    $.each(params, function (i, n) {
        source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
    });
    return source;
}; 
