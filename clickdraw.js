/*
 * Team yuye
 * Jen Yu and Helen Ye
 * SoftDev Period 7
 * 03-09-2018
 * K#11: All That Bouncin’ Bouncin’ Bouncin’ Bouncin’ Bouncin’ Bouncin’ Bouncin’ *       Bouncin’ Bouncin’ 
 */

var svg = document.getElementById("slate");
var width = svg.getAttribute("width");
var height = svg.getAttribute("height");

var clear = document.getElementById("clear");

console.log(clear);

//creates a circle object w builtin fxns
var circle = function(x, y, rad, color){
    var c = {
	circle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
	display: function(){
	    svg.appendChild(this.circle);
	},
	getColor: function(){
	    return this.circle.getAttribute("fill");
	},
	getX: function(){
	    return this.circle.getAttribute("cx");
	},
	getY: function(){
	    return this.circle.getAttribute("cy");
	},
	getRadius: function(){
	    return this.circle.getAttribute("r");
	},
	setColor: function(newColor){
	    this.circle.setAttribute("fill", newColor);
	},
	setX: function(newX){
	    this.circle.setAttribute("cx", newX);
	},
	setY: function(newY){
	    this.circle.setAttribute("cy", newY);
	},
	setRadius: function(newRad){
	    this.circle.setAttribute("r", newRad);
	},
	dx : 3,
	dy : 4,
	getDX: function(){
	    return this.dx;
	},
	getDY: function(){
	    return this.dy;
	},
	setDX: function(n){
	    this.dx = n;
	},
	setDY: function(n){
	    this.dy = n;
	}
    }
    c.setX(x);
    c.setY(y);
    c.setRadius(rad);
    c.setColor(color);
    c.circle.setAttribute("stroke", "black");
    return c;
}
var balls = [];
var a_id = 0;

var newBall = function(e){
    stopA();
    a_id = setInterval(bouncebounce, 20);
    rX = Math.floor(Math.random() * (width - 10));
    rY = Math.floor(Math.random() * (height - 10));
    console.log(rX);
    var c = circle(rX, rY, 20, "#7a4bb4");
    c.display();
    balls.push(c);
}
//when clicked
var bouncebounce = function(){
    for(i = 0; i < balls.length; i ++){
	c = balls[i];
	x = Number(c.getX());
	dx = Number(c.getDX());
	y = Number(c.getY());
	dy = Number(c.getDY());
	r = Number(c.getRadius());
	
	nX = Number(x + dx);
	nY = Number(y + dy);
	if(nX > width-r) nX = Number(width-r);
	if(nX < r) nX = Number(r);
	if(nY > height-r) nY = Number(height-r);
	if(nY < r) nY = Number(r);
	c.setX(nX);
	c.setY(nY);

	if (nX >= width-r || nX <= r)dx *= -1;
	if (nY >= height-r || nY <= r) dy *= -1;
	c.setDX(dx);
	c.setDY(dy);
	//console.log(dx, dy);
    }
}

//stops the animation (id known through global var)
var stopA = function(){
    clearInterval(a_id);
}

//clears the screen
var clearCallBack = function(e){
    while(svg.firstChild){
	svg.removeChild(svg.firstChild);
    }
    balls = [];
    stopA();
}

//add the event listeners
svg.addEventListener("click", newBall);
clear.addEventListener("click", clearCallBack);

