window.onload = function(){
	Address();
}

// 添加管理地址

function Address(){
	var addBtn = document.getElementsByClassName("more-order");
	var managementAdd = document.getElementById("J_TabView");
	var mask = document.getElementsByClassName("mask")[0];
	var close = document.getElementsByClassName("close-window")[0];
	[].forEach.call(addBtn,function(btn){
		btn.onclick = function(){
			mask.style.display = "block";
			managementAdd.style.display = "block"
		}
	})
	close.onclick = function(){
		mask.style.display = "none";
		managementAdd.style.display = "none"
	}
}