window.onload = function(){
	Address();
}

// 添加管理地址

function Address(){
	var addBtn = document.getElementById("addAddr");
	var managementAdd = document.getElementById("managementAdd");
	var mask = document.getElementsByClassName("mask")[0];
	var addCon = document.getElementsByClassName("tc-popup")[0];
	var manCon = document.getElementsByClassName("tc-Management")[0];
	addBtn.onclick = function(){
		mask.style.display = "block";
		addCon.style.display = "block";
	}
	managementAdd.onclick = function(){
		mask.style.display = "block";
		manCon.style.display = "block";
	}
}