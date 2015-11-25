$(document).ready(function() {
	var days = ["Söndag...", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag!!", "Lördag!!"];
	var d = new Date();
	var today = days[d.getDay()];
	document.getElementById("dayheader").innerHTML = today;
});

