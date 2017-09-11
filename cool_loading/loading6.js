var spinner = document.createElement('div');
spinner.id = "spinner";
var bounce1 = document.createElement('div');
bounce1.id = "bounce1";
var bounce2 = document.createElement('div');
bounce2.id = "bounce2";
var bounce3 = document.createElement('div');
bounce3.id = "bounce3";
var mask = document.createElement('div');
mask.id = "mask";

var maskStyle = "display:none;width:100%;height:100%;background-color: rgba(255, 255, 255, 0.57);position:fixed;top:0;left:0;z-index:99";
var common_spinStyle = "z-index:999;display:none;position: absolute;top: 50%;left: 50%;";
var spinStyle = "height:100px;width: 150px;text-align: center;margin-left: -75px;margin-top: -50px;";
var common_spinChildStyle = "width: 30px;height: 30px;background-color: #67CF22;border-radius: 100%;display: inline-block;-webkit-animation: bouncedelay 1.4s infinite ease-in-out;animation: bouncedelay 1.4s infinite ease-in-out;-webkit-animation-fill-mode: both;animation-fill-mode: both;";
var spinChild1Style = "-webkit-animation-delay: -0.32s;animation-delay: -0.32s;";
var spinChild2Style = "-webkit-animation-delay: -0.16s;animation-delay: -0.16s;";
var spinChild3Style = "";
spinner.style.cssText = common_spinStyle + spinStyle;
if(spinner.style.cssText.indexOf("position")=="-1"){//z-index黑魔法：在使用z-index前，要先将元素定位，例如position:relative;
    spinner.style.cssText += "position:relative;";
}
bounce1.style.cssText = common_spinChildStyle + spinChild1Style;
bounce2.style.cssText = common_spinChildStyle + spinChild2Style;
bounce3.style.cssText = common_spinChildStyle + spinChild3Style;
mask.style.cssText = maskStyle;       

document.styleSheets[0].insertRule("@-webkit-keyframes bouncedelay {0%, 80%, 100% { -webkit-transform: scale(0.0) }40% { -webkit-transform: scale(1.0) }}",0);

document.styleSheets[0].insertRule("@keyframes bouncedelay {0%, 80%, 100% {transform: scale(0.0);-webkit-transform: scale(0.0);} 40% {transform: scale(1.0);-webkit-transform: scale(1.0);}}",1);

spinner.appendChild(bounce1);
spinner.appendChild(bounce2);
spinner.appendChild(bounce3);
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