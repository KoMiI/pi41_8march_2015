window.onload = function () {
	select_name();
}

//    	global
var select_on_off = false;

// 		global

function select_name(){
	var nameZ = document.getElementById('name_class').style.marginTop = window.innerHeight/4*1.5 +'px';
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
	generet();
	xmlParser();
}

function generet()
{
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
	}
	
}

function next_text(input){
	console.log(input);
	arr = input.split("\n ");
	return arr[Math.floor(Math.random()*arr.length)];
}

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


































