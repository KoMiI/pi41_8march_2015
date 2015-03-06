function getCSS()
{
	alert("hklkhjkl");
	var datetoday = new Date();
	var timenow = datetoday.getTime();
	datetoday.setTime(timenow);
	var thehour = datetoday.getHours();
	var dis; 	
	if (thehour > 20)
		dis = "css/night.css";
	else if (thehour > 17)
		dis = "css/sunset.css";
	else if (thehour > 12)
		dis = "css/afternoon.css";
	else if (thehour > 7)
		dis = "css/morning.css";
	else if (thehour > 4)
		dis = "css/sunrise.css";
	else 
		dis = "css/night.css";
	var css = "<"; 
	css+="link rel='stylesheet' href='" + dis + "' \/"; 
	css+=">";
	document.write(css);
}