(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greet = void 0;
var Greet;
(function (Greet) {
    function sayHello(props) {
        return `Hello from ${props}`;
    }
    Greet.sayHello = sayHello;
})(Greet = exports.Greet || (exports.Greet = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
var Build;
(function (Build) {
    function hello(props) {
        return props;
    }
    Build.hello = hello;
    function showHello(name) {
        const elt = document.getElementById('greeting');
        console.log(elt, name);
    }
    Build.showHello = showHello;
})(Build || (Build = {}));
console.log(Build.hello('Felipe'));
console.log(greet_1.Greet.sayHello('Felipe'));
console.log(Build.showHello('TypeScript'));

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9ncmVldC50cyIsImJ1aWxkL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxJQUFpQixLQUFLLENBSXJCO0FBSkQsV0FBaUIsS0FBSztJQUNsQixTQUFnQixRQUFRLENBQU8sS0FBVztRQUN0QyxPQUFPLGNBQWMsS0FBSyxFQUFFLENBQUE7SUFDaEMsQ0FBQztJQUZlLGNBQVEsV0FFdkIsQ0FBQTtBQUNMLENBQUMsRUFKZ0IsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBSXJCOzs7OztBQ0pELG1DQUErQjtBQUMvQixJQUFVLEtBQUssQ0FTZDtBQVRELFdBQVUsS0FBSztJQUNYLFNBQWdCLEtBQUssQ0FBSSxLQUFRO1FBQzdCLE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7SUFGZSxXQUFLLFFBRXBCLENBQUE7SUFDRCxTQUFnQixTQUFTLENBQUMsSUFBWTtRQUNsQyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFIZSxlQUFTLFlBR3hCLENBQUE7QUFFTCxDQUFDLEVBVFMsS0FBSyxLQUFMLEtBQUssUUFTZDtBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBUyxRQUFRLENBQUMsQ0FBQyxDQUFBO0FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IG5hbWVzcGFjZSBHcmVldCB7XG4gICAgZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvPHR5cGU+KHByb3BzOiB0eXBlKSB7XG4gICAgICAgIHJldHVybiBgSGVsbG8gZnJvbSAke3Byb3BzfWBcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBHcmVldCB9IGZyb20gJy4vZ3JlZXQnXG5uYW1lc3BhY2UgQnVpbGQge1xuICAgIGV4cG9ydCBmdW5jdGlvbiBoZWxsbzxUPihwcm9wczogVCk6IFQge1xuICAgICAgICByZXR1cm4gcHJvcHNcbiAgICB9XG4gICAgZXhwb3J0IGZ1bmN0aW9uIHNob3dIZWxsbyhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWV0aW5nJylcbiAgICAgICAgY29uc29sZS5sb2coZWx0LCBuYW1lKVxuICAgIH1cblxufVxuY29uc29sZS5sb2coQnVpbGQuaGVsbG88c3RyaW5nPignRmVsaXBlJykpXG5jb25zb2xlLmxvZyhHcmVldC5zYXlIZWxsbygnRmVsaXBlJykpXG5jb25zb2xlLmxvZyhCdWlsZC5zaG93SGVsbG8oJ1R5cGVTY3JpcHQnKSkiXX0=