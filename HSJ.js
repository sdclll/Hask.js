import System;
class HSJ{
    var infinity = 1.0/0.0;
    var obj = new Array();
    var ar = new Array();
    function putxt(a,s){
        for (var index = 0; index < s; index++) {
            print(a);
        }
    }
    function setitle(a){
        System.Console.Title = a;
    }
    function se(a,s){
        if (a == 0) {
            eval("");
        } else {
            obj[a] = s;
        }
    }
    function isif(a,s,d) {
        if (a) {
            eval(s);
        } else {
            eval(d);
        }
    }
    function isfor(a,s) {
        for (var i = 0; i < s; i++) {
            eval(a);
        }
    }
    function iswh(a,s){
        while (a) {
            eval(s);
        }
    }
    function getInput() {
        return System.Console.ReadLine();
    }
    function exmod(a){
        eval(a);
    }
    function readmod(a){
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var ts = fso.OpenTextFile(a,1);
        var ret = ts.ReadAll();
        ts.close();
        return ret;
    }
    function getrnd(a,s){
        return Math.round(Math.random()*(s-a)+a);
    }
    function exit(){
        Environment.Exit(0);
    }
    function gea(a) {
        var ret = 0;
        if (a <= 0) {
            ret = 0;
        } else{
            ret = ar[a];
        }
        return ret;
    }
    function Beep(a,s){
        System.Console.Beep(a,s);
    }
    function xmhtm(name,sty,val,isbo){
        var ret = "";
        if (isbo == true) {
            ret = "<" + name + " " + sty + ">" + val + "</" + name + ">";
        } else {
            ret = "<" + name + " " + sty + " />";
        }
        return ret;
    }
}
