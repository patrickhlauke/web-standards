/* Particle system based on http://www.zen-sign.com/experiments/jsemitter2/
   Patrick H. Lauke / February 2011 */

function Emitter(canvas) {
	this.canvas = canvas;
	this.size = 20;
	this.sizeLimit = 10;
	this.particles = new Array();
	this.canvasContext = this.canvas.getContext("2d");
	
	this.createParticle = function(x,y,size,h,s,l) {
		var particle = new Particle();
		particle.x = x;
		particle.y = y;
		particle.size = size;
		particle.h = h;
		particle.s = s;
		particle.l = l;
		this.particles.push(particle);
	}
	
	this.squirt = function(e) {
		var x = y = i = 0;
		if (e.touches) {
			for (i=e.touches.length; i>0; i--) {
				x=e.touches[i-1].clientX-e.target.offsetLeft;
				y=e.touches[i-1].clientY-e.target.offsetTop;
				this.createParticle(x,y,this.size,Math.round(Math.random()*60-30),Math.round(Math.random()*50+50), Math.round(Math.random()*50)+25);
			}
		} 	
		// fallback, but we don't bother for this demo
		this.draw();
	}
	
	this.draw = function() {
		this.canvasContext.clearRect(0, 0, 400, 400);
		
		for(var i = 0; i < this.particles.length; i++)
		{
			this.canvasContext.fillStyle = 'hsl('+this.particles[i].h+', '+this.particles[i].s+'%, '+this.particles[i].l+'%)'; 
			this.canvasContext.beginPath();
			this.canvasContext.arc(this.particles[i].x, this.particles[i].y, this.particles[i].size, 0, Math.PI*2, true); 
			this.canvasContext.fill();
		}
	}

	this.init = function() {
		this.reset();
		var that = this;
		this.canvas.addEventListener('mousedown', function(e) { e.preventDefault(); that.squirt(e); }, false);
		this.canvas.addEventListener('touchstart', function(e) { e.preventDefault(); that.squirt(e); }, false);
		this.canvas.addEventListener('touchmove', function(e) { e.preventDefault(); that.squirt(e); }, false);
	}
	
	this.reset = function(e) {
		if (this.particles.length > 0) {
			for(var i = 0; i < this.particles.length; i++)
			{
				delete this.particles[i];
				delete this.particles;
				this.particles = new Array();
			}
		}
	}
}

function Particle() {	
	this.x = 0;
	this.y = 0;
	this.size = 0;
	this.h = 0;
	this.s = 0;
	this.l = 0;
}