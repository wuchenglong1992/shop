window.onload = function () {
	shop();
	preferential();
	tabClick();
	bdTab();
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
			for( item of e.path[2].children){
				if(hasClass(item,'selected')){
					removeClass(item,'selected');
				}
			}
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
			for( item of oLi){
				if(hasClass(item,'tm-selected')){
					removeClass(item,'tm-selected');
				}
			}
			for( item of oDiv){
				item.style.display = "none";
			}
			addClass(this,'tm-selected');
			oDiv[index].style.display = 'block';
		}
	})
}