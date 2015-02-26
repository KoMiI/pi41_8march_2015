window.onload = function () {
	select_name();
}

//    	global
var select_on_off = false;

// 		global

function select_name(){
	var name = document.getElementById('name_class').getElementsByClassName('selected');
	for(i = 0; i < name.length; i++)
	{
		name[i].style.zIndex = 999-i;
		name[i].style.top = i*5 + "px";
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
			name[i].style.top = i*5 + "px";
			name[i].style.left = i + 1 + "px";
		}
	}else{
		console.log("3");
		for(i = 0; i < name.length; i++)
		{
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
					y = -Math.floor(window.innerHeight/2 + 200);
				break;
				case 1:
					x = Math.floor(window.innerWidth/2 + 200);
					y = Math.floor(Math.random() * (window.innerHeight + 1));
				break;
				case 2:
					x = Math.floor(Math.random() * (window.innerWidth + 1));
					y = Math.floor(window.innerHeight/2 + 200);
				break;
				case 3:
					x = -Math.floor(window.innerWidth/2 + 200);
					y = Math.floor(Math.random() * (window.innerHeight + 1));
				break;
			}
			name[i].style.top = y + "px";
			name[i].style.left = x + "px";
		}
	}
}




