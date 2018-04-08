window.onload = function () {
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
    	tabCon();
    })
}
/*切换选项卡 */
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
/* 显示右侧对应内容*/
function tabCon(index){
	var oChi = document.getElementsByClassName("CategoryMenuPannel");
	var oPar = document.getElementsByClassName("pannel-con")[0];
	console.log(oPar);
    [].forEach.call(oChi,function(btn,i){
    	btn.style.display = 'none';
    	oPar.style.display = 'none';
    	if( i === index){
    		oPar.style.display = 'block';
    		btn.style.display = 'block';
    	}
    })
}