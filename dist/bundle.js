(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello("greeting", "Typescript");
},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLElBQVc7SUFDaEMsTUFBTSxDQUFDLGdCQUFjLElBQU0sQ0FBQztBQUNoQyxDQUFDO0FBRkQsNEJBRUM7Ozs7QUNGRCxpQ0FBbUM7QUFFbkMsbUJBQW1CLE9BQWUsRUFBRyxJQUFXO0lBQzNDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXBDLENBQUM7QUFFRCxTQUFTLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiBzYXlIZWxsbyhuYW1lOnN0cmluZyl7XHJcbiAgICByZXR1cm4gYEhlbGxvIGZyb20gJHtuYW1lfWA7XHJcbn0iLCJpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL2dyZWV0XCI7XHJcblxyXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nICwgbmFtZTpzdHJpbmcpe1xyXG4gICAgIGNvbnN0IGVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpO1xyXG5cclxuICAgICBlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8obmFtZSk7XHJcblxyXG59XHJcblxyXG5zaG93SGVsbG8oXCJncmVldGluZ1wiLCBcIlR5cGVzY3JpcHRcIik7Il19
