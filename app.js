document.addEventListener('DOMContentLoaded',()=>{
	console.log("Javascript is alive!")
	var greeting = document.getElementById("greeting")
	greeting.innerHTML="Hello, World!"
	var listelements = document.getElementsByTagName("li")
	for (var i=0;i<listelements.length;i++) {
		listelements[i].style="background-color:yellow;"
	}
	var greeting = document.querySelector("#greeting")
	
	var newimg = document.createElement("img")
	newimg.classList.add("img-changer")
	newimg.src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"
	greeting.appendChild(newimg)
	
	var newlist = document.createElement("ul")
	newlist.classList.add("todo-items")
	var listText = ['make coffee','eat donut','change diapers','drive to work']
	for (task of listText) {
		var todoItem = document.createElement("li")
		todoItem.innerHTML = task
		newlist.appendChild(todoItem)
	}
	document.body.appendChild(newlist)
	
	
	var clickSelector = (event)=>{
		var listitems = document.getElementsByTagName("li");
		for (var i=0;i<listelements.length;i++) {
			var item = listelements[i];
			item.classList.remove("selected")
			//console.log("Removed from "+item)
		}
		event.target.classList.add("selected")
		var changer = document.querySelector("img:not(.img-changer)")
		changer.src = "./images/"+event.target.innerHTML+".jpeg"
	}
	
	listelements = document.getElementsByTagName("li")
	for (var i=0;i<listelements.length;i++) {
		if (!listelements[i].parentElement.classList.contains("todo-items")) {
			listelements[i].addEventListener("click",clickSelector)
		}
	}
	
	document.getElementById("reset").addEventListener("click",(event)=>{
		var selectedItem = document.querySelector(".selected")
		selectedItem.classList.remove("selected")
		var changer = document.querySelector("img:not(.img-changer)")
		changer.src = "./images/panic.jpeg"
	})
	
	document.getElementById("ghosting").addEventListener("mouseover",(event)=>{
		event.target.remove()
	})
	document.getElementById("resize").addEventListener("mouseover",(event)=>{
		event.target.style.width=event.target.offsetWidth*2+"px"
	})
	document.getElementById("resize").addEventListener("mouseout",(event)=>{
		event.target.style.width=event.target.offsetWidth/2+"px"
	})
	var keySequence = []
	
	var arrayMatches = (arr1,arr2)=>{
		if (arr1.length!=arr2.length) {
			return false;
		}
		for (var i=0;i<arr1.length;i++) {
			if (arr1[i]!==arr2[i]) {
				return false;
			}
		}
		return true;
	}
	
	window.addEventListener("keydown",(event)=>{
		var keysListeningFor = [0,1,2,3,4,5,6,7,8,9]
		if (keysListeningFor.includes(Number(event.key))) {
			alert("I HATE NUMBERZZZ!")
		}
		keySequence.push(event.key)
		if (keySequence.length>10) {
			keySequence = keySequence.slice(1,11)
		}
		var konamiCodeArray = ["up","up","down","down","left","right","left","right","b","a"]
		if (arrayMatches(konamiCodeArray,keySequence.map(val=>{
			var newval = val.replace("Arrow","")
			newval = newval[0].toLowerCase() + newval.substr(1)
			return newval
		}))) {
			alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!")
		}
	})
})
