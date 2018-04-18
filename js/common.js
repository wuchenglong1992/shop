/*
	常见功能封装
*/

function addClass(obj,cls){
	if (!this.hasClass(obj, cls)) {
        obj.className += " " + cls;
    }
}
function removeClass(obj,cls){
	if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}
function hasClass(obj,cls){
	var objCls = obj.className,
		objclslst = objCls.split(" ");
	for(var x in objclslst) {
		if(objclslst[x] == cls){
			return true;
		}
	}
	return false;
}

/*购物车点击事件*/
function shop(){
	var oUl = document.getElementById("rightNav").getElementsByTagName('ul')[0];
	var boolen = true;
	oUl.addEventListener('click',function(e){
		console.log(1);
		var oLi = e.target.parentNode;
		var liName = oLi.className;
		switch(liName)
		{
			case 'shop':
				shopMove(oLi,boolen)
				if(boolen == true ){
					boolen = false
				}else {
					boolen = true
				}
				break;
		}
	},true)
}
/* 购物车移动动画*/
function shopMove(btn,boolen){
	var winWidth = window.innerWidth;
	var oDiv = document.getElementById("rightSlide");
	var oLi7 = oDiv.getElementsByTagName('ul')[0].getElementsByTagName("li")[6];
	if(boolen){
		oDiv.style.animation = "shopShow 0.3s";
		oDiv.style.animationFillMode = "forwards";
		btn.style.animation = "none";
		oLi7.style.animation = "none";
	}else{
		if(winWidth>=1221){
			oDiv.style.animation = "shopHidden 0.3s";
			oDiv.style.animationFillMode = "forwards";
		}else {
			oDiv.style.animation = "shopHidden2 0.3s";
			oDiv.style.animationFillMode = "forwards";
			setTimeout(function(){
				btn.style.animation = "block 0.3s";
				oLi7.style.animation = "block 0.3s";
				btn.style.animationFillMode = "forwards";
				oLi7.style.animationFillMode = "forwards";
			},200)
		}
	}
	
}

// 关键词联想


document.onkeyup = function() {
	var inputValue = document.getElementById("search-input").value;
	var script = document.createElement("script");
	script.src = "https://suggest.taobao.com/sug?code=utf-8&q="+ inputValue +"&callback=data&area=b2c";
	document.body.appendChild(script);
}
function data(el){
	var oDiv = document.querySelector(".search-lenovo");
	var oUl = document.querySelector(".search-lenovo ul");
	if(el.result.length <=0){
		oDiv.style.display = 'none'
	}else {
		oDiv.style.display = 'block'
	}
	oUl.innerHTML = '';
	el.result.forEach(function(btn){
		var oLi = document.createElement("li");
		oLi.innerHTML = "<li><a href='javascript:;'>"+ btn[0] +"</a><span>约"+ btn[1] +"个结果</span></li>";
		oUl.appendChild(oLi);
	})
}


