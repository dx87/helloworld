var spinner = document.createElement('div');
spinner.id = "spinner";
var dot1 = document.createElement('div');
dot1.id = "dot1";
var dot2 = document.createElement('div');
dot2.id = "dot2";
var mask = document.createElement('div');
mask.id = "mask";

var maskStyle = "display:none;width:100%;height:100%;background-color: rgba(255, 255, 255, 0.57);position:fixed;top:0;left:0;z-index:99";
var common_spinStyle = "z-index:999;display:none;";
var spinStyle = "margin: 100px auto;width: 90px;height: 90px;position: absolute;top: 50%;left: 50%;margin-top: -45px;margin-left: -45px;;text-align: center;-webkit-animation: rotate 2.0s infinite linear;animation: rotate 2.0s infinite linear;";
var common_spinChildStyle = "background-color: #67CF22;width: 60%;height: 60%;display: inline-block;position: absolute;top: 0;border-radius: 100%;-webkit-animation: bounce 2.0s infinite ease-in-out;animation: bounce 2.0s infinite ease-in-out;";
var spinChild1Style = "";
var spinChild2Style = "top: auto;bottom: 0px;-webkit-animation-delay: -1.0s;animation-delay: -1.0s;"
spinner.style.cssText = common_spinStyle + spinStyle;
if(spinner.style.cssText.indexOf("position")=="-1"){//z-index黑魔法：在使用z-index前，要先将元素定位，例如position:relative;
    spinner.style.cssText += "position:relative;";
}
dot1.style.cssText = common_spinChildStyle + spinChild1Style;
dot2.style.cssText = common_spinChildStyle + spinChild2Style;
mask.style.cssText = maskStyle;       

document.styleSheets[0].insertRule("@-webkit-keyframes rotate { 100% { -webkit-transform: rotate(360deg) }}",0);

document.styleSheets[0].insertRule("@keyframes rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}",1);

document.styleSheets[0].insertRule("@-webkit-keyframes bounce {0%, 100% { -webkit-transform: scale(0.0) }50% { -webkit-transform: scale(1.0) }}",2);

document.styleSheets[0].insertRule("@keyframes bounce {0%, 100% { transform: scale(0.0);-webkit-transform: scale(0.0);} 50% { transform: scale(1.0);-webkit-transform: scale(1.0);}}",3);

spinner.appendChild(dot1);
spinner.appendChild(dot2);
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