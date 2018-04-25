window.onload = function () {
	shop();
	preferential();
	tabClick();
	bdTab();
	mouseenter();
	commentsImg();
	switchableBtn();
}
// 优惠点击
function preferential(){
	var more= document.getElementsByClassName("more");
	var moreCon= document.getElementsByClassName("tm-floater-Box")[0];
	more[0].onclick = function(){
		moreCon.style.display = 'block';
	}
	more[1].onclick = function(){
		moreCon.style.display = 'none';
	}
}

// 规格选择
function tabClick(){
	var oUl = document.getElementsByClassName("tb-prop-ul");
    [].forEach.call(oUl,function(btn,index){
		btn.addEventListener("click",function(e){
			eachRemoveClassName(e.path[2].children,"selected");
			addClass(e.path[1],'selected');
		},true)
	})
}
// 评论与详情切换
function bdTab(){
	var oUl = document.getElementById("J_TabBar");
	var oLi = oUl.getElementsByTagName("li");
	var oDiv = document.getElementsByClassName("mainwrapCon");
	[].forEach.call(oLi,function(btn,index){
		btn.onclick = function(){
			eachRemoveClassName(oLi,"tm-selected");
			for( item of oDiv){
				item.style.display = "none";
			}
			addClass(this,'tm-selected');
			oDiv[index].style.display = 'block';
		}
	})
}
// 鼠标移入查看大图
function mouseenter() {
	var oTb = document.getElementsByClassName("tb-thumb-warp")[0],
		oUl = oTb.getElementsByTagName("ul")[0],
		oLi = oUl.getElementsByTagName("li"),
		oImg = document.getElementById("J_ImgBooth"),
		oBooth = document.getElementsByClassName("tb-booth")[0];
		oDiv = document.getElementsByClassName("booth-img-detail")[0],
		oSpan = document.getElementsByClassName("ks-imagezoom-lens")[0];
	oUl.addEventListener('mouseenter',function(e){
		var target = e.target;
		if(target.tagName == "LI"){
			eachRemoveClassName(oLi,"active");
			addClass(target,"active");
			oImg.src = target.childNodes[0].childNodes[0].src;
		}
	},true)
	
	oBooth.addEventListener('mouseenter',function(e){
		oSpan.style.display = 'block';
		oDiv.style.display = 'block';
		oDiv.style.backgroundImage = "url("+ oImg.src +")";
	},true)
	oBooth.addEventListener('mouseout',function(e){
		oSpan.style.display = 'none';
		oDiv.style.display = 'none';
	},false)
	oBooth.addEventListener('mousemove',function(e){
		var x = e.clientX;
		var y = e.clientY;
		var t = oBooth.getBoundingClientRect().top;
		var l = oBooth.getBoundingClientRect().left;
		var _left = x - l - oSpan.offsetWidth / 2;
		var _top = y - t - oSpan.offsetHeight / 2;
		if(_top <= 0){
			_top = 0;
		}else if(_top >= oImg.offsetHeight - oSpan.offsetHeight){
			_top = oImg.offsetHeight - oSpan.offsetHeight;
		}
		if(_left <= 0){
			_left = 0;
		}else if(_left>= oImg.offsetWidth - oSpan.offsetWidth){
			_left = oImg.offsetWidth - oSpan.offsetWidth;
		}
		oSpan.style.top = _top + 'px';
		oSpan.style.left = _left + 'px';
		var positionX = _left / (oImg.offsetWidth - oSpan.offsetWidth);
		var positionY = _top / (oImg.offsetHeight - oSpan.offsetHeight);
		oDiv.style.backgroundPosition = positionX*100 + '% ' + positionY*100 + '%';
	})
}

//评论区域点击查看大图
function commentsImg(){
	var oUl = document.getElementsByClassName("tm-m-photos-thumb");
	var oImg = document.getElementsByClassName("tm-m-photo-viewer-img");
	[].forEach.call(oUl,function(btn,index){
		var oLi = btn.getElementsByTagName("li");
		btn.addEventListener('click',function(e){
			if(e.target.tagName==="IMG"){
				if(hasClass(e.path[1],"tm-current")){
					removeClass(e.path[1],"tm-current")
					oImg[index].parentNode.style.display = 'none'
				}else{
					eachRemoveClassName(oLi,"tm-current");
					addClass(e.path[1],"tm-current");
					oImg[index].parentNode.style.display = 'block'
					oImg[index].src = e.target.src;
				}
			}
		},true)
	})
}


// 右侧广告位滚动
function switchableBtn(){
	var aPrev = document.getElementsByClassName("ald-switchable-prev-btn")[0],
		aNext = document.getElementsByClassName("ald-switchable-next-btn")[0];

	aPrev.onclick = function(){
		toRun(-5);
	}
	aNext.onclick = function(){
		toRun(5);
	}
}
function toRun(speed){
	var oUl = document.getElementsByClassName("ald-switchable-content")[0],
		oLi = oUl.getElementsByTagName("li"),
		distance = oLi[0].offsetHeight*3,
		timer = null;
	// function move(){
	//	num += speed;
		
		// if(num >= distance || num <  -distance){
		// 	clearInterval(timer);
		// }else{
		// 	timer = setInterval(move,10);
		// }
		// if(Math.abs(oUl.offsetTop) == oUl.offsetHeight/2)
		// {
		// 	oUl.style.top = 0;
		// }
	//}
		// clearInterval(timer);
		timer = setInterval(function(){
			oUl.style.top = oUl.offsetTop + speed + 'px';
		},10)
}