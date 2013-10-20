/* A basic recreation of http://www.cesmes.fi/#pallo.swf using JavaScript and Canvas
   Particle system based on http://www.zen-sign.com/experiments/jsemitter2/
   Patrick H. Lauke / February 2010 */

function Emitter(canvas) {
	this.particles = new Array();
	this.sizeLimit = 5;
	this.ageLimit = 20;
	this.canvas = canvas;
	this.canvasContext = canvas.getContext("2d");
	
	this.createParticle = function(x,y,size) {
		var particle = new Particle();
		particle.x = x;
		particle.y = y;
		particle.size = size;
		particle.age = Math.random()*this.ageLimit;
		this.particles.push(particle);
	}
	
	this.step = function() {
		var temp = this.particles.length;
		for(var i = 0; i < temp; i++)
		{
			this.particles[i].age += 0.2;
			if((this.particles[i].age > this.ageLimit) && (this.particles[i].size > this.sizeLimit))
			{
				this.particles[i].size=this.particles[i].size/2;
				this.createParticle(this.particles[i].x+this.particles[i].size,this.particles[i].y-this.particles[i].size,this.particles[i].size);
				this.createParticle(this.particles[i].x+this.particles[i].size,this.particles[i].y+this.particles[i].size,this.particles[i].size);
				this.createParticle(this.particles[i].x-this.particles[i].size,this.particles[i].y+this.particles[i].size,this.particles[i].size);
				this.particles[i].x=this.particles[i].x-this.particles[i].size;
				this.particles[i].y=this.particles[i].y-this.particles[i].size;
				this.particles[i].age=0;
			}
		}
		this.draw();
	}
	
	this.draw = function() {
		this.canvasContext.clearRect(0, 0, 400, 400);
		for(var i = 0; i < this.particles.length; i++)
		{
			this.canvasContext.fillStyle = this.particles[i].style; 
			this.canvasContext.beginPath();
			this.canvasContext.arc(this.particles[i].x, this.particles[i].y, this.particles[i].size, 0, Math.PI*2, true); 
			this.canvasContext.fill();
		}
		
		document.getElementById('pn').innerHTML = this.particles.length;
	}
	
	this.init = function() {
		this.createParticle(200,200,200);
		this.draw();
		var that = this;
		setInterval(function() { that.step(); }, 100); 
	}
}

function Particle() {	
	this.x = 0;
	this.y = 0;
	this.size = 0;
	this.age = 0;
	this.style = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
}