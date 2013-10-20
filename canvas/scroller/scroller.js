function Scroller(canvastarget,message,font) {
	var _ = {};
	_.phase = 0;
	_.scrollpos = -1;
	_.c = canvastarget;

	this.init = function() {
		_.message = message;
		_.font = font;
		_.ctx_target= _.c.getContext('2d');
		_.t=document.createElement('canvas');
		
		_.ctxt=_.t.getContext('2d');

		_.ctxt.textBaseline = "bottom";
		_.ctxt.font = _.font;

		_.dim = _.ctxt.measureText(message);

		_.t.setAttribute('width',_.dim.width);
		_.t.setAttribute('height',54);

		_.ctxt.font = _.font;

		_.ctxt.clearRect(0,0,_.t.width,_.t.height);
		_.ctxt.fillText(_.message, 0, _.t.height);

		_.ctxt.fillRect(_.scrollpos,0,1,_.t.height);
	}
	
	this.draw = function() {
		_.ctx_target.clearRect(0,0,_.c.width,_.c.height);
		var temp_scrollpos = _.scrollpos;
		for(var i=0;i<_.c.width;i++) {
			temp_scrollpos+=1;
			if (temp_scrollpos>=_.t.width) temp_scrollpos=0;
			_.ctx_target.drawImage(_.t,temp_scrollpos,1,1,_.t.height-1,i,(_.c.height/2-_.t.height/2)+((_.c.height/5)*Math.sin(((i+_.phase)/_.c.width)*Math.PI*2)),1,_.t.height);
		}
		_.scrollpos+=4;
		if (_.scrollpos>=_.t.width) _.scrollpos=0;
		_.phase+=2;
	}
}