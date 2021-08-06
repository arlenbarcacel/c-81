var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContent("2d");
var color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=1;
ctx.arc(500,400,40,0,2*Math.PI);
ctx.stroke();
