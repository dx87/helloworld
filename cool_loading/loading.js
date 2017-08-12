var spinner = document.createElement('div');
spinner.id = "spinner";
var mask = document.createElement('div');
mask.id = "mask";
var rect1 = document.createElement('div');
var rect2 = document.createElement('div');
var rect3 = document.createElement('div');
var rect4 = document.createElement('div');
var rect5 = document.createElement('div');

var commonStyle = " float: left;margin: 0 1.5px;background-color: #67CF22;height: 100%;width: 6px;display:inline-block;-webkit-animation: stretchdelay 1.2s infinite ease-in-out;animation: stretchdelay 1.2s infinite ease-in-out;";
var maskStyle = "display:none;width:100%;height:100%;background-color: rgba(255, 255, 255, 0.57);position:fixed;top:0;left:0;z-index:99"

spinner.style.cssText = "position: absolute;display:none;margin: 100px auto;width: 50px;height: 60px;text-align: center;font-size: 10px;top: 50%;left: 50%;margin-top: -30px;margin-left: -25px;z-index:999";
mask.style.cssText = maskStyle;
rect1.style.cssText = commonStyle + "";
rect2.style.cssText = commonStyle + "-webkit-animation-delay: -1.1s;animation-delay: -1.1s;";
rect3.style.cssText = commonStyle + "-webkit-animation-delay: -1.0s;animation-delay: -1.0s;";
rect4.style.cssText = commonStyle + "-webkit-animation-delay: -0.9s;animation-delay: -0.9s;";
rect5.style.cssText = commonStyle + "-webkit-animation-delay: -0.8s;animation-delay: -0.8s;";       

document.styleSheets[0].insertRule("-webkit-keyframes stretchdelay {0%, 40%, 100% { -webkit-transform: scaleY(0.4))}20% { -webkit-transform: scaleY(1.0) }}",0);

document.styleSheets[0].insertRule("@keyframes stretchdelay {0%, 40%, 100% {transform: scaleY(0.4);-webkit-transform: scaleY(0.4);}  20% {transform: scaleY(1.0);-webkit-transform: scaleY(1.0);}}",1);

spinner.appendChild(rect1);
spinner.appendChild(rect2);
spinner.appendChild(rect3);
spinner.appendChild(rect4);
spinner.appendChild(rect5);
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