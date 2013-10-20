function Plasma(canvas,noisegenerator) {
	var _ = {};
	_.c = canvas;
	_.ctx = canvas.getContext("2d");
	_.z = 0;
	_.step = 0.02;
	_.granularity = 10;
	_.n = noisegenerator;

	
	this.draw = function() {
		_.z+=_.step;
		if ((_.z>100)||(_.z<-100)) { _.step = 0-_.step; }
		_.ctx.clearRect(0, 0, _.c.width, _.c.height);
		for (i=0; i<_.c.width; i+=_.granularity) {
			for (j=0; j<_.c.height; j+=_.granularity) {
				_.ctx.fillStyle = 'hsl('+_.n.noise(i/500,j/500,_.z)*450+','+((i+j)/(_.c.width+_.c.height))*70+'%,'+Math.abs(_.n.noise(i/400,j/400,_.z))*200+'%)'; 
				_.ctx.fillRect(i,j, _.granularity, _.granularity);
			}
		}
	};
}