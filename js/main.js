// JavaScript Document

//self executing anonymous function

(function(){
	"use strict";
	var button = document.querySelector("#button");
    var burgerMenu = document.querySelector("#burgerMenu");

    var x = document.querySelector("#dt");
	var v = document.querySelector("#submenu-dt");		

	function hamburgerMenu() {
		burgerMenu.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
    }
    function displaysubmenu() {
		v.classList.toggle("displaysubmenu");
		x.classList.toggle("expanded2");
	}

    button.addEventListener("click", hamburgerMenu, false);
    x.addEventListener("click", displaysubmenu, false);

		console.log("buu");
})();


