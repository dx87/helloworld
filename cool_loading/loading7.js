var spinner = document.createElement('div');
spinner.id = "spinner";
var mask = document.createElement('div');
mask.id = "mask";

var maskStyle = "display:none;width:100%;height:100%;background-color: rgba(255, 255, 255, 0.57);position:fixed;top:0;left:0;z-index:99";
var common_spinStyle = "z-index:999;display:none;position: absolute;top: 50%;left: 50%;";
var spinStyle = "width: 120px;height: 120px;margin: 100px auto;background-color: #67CF22;border-radius: 100%; -webkit-animation: scaleout 1.0s infinite ease-in-out;animation: scaleout 1.0s infinite ease-in-out;margin-left: -60px;margin-top: -60px;";
spinner.style.cssText = common_spinStyle + spinStyle;
if(spinner.style.cssText.indexOf("position")=="-1"){//z-index黑魔法：在使用z-index前，要先将元素定位，例如position:relative;
    spinner.style.cssText += "position:relative;";
}
mask.style.cssText = maskStyle;       

document.styleSheets[0].insertRule("@-webkit-keyframes scaleout {0% { -webkit-transform: scale(0.0) }100% {-webkit-transform: scale(1.0);opacity: 0;}}",0);

document.styleSheets[0].insertRule("@keyframes scaleout {0% {transform: scale(0.0);-webkit-transform: scale(0.0);} 100% {transform: scale(1.0);-webkit-transform: scale(1.0);opacity: 0;}}",1);

document.getElementsByTagName("body")[0].appendChild(spinner);  
document.getElementsByTagName("body")[0].appendChild(mask); 


function hideLoading(){
    var obj = document.getElementById("spinner");
    var maskObj = document.getElementById("mask");
    obj.style.display = "none";
    maskObj.style.display = "none";
}
function showLoading(){
    var obj = document.getElementById("spinner");
    obj.style.display = "block";
}
function showMaskLoading(){
    var obj = document.getElementById("spinner");
    var maskObj = document.getElementById("mask");
    obj.style.display = "block";
    maskObj.style.display = "block";
    setTimeout(function(){
        hideLoading();
    },2000)
}