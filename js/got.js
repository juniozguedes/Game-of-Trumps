counter = 0

function addBall(){
	var dv = document.getElementById('counter');
	var div = document.getElementById('center');
	var array = ['st0.png', 'st1.png', 'st2.png', 'st3.png','st4.png', 'st5.png', 'st6.png','st7.png', 'st8.png', 'st9.png']
	var rand = Math.floor(Math.random()*array.length);
	var ball = document.createElement("div");
	ball.setAttribute("class","ball");
	var p1 = Math.floor(Math.random() * 100);
	var p2 = Math.floor(Math.random() * 100);
		if (p1 > 90){
		p1 = p1 - 12;
	}
		if (p2 > 90){
		p2 = p2 - 12;
	}
	ball.setAttribute("style","left:"+p1+"%;top:"+p2+"%;"+"background-image: url(img/st"+rand+".png); height: 140px; width: 140px;");
	ball.setAttribute("onclick","blow(this);counter++");
	div.appendChild(ball);
	dv.innerHTML = "<h1>Trump counter:"+counter+"</h1>";
}

function blow(elemento){
	var div = document.getElementById('center');
	div.removeChild(elemento)
}


function start(){
	interval = 1000
	setInterval(addBall, interval);
}


