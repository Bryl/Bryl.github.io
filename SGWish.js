// ==UserScript==
// @name         SGWish
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.steamgifts.com/giveaways/search?type=wishlist
// @grant        none
// ==/UserScript==

// Use featured game div as console
document.getElementsByClassName("featured__heading__medium")[0]
		.querySelector("a").innerText = "Started";
document.getElementsByClassName("featured__heading__medium")[0]
		.querySelector("a").style.fontSize = "30px";

document
		.getElementsByClassName("global__image-outer-wrap global__image-outer-wrap--game-xlarge")[0].style.display = "none";
document.getElementsByClassName("featured__column")[0].style.display = "none";
document
		.getElementsByClassName("featured__column featured__column--width-fill text-right")[0].innerText = Date();
document
		.getElementsByClassName("featured__column featured__column--width-fill text-right")[0].style.fontSize = "20px";

// Delete pinned games
document.getElementsByClassName("pinned-giveaways__outer-wrap")[0].innerText = "";

var entries = document.getElementsByClassName("giveaway__row-outer-wrap");
var game = "";
var arrLinks = [];
var arrGames = [];

for ( var i = 0; i < entries.length; i++) {

	if (document.getElementsByClassName("giveaway__row-outer-wrap")[i].children[0].className !== "giveaway__row-inner-wrap is-faded") {
		game = document.getElementsByClassName("giveaway__row-outer-wrap")[i].children[0].children[0].children[0].children[0].innerHTML;

		var qty = document.getElementsByClassName("giveaway__row-outer-wrap")[i].children[0].children[0].children[2].children[0]
				.querySelector("span").innerHTML.replace(" entries", "")
				.replace(",", "");

		var copies = 1;
		if (document.getElementsByClassName("giveaway__row-outer-wrap")[i].children[0].children[0].children[0].children[1].innerText
				.indexOf("Copies") > -1) {
			copies = document
					.getElementsByClassName("giveaway__row-outer-wrap")[0].children[0].children[0].children[0].children[1].innerText
					.replace(" Copies", "").replace("(", "").replace(")", "")
					.replace(",", "");
		}

		qty = qty / copies;

		document.getElementsByClassName("giveaway__row-outer-wrap")[i].style.backgroundColor = "lightblue";
		arrLinks.push(document
				.getElementsByClassName("giveaway__heading__name")[i].href);
		arrGames.push(game);

	}
}

 fixLinks("giveaway__heading__name");
 fixLinks("global__image-outer-wrap");

function fixLinks(className) {
	var links = document.getElementsByClassName(className);
	for ( var i = 0; i < links.length; i++) {
		links[i].target = "_blank";
	}
}

// Create hidden frame
var e = document.createElement("iframe");
e.id = 'hiddeniframe';
// document.getElementsByClassName("footer__outer-wrap")[0].appendChild(e);
document.getElementsByClassName("featured__container")[0].appendChild(e);

// Set URL
var hf = document.getElementById("hiddeniframe");

var myTimeout;
beginTimeout();

function beginTimeout() {
	myTimeout = setTimeout(
			function() {

				if (arrLinks.length === 0) {
					endTimeout();
					return;
				}

				var link = arrLinks.shift();
				var name = arrGames.shift();

				document.getElementsByClassName("featured__heading__medium")[0]
						.querySelector("a").innerHTML = name + '<br>';

				hf.src = link;

				setTimeout(
						function() {
							if (hf.contentWindow.document
									.getElementsByClassName("sidebar__entry-insert")[0].classList
									.contains('is-hidden') === false) {
								hf.contentWindow.document
										.getElementsByClassName("sidebar__entry-insert")[0]
										.click();
								console.log("clicked");
							}

						}, 3000);

				beginTimeout();

			}, 10000);
}

function endTimeout() {
	clearTimeout(myTimeout);
	document.getElementsByClassName("featured__heading__medium")[0]
			.querySelector("a").innerText = "Finished";

}

