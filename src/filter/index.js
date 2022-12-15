export const  timestampToTime=(value)=>{
    let date = new Date(value * 1000);
    var Y = date.getFullYear();
    var M = date.getMonth() + 1;
    var D = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    return Y + "-" + M + "-" + D + " " + h + ":" + (m < 10 ? "0" + m : m);
}