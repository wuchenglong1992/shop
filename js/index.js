window.onload = function () {
    tabmouse();
    banner();
    shop();
}
/*选项卡鼠标移入移出事件*/
function tabmouse(){
	var oUl = document.getElementsByClassName("normal-nav")[0];
    var oCon = document.getElementsByClassName("category-con0")[0];
    oUl.addEventListener('mouseenter',function(e){
    	var target = e.target;
    	if(target.tagName.toLowerCase() === 'li'){
    		toggleClass(this,target,"selected");
    		tabCon(parseInt(target.getAttribute("tag")));
    	}
    },true)
    oCon.addEventListener('mouseleave',function(){
    	toggleClass(oUl,'mouseleave',"selected");
    	tabCon('mouseleave');
    })
}
/*选项卡功能*/
function toggleClass(parent,children,cls){
	var oPar = parent;
	var oChi = children;
	var oLi = oPar.getElementsByTagName('li');
	for( item of oLi){
		if(hasClass(item,cls)){
			removeClass(item,cls);
		}
	}
	if(children=='mouseleave'){
		return
	}else{
		addClass(children,cls)
	}
}
/* 显示右侧对应内容*/
function tabCon(index){
	var oChi = document.getElementsByClassName("CategoryMenuPannel");
	var oPar = document.getElementsByClassName("pannel-con")[0];
	if(index === 'mouseleave'){
		oPar.style.display = 'none';
	}else{
		oPar.style.display = 'block';
	}
    [].forEach.call(oChi,function(btn,i){
    	btn.style.display = 'none';
    	if( i === index){
    		btn.style.display = 'block';
    	}
    })
}

/* 轮播切换*/
function banner(){
	var oAd = document.getElementById("ad");
	var oLi = oAd.getElementsByClassName("main-banner");
	var oUl = document.getElementsByClassName("slider-nav")[0].getElementsByTagName('ul')[0];
	var oLiSlid =oUl.getElementsByTagName('li');
	var iNow = 0;
	var timer = setInterval(auto,3000);
	function auto (){
		if(iNow == oLi.length-1){
			iNow = 0;
		}
		else{
			iNow++;
		};
		for(var i = 0;i<oLi.length;i++){
			fedeOut(oLi[i]);
		}
		fedeIn(oLi[iNow]);
		for( item of oLiSlid){
			if(hasClass(item,'active')){
				removeClass(item,'active');
			}
		}
		addClass(oLiSlid[iNow],'active')
	};
	for(var i = 0;i<oLi.length;i++)
	{
		oLi[i].onmouseover = function()
		{
			clearInterval(timer);
		};
		oLi[i].onmouseout = function()
		{
			timer = setInterval(auto,3000);
		};
	}
};
/*淡入*/
function fedeIn(obj){
	var iCur = getStyle(obj,'opacity');
	if(iCur==1){return false;}
	var value = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = 5;
		if(value == 100)
		{
			clearInterval(obj.timer);
		}
		else
		{
			value +=iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
		}
		},30);
};
/*淡出*/
function fedeOut(obj){
	var iCur =getStyle(obj,'opacity');
	if(iCur==0){return false;}
	var value = 100;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = -5;
		if(value == 0){
			clearInterval(obj.timer);
			}
			else
			{
				value +=iSpeed;
				obj.style.opacity = value/100;
				obj.style.filter = 'alpha(opacity='+value+')';
				}
		},30);
};
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj,false)[attr];
	};
};


