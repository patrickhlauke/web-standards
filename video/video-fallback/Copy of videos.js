$(document).ready(function(){
var flashplayer = 'player.swf';

	if (!document.createElement('video').canPlayType) {
		var videos = document.getElementsByTagName('video');
		for(var i=0, il=videos.length; i<il; i++) {
			videos[i].data = [];
			var sources = videos[i].getElementsByTagName('source');
			for (var j=0, jl=sources.length; j<jl; j++) {
				videos[i].data[sources[j].getAttribute('type')] = sources[j].getAttribute('src');
			}
			
			var payload = "\
<object width=\""+videos[i].getAttribute('width')+"\" height=\""+(15+parseInt(videos[i].getAttribute('height')))+"\" classid=\"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B\">\
<param name=\"src\" value=\""+videos[i].data['video/mp4']+"\" />\
<param name=\"autoplay\" value=\"false\" />\
<param name=\"showlogo\" value=\"false\" />\
<object width=\""+videos[i].getAttribute('width')+"\" height=\""+(15+parseInt(videos[i].getAttribute('height')))+"\" type=\"application/x-shockwave-flash\"\
data=\""+flashplayer+"?image="+videos[i].getAttribute('poster')+".jpg&amp;file="+videos[i].data['video/mp4']+"\">\
<param name=\"movie\" value=\""+flashplayer+"?image="+videos[i].getAttribute('poster')+"&amp;file="+videos[i].data['video/mp4']+"\" />\
<img src=\""+videos[i].getAttribute('poster')+"\" width=\""+videos[i].getAttribute('width')+"\" height=\""+videos[i].getAttribute('height')+"\" />\
<p><strong>No video playback capabilities detected.</strong> <a href=\""+videos[i].data['video/mp4']+"\">MPEG4 / H.264 “.mp4” (Windows / Mac)</a></p>\
</object></object>";	

/* var payload = "\
<!--[if gt IE 6]>\
<object width=\""+videos[i].getAttribute('width')+"\" height=\""+videos[i].getAttribute('height')+"\" classid=\"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B\"><!\
[endif]--><!--[if !IE]><!-->\
<object width=\""+videos[i].getAttribute('width')+"\" height=\""+videos[i].getAttribute('height')+"\" type=\"video/quicktime\" data=\""+videos[i].data['video/mp4']+"\"><!--<![endif]-->\
<param name=\"src\" value=\""+videos[i].data['video/mp4']+"\" />\
<param name=\"autoplay\" value=\"false\" />\
<param name=\"showlogo\" value=\"false\" />\
<object width=\""+videos[i].getAttribute('width')+"\" height=\""+(videos[i].getAttribute('height')+10)+"\" type=\"application/x-shockwave-flash\"\
data=\""+flashplayer+"?image="+videos[i].getAttribute('poster')+".jpg&amp;file="+videos[i].data['video/mp4']+"\">\
<param name=\"movie\" value=\""+flashplayer+"?image="+videos[i].getAttribute('poster')+"&amp;file="+videos[i].data['video/mp4']+"\" />\
<img src=\""+videos[i].getAttribute('poster')+"\" width=\""+videos[i].getAttribute('width')+"\" height=\""+videos[i].getAttribute('height')+"\" />\
<p><strong>No video playback capabilities detected.</strong> <a href=\""+videos[i].data['video/mp4']+"\">MPEG4 / H.264 “.mp4” (Windows / Mac)</a></p>\
</object><!--[if gt IE 6]><!-->\
</object><!--<![endif]-->";	 */
			
			
			videos[i].innerHTML = payload;
			/* debug */
			document.getElementById('code').innerHTML = payload.replace(/</g,'&lt;').replace(/>/g,'&gt;');
		}
	}
});