export default {
  timestampToTime(value) {
    let date = new Date(value * 1000);
    var Y = date.getFullYear();
    var M = date.getMonth() + 1;
    var D = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    return Y + "-" + M + "-" + D + " " + h + ":" + (m < 10 ? "0" + m : m) ;
  },
  //校验中英文文字符
  vify_cnen: function(phone) {
    let myreg = /^[\u4e00-\u9fa5a-zA-Z\d_]{0,50}$/gi;
    if (myreg.test(phone) !== true) {
      return false;
    } else {
      return true;
    }
    return true;
  },
  //校验中英文文字符
  vify_cn16: function(phone) {
    let myreg = /^[\u4e00-\u9fa5a-zA-Z\d_]{2,16}$/gi;
    if (myreg.test(phone) !== true) {
      return false;
    } else {
      return true;
    }
    return true;
  },

  isChinese16: function(temp) {
    var re = /[^\u4E00-\u9FA5]{2,16}$/gi;
    if (re.test(temp)) return false;
    return true;
  },

  //验证邮箱格式
  verEmail: function(str) {
    var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (re.test(str) !== true) {
      return false;
    } else {
      return true;
    }
  },
  //验证邮箱格式
  verEmail2: function(str) {
    var re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (re.test(str) !== true) {
      return false;
    } else {
      return true;
    }
  },
  //验证国内外邮箱格式
  verEmail3: function(str) {
    var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (re.test(str) !== true) {
      return false;
    } else {
      return true;
    }
  },
  //验证数字
  verNum: function(str) {
    var re = /^[0-9]*$/
    if (re.test(str) !== true) {
      return false;
    } else {
      return true;
    }
  },
  //验证手机号码
  verPhone: function(str) {
    var re = /^1[3456789]\d{9}$/
    if (re.test(str) !== true) {
      return false;
    } else {
      return true;
    }
  },


}
