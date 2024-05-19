function date(){
    setInterval (function() {
        var today=new Date(),
        h=today.getHours(),
        m=today.getMinutes(),
        s=today.getSeconds();
        let time = h + ":" + m + ":" + s;
        document.getElementById("text").innerHTML=time;
    },1000);
}