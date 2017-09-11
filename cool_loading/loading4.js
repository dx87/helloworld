var spinner = document.createElement('div');
spinner.id = "spinner";
var cube1 = document.createElement('div');
cube1.id = "cube1";
var cube2 = document.createElement('div');
cube2.id = "cube2";
var mask = document.createElement('div');
mask.id = "mask";

var maskStyle = "display:none;width:100%;height:100%;background-color: rgba(255, 255, 255, 0.57);position:fixed;top:0;left:0;z-index:99";
var common_spinStyle = "z-index:999;display:none;position: absolute;top: 50%;left: 50%;";
var spinStyle = "margin: 100px auto;width: 32px;height: 32px;margin-left: -30px;margin-top: -30px;";
var common_spinChildStyle = "background-color: #67CF22;width: 30px;height: 30px;position: absolute;top: 0;left: 0;-webkit-animation: cubemove 1.8s infinite ease-in-out;animation: cubemove 1.8s infinite ease-in-out;";
var spinChild1Style = "";
var spinChild2Style = "-webkit-animation-delay: -0.9s;animation-delay: -0.9s;"
spinner.style.cssText = common_spinStyle + spinStyle;
if(spinner.style.cssText.indexOf("position")=="-1"){//z-index黑魔法：在使用z-index前，要先将元素定位，例如position:relative;
    spinner.style.cssText += "position:relative;";
}
cube1.style.cssText = common_spinChildStyle + spinChild1Style;
cube2.style.cssText = common_spinChildStyle + spinChild2Style;
mask.style.cssText = maskStyle;       

document.styleSheets[0].insertRule("@-webkit-keyframes cubemove {25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }100% { -webkit-transform: rotate(-360deg) }}",0);

document.styleSheets[0].insertRule("@keyframes cubemove {25% { transform: translateX(42px) rotate(-90deg) scale(0.5);-webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);} 50% { transform: translateX(42px) translateY(42px) rotate(-179deg);-webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);} 50.1% { transform: translateX(42px) translateY(42px) rotate(-180deg);-webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);} 75% { transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);-webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);} 100% { transform: rotate(-360deg);-webkit-transform: rotate(-360deg);}}",1);

spinner.appendChild(cube1);
spinner.appendChild(cube2);
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