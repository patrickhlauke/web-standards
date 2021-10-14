// set name of hidden property and visibility change event
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
	hidden = "hidden";
	visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
	hidden = "mozHidden";
	visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
	hidden = "msHidden";
	visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
	hidden = "webkitHidden";
	visibilityChange = "webkitvisibilitychange";
}

function handleVisibilityChange() {
	var that=this;
	if (document[hidden]) {
		froggy.src="bounce.gif";
		document.title="PAAARTYYYY";
		console.log('awake');
		bounce.play();
	} else {
		setTimeout(function(){froggy.src="resting.png";document.title="SLEEPING...";console.log('resting');bounce.pause();},1000+Math.random()*1000);
		document.title="OH, YOU'RE BACK...";
		console.log('visible...');
	}
}

if (typeof document.addEventListener === "undefined" || typeof hidden === "undefined") {
	alert("NOOOOOB");
} else {
	document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

window.addEventListener('load',function() {
	froggy = document.getElementById('froggy');
	bounce = document.getElementsByTagName('audio')[0];
	handleVisibilityChange();
}, true);