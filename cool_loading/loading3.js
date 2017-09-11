var spinner = document.createElement('div');
spinner.id = "spinner";
var bounce1 = document.createElement('div');
bounce1.id = "double-bounce1";
var bounce2 = document.createElement('div');
bounce2.id = "double-bounce2";
var mask = document.createElement('div');
mask.id = "mask";

var maskStyle = "display:none;width:100%;height:100%;background-color: rgba(255, 255, 255, 0.57);position:fixed;top:0;left:0;z-index:99";
var common_spinStyle = "z-index:999;display:none;position: absolute;top: 50%;left: 50%;";
var spinStyle = "width: 60px;height: 60px;margin: 100px auto;margin-left: -30px;margin-top: -30px;";
var common_bounceStyle = "width: 100%;height: 100%;border-radius: 50%;background-color: #67CF22;opacity: 0.6;position: absolute;top: 0;left: 0;-webkit-animation: bounce 2.0s infinite ease-in-out;animation: bounce 2.0s infinite ease-in-out;";
var bounce1Style = "";
var bounce2Style = "-webkit-animation-delay: -1.0s;animation-delay: -1.0s;"
spinner.style.cssText = common_spinStyle + spinStyle;
if(spinner.style.cssText.indexOf("position")=="-1"){//z-index黑魔法：在使用z-index前，要先将元素定位，例如position:relative;
    spinner.style.cssText += "position:relative;";
}
bounce1.style.cssText = common_bounceStyle + bounce1Style;
bounce2.style.cssText = common_bounceStyle + bounce2Style;
mask.style.cssText = maskStyle;       

document.styleSheets[0].insertRule("@-webkit-keyframes bounce {0%, 100% { -webkit-transform: scale(0.0) } 50% { -webkit-transform: scale(1.0) }}",0);

document.styleSheets[0].insertRule("@keyframes bounce {0%, 100% {transform: scale(0.0);-webkit-transform: scale(0.0);} 50% {transform: scale(1.0);-webkit-transform: scale(1.0);}}",1);

spinner.appendChild(bounce1);
spinner.appendChild(bounce2);
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