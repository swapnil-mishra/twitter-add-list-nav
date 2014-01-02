(function(){
	console.log("plugin loaded now")
	var navbarEl = document.getElementsByClassName('js-global-actions')
	if(navbarEl){
		navbarEl = navbarEl[0]
		var navLi = document.createElement("li")
		var navA = document.createElement("a")
		navA.innerHTML = "Lists"
		var userNameDiv = document.getElementsByClassName('js-mini-current-user')[0]
		navA.href = userNameDiv.getAttribute('data-screen-name') + "/lists"
		navLi.appendChild(navA)
		navbarEl.appendChild(navLi)
	}
})();