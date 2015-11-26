$(document).ready(function() {
	var days = ["Söndag...", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag!!", "Lördag!!"];
	var colors = ["#88A825", "#CF4A30", "#ED8C2B", "#3BADA0", "#911146", "#AD2E0D", "#35203B"];
	var d = new Date();
	var today = d.getDay();
	document.getElementById("dayheader").innerHTML = days[today];
	document.body.style.backgroundColor = colors[today];
});

