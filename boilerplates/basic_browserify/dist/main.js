!function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var i="function"==typeof require&&require;if(!f&&i)return i(u,!0);if(l)return l(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var a=n[u]={exports:{}};e[u][0].call(a.exports,function(r){var n=e[u][1][r];return t(n?n:r)},a,a.exports,r,e,n,o)}return n[u].exports}for(var l="function"==typeof require&&require,u=0;u<o.length;u++)t(o[u]);return t}({"./app/main.js":[function(r){var e=r("jflux"),n=r("./HelloWorld.js");e.route("/",function(){e.render(n(),"body")})},{"./HelloWorld.js":"/Users/christianalfoni/Documents/dev/test_globaljflux/app/HelloWorld.js",jflux:"jflux"}],"/Users/christianalfoni/Documents/dev/test_globaljflux/app/HelloWorld.js":[function(r,e){var n=r("jflux"),o=n.component(function(){this.render=function(r){return r("<h1>","Hello world!","</h1>")}});e.exports=o},{jflux:"jflux"}]},{},["./app/main.js"]);