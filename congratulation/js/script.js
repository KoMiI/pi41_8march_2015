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
	if(select_on_off)
	{
		for(i = 0; i < name.length; i++)
		{
			name[i].className = "selected";
			name[i].style.top = i*5 + "px";
			name[i].style.left = i + 1 + "px";
		}
	}else{
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
	var name = document.getElementById('name_class').getElementsByTagName('span');
	for(i = 0; i < name.length; i++)
	{
		if(e.dataset.name != name[i].dataset.name)
		{
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
	var a = textJSON;
	var next = a.texts[0].ligament[Math.floor(Math.random()*a.texts[0].ligament.length)];
	while (next != 0)
	{
		$("#text_class").append(a.texts[next].text.replace(new RegExp("@NAME@",'g'),name) + " ");
		var next = a.texts[next].ligament[Math.floor(Math.random()*a.texts[next].ligament.length)];
	}
	document.getElementById('text_class').className = "up down";
}






























