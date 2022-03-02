window.onload = clock;
function clock(){
	var today = new Date();
	var time = today.toLocaleTimeString();
	document.getElementById('date').innerHTML = today.toDateString();
	document.getElementById('time').innerHTML = time;
	setTimeout(clock, 1000);
}