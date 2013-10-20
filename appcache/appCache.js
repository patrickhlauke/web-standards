/* inspired by html5demos.com */

var cacheStates = ["UNCACHED - there's no cache for this page",
"IDLE - the browser's cache is still valid",
"CHECKING - checking to see if cache needs to be updated",
"DOWNLOADING - downloading a file to the cache",
"UPDATEREADY - new files downloaded and ready to be used with swapCache()",
"OBSOLETE - the manifest disappeared from the server"];

cache = window.applicationCache;

function init() {
	cache.addEventListener('checking', cacheStatus, false);
	cache.addEventListener('error', cacheStatus, false);
	cache.addEventListener('noupdate', cacheStatus, false);
	cache.addEventListener('downloading', cacheStatus, false);
	cache.addEventListener('progress', cacheStatus, false);
	cache.addEventListener('updateready', cacheStatus, false);
	cache.addEventListener('cached', cacheStatus, false);
	document.querySelector('#update').addEventListener('click', function () { document.querySelector("#status output").innerHTML += "<code>window.applicationCache.update()</code>\n\n";cache.update(); }, false);
	document.querySelector('#swap').addEventListener('click', function () { document.querySelector("#status output").innerHTML += "<code>window.applicationCache.swapCache()</code>\n\n"; if (cache.status == 4) { cache.swapCache(); } else { document.querySelector("#status output").innerHTML +="Can't swap ... <code>window.applicationCache.status</code> is not UPDATEREADY\n\n"; } }, false);
}

function cacheStatus(event) {
	document.querySelector("#status output").innerHTML += "Event: "+event.type+"\nStatus: "+cacheStates[cache.status]+"\n\n";
}

window.addEventListener('load',init,false);