var spinner = document.createElement('div');
spinner.id = "spinner";
var mask = document.createElement('div');
mask.id = "mask";

var maskStyle = "display:none;width:100%;height:100%;background-color: rgba(255, 255, 255, 0.57);position:fixed;top:0;left:0;z-index:99"
var common_spinStyle = "z-index:999;display:none;position: absolute;top: 50%;left: 50%;";
spinner.style.cssText = common_spinStyle + "width: 60px;height: 60px;background-color: #67CF22;margin: 100px auto;-webkit-animation: rotateplane 1.2s infinite ease-in-out;animation: rotateplane 1.2s infinite ease-in-out;margin-left: -30px;margin-top: -30px;";
if(spinner.style.cssText.indexOf("position")=="-1"){//z-index黑魔法：在使用z-index前，要先将元素定位，例如position:relative;
    spinner.style.cssText += "position:relative;";
}
mask.style.cssText = maskStyle;       

document.styleSheets[0].insertRule("@-webkit-keyframes rotateplane {0% { -webkit-transform: perspective(120px) } 50% { -webkit-transform: perspective(120px) rotateY(180deg) } 100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }}",0);

document.styleSheets[0].insertRule("@keyframes rotateplane {0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg);-webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) } 50% { transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);-webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) } 100% { transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);-webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);}}",1);

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