var spinner = document.createElement('div');
spinner.id = "spinner";
var container1 = document.createElement('div');
var container2 = document.createElement('div');
var container3 = document.createElement('div');
var container1_circle1 = document.createElement('div');
var container1_circle2 = document.createElement('div');
var container1_circle3 = document.createElement('div');
var container1_circle4 = document.createElement('div');
var container2_circle1 = document.createElement('div');
var container2_circle2 = document.createElement('div');
var container2_circle3 = document.createElement('div');
var container2_circle4 = document.createElement('div');
var container3_circle1 = document.createElement('div');
var container3_circle2 = document.createElement('div');
var container3_circle3 = document.createElement('div');
var container3_circle4 = document.createElement('div');
var mask = document.createElement('div');
mask.id = "mask";

var maskStyle = "display:none;width:100%;height:100%;background-color: rgba(255, 255, 255, 0.57);position:fixed;top:0;left:0;z-index:99";
var common_spinStyle = "z-index:999;display:none;position: absolute;top: 50%;left: 50%;";
var spinStyle = "margin: 100px auto;width: 40px;height: 40px;;margin-left: -20px;margin-top: -20px;";
var common_spinChildStyle = "position: absolute;width: 100%;height: 100%;";
var spinChild1Style = "";
var spinChild2Style = "-webkit-transform: rotateZ(45deg);transform: rotateZ(45deg);";
var spinChild3Style = "-webkit-transform: rotateZ(90deg);transform: rotateZ(90deg);";
var common_circleStyle = "width: 10px;height: 10px;background-color: #67CF22;border-radius: 100%;position: absolute;-webkit-animation: bouncedelay 1.2s infinite ease-in-out;animation: bouncedelay 1.2s infinite ease-in-out;-webkit-animation-fill-mode: both;animation-fill-mode: both;"
spinner.style.cssText = common_spinStyle + spinStyle;
if(spinner.style.cssText.indexOf("position")=="-1"){//z-index黑魔法：在使用z-index前，要先将元素定位，例如position:relative;
    spinner.style.cssText += "position:relative;";
}
container1.style.cssText = common_spinChildStyle + spinChild1Style;
container2.style.cssText = common_spinChildStyle + spinChild2Style;
container3.style.cssText = common_spinChildStyle + spinChild3Style;

container1_circle1.style.cssText = common_circleStyle + "top: 0; left: 0;";
container2_circle1.style.cssText = common_circleStyle + "top: 0; left: 0;-webkit-animation-delay: -1.1s;animation-delay: -1.1s;";
container3_circle1.style.cssText = common_circleStyle + "top: 0; left: 0;-webkit-animation-delay: -1.0s;animation-delay: -1.0s;";

container1_circle2.style.cssText = common_circleStyle + "top: 0; right: 0;-webkit-animation-delay: -0.9s;animation-delay: -0.9s;";
container2_circle2.style.cssText = common_circleStyle + "top: 0; right: 0;-webkit-animation-delay: -0.8s;animation-delay: -0.8s;";
container3_circle2.style.cssText = common_circleStyle + "top: 0; right: 0;-webkit-animation-delay: -0.7s;animation-delay: -0.7s;";

container1_circle3.style.cssText = common_circleStyle + "bottom: 0; right: 0;-webkit-animation-delay: -0.6s;animation-delay: -0.6s;";
container2_circle3.style.cssText = common_circleStyle + "bottom: 0; right: 0;-webkit-animation-delay: -0.5s;animation-delay: -0.5s;";
container3_circle3.style.cssText = common_circleStyle + "bottom: 0; right: 0;-webkit-animation-delay: -0.4s;animation-delay: -0.4s;";

container1_circle4.style.cssText = common_circleStyle + "bottom: 0; left: 0;-webkit-animation-delay: -0.3s;animation-delay: -0.3s;";
container2_circle4.style.cssText = common_circleStyle + "bottom: 0; left: 0;-webkit-animation-delay: -0.2s;animation-delay: -0.2s;";
container3_circle4.style.cssText = common_circleStyle + "bottom: 0; left: 0;-webkit-animation-delay: -0.1s;animation-delay: -0.1s;";

mask.style.cssText = maskStyle;       

document.styleSheets[0].insertRule("@-webkit-keyframes bouncedelay {0%, 80%, 100% { -webkit-transform: scale(0.0) }40% { -webkit-transform: scale(1.0) }}",0);

document.styleSheets[0].insertRule("@keyframes bouncedelay {0%, 80%, 100% {transform: scale(0.0);-webkit-transform: scale(0.0);} 40% {transform: scale(1.0);-webkit-transform: scale(1.0);}}",1);

container1.appendChild(container1_circle1);
container1.appendChild(container1_circle2);
container1.appendChild(container1_circle3);
container1.appendChild(container1_circle4);
container2.appendChild(container2_circle1);
container2.appendChild(container2_circle2);
container2.appendChild(container2_circle3);
container2.appendChild(container2_circle4);
container3.appendChild(container3_circle1);
container3.appendChild(container3_circle2);
container3.appendChild(container3_circle3);
container3.appendChild(container3_circle4);
spinner.appendChild(container1);
spinner.appendChild(container2);
spinner.appendChild(container3);
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