window.onload = function () {
	select_name();
	get_css();
}

//    	global
var select_on_off = false;
// 		global

function get_css()
{
	var datetoday = new Date();
	var timenow = datetoday.getTime();
	datetoday.setTime(timenow);
	var thehour = datetoday.getHours();
	var dis; 	
	if (thehour > 20)
		dis = "night";
	else if (thehour > 17)
		dis = "sunset";
	else if (thehour > 12)
		dis = "afternoon";
	else if (thehour > 7)
		dis = "morning";
	else if (thehour > 4)
		dis = "sunrise";
	else 
		dis = "night";
	document.getElementsByTagName('body')[0].className = dis;
}

function select_name(){
	var nameZ = document.getElementById('name_class').style.marginTop = window.innerHeight/2 - 130 +'px';
	var name = document.getElementById('name_class').getElementsByClassName('selected');
	for(i = 0; i < name.length; i++)
	{
		name[i].style.zIndex = 999-i;
		name[i].style.top = i*5 + 5 + "px";
		name[i].style.left = i + 1 + "px";
	}
	
}

function select_u_d(){
	var name = document.getElementById('name_class').getElementsByClassName('selected');
	console.log("1");
	if(select_on_off)
	{
		console.log("2");
		for(i = 0; i < name.length; i++)
		{
			name[i].className = "selected";
			name[i].style.top = i*5 + "px";
			name[i].style.left = i + 1 + "px";
		}
	}else{
		console.log("3");
		for(i = 0; i < name.length; i++)
		{
			name[i].className = "selected active";
			name[i].style.top = (i + 1)*80 + "px";
			name[i].style.left = "0px";
		}
	}
	select_on_off = !select_on_off;
}

function click_name(e)
{
	console.log(e.title);
	var name = document.getElementById('name_class').getElementsByTagName('span');
	for(i = 0; i < name.length; i++)
	{
		if(e.dataset.name != name[i].dataset.name)
		{
			console.log(e.dataset.name);
			console.log(name[i].dataset.name);
			name[i].className = "delay";
			var x, y;
			switch (Math.floor(Math.random() * (4))){
				case 0:
					x = Math.floor(Math.random() * (window.innerWidth + 1));
					y = -Math.floor(window.innerHeight + 200);
				break;
				case 1:
					x = Math.floor(window.innerWidth + 200);
					y = Math.floor(Math.random() * (window.innerHeight + 1));
				break;
				case 2:
					x = Math.floor(Math.random() * (window.innerWidth + 1));
					y = Math.floor(window.innerHeight + 200);
				break;
				case 3:
					x = -Math.floor(window.innerWidth + 200);
					y = Math.floor(Math.random() * (window.innerHeight + 1));
				break;
			}
			name[i].style.top = y + "px";
			name[i].style.left = x + "px";
		}
	}
	generet(e.dataset.name);
}

function generet(name)
{
<<<<<<< HEAD:congratulation/js/script.js
	var a = textJSON;
	a.texts[0]
	var next = a.texts[0].ligament[Math.floor(Math.random()*a.texts[0].ligament.length)];
	while (next != 0)
	{
		console.log(name)
		$("#text_class").append(a.texts[next].text.replace(new RegExp("@NAME@",'g'),name) + " ");
		var next = a.texts[next].ligament[Math.floor(Math.random()*a.texts[next].ligament.length)];
=======
	$.ajax({
        type: "GET",
        url: "xml/text.xml",
        dataType: "xml",
        success: xmlParser
    });
}

function xmlParser(xml) {
	var next;
	console.log($(xml).find("start").text());
	$(xml).find("page > *").each(function () {
		console.log($(this).find("ligament").text().trim());
		next = next_text($(this).find("ligament").text());
	});
	while(next != "Null"){
		console.log($(xml).find(next).find("text").text());
		$("#text_class").append(textt($(xml).find(next).find("text").text()));
		next = next_text($(xml).find(next).find("ligament").text());
		console.log(next);
		$("next").fadeIn(1000);
>>>>>>> origin/master:js/script.js
	}
	document.getElementById('text_class').className = "up down";
}

<<<<<<< HEAD:congratulation/js/script.js
=======
function textt(input)
{
	return input.replace(new RegExp("@NAME@",'g'),name);
}

function get_css()
{
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
>>>>>>> origin/master:js/script.js


































