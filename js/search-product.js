window.onload = function () {
	shop();  //购物车
	moreOptions(); 
	showList(); // 商品展示类型
	storeList(); // 店铺商品展开
	proThumb(); //商品信息轮播条图片点击
	productThumb();//商品信息轮播条
}

function moreOptions(){
	var oA = document.getElementsByClassName("more-options");
	var oUl = document.getElementsByClassName("av-collapse")[0];
	var oUl2 = document.getElementsByClassName("av-collapse-kind")[0];
	var oFmenu = document.getElementsByClassName("fMenu-con")[0];
	var moreChoose = document.getElementsByClassName("attrExtra-more")[0];
	var chooseCon= document.getElementsByClassName("j_MoreAttrsCont")[0];
	var bool = true;
	chlickEven(oA[0],oUl,'av-scroll','av-collapse');
	chlickEven(oA[1],oUl2,'av-expand','av-collapse');
	chlickEven(oA[2],oFmenu,'fMenu-expand','fMenu-collapse');
	moreChoose.onclick = function(){
		if(bool){
			chooseCon.style.display = 'block';
			this.innerHTML = "精简选项<span class='iconfont icon-icon--1'></span>";
			bool = false;
		}else {
			chooseCon.style.display = 'none';
			this.innerHTML = "更多选项<span class='iconfont icon-weibiaoti35'></span>"
			bool = true;
		}
	}
}

function chlickEven(even,parent,newclass,oldclass){
	var bool = true;
	even.onclick = function(){
		if(bool){
			removeClass(parent,oldclass);
			addClass(parent,newclass);
			this.innerHTML = "收起<span class='iconfont icon-icon--1'></span>";
			bool = false;
		}else{
			removeClass(parent,newclass);
			addClass(parent,oldclass);
			this.innerHTML = "更多<span class='iconfont icon-weibiaoti35'></span>";
			bool = true;
		}
	}
}

// 商品展示类型
function showList(){
	var oA = document.getElementsByClassName("showList");
	var oPro = document.getElementsByClassName("productShow");
	[].forEach.call(oA,function(btn,index,all){
		btn.onclick = function(){
			for( item of all){
				if(hasClass(item,'active')){
					removeClass(item,'active');
				}
			}
			for( item of oPro){
				item.style.display = 'none';
			}
			oPro[index].style.display = 'block';
			addClass(btn,'active');
		}
	})
}
// 店铺商品展开
function storeList(){
	var oPro = document.getElementsByClassName("sHe-product");
	[].forEach.call(oPro,function(btn,index){
		var oPatent = oPro[index].parentNode.parentNode.parentNode.children[1];
		btn.onclick = function(){
			if(hasClass(oPatent,'productHide')){
				removeClass(oPatent,'productHide');
				btn.children[1].className = "iconfont icon-icon--1";
			}else{
				addClass(oPatent,'productHide');
				btn.children[1].className = "iconfont icon-weibiaoti35";
			}
		}
	})
}
//商品信息轮播条
function proThumb(){
	var oKs = document.getElementsByClassName("ks-switchable-content");
	[].forEach.call(oKs,function(btn,index){
		btn.addEventListener("click",function(e){
			for( item of e.path[2].children){
				if(hasClass(item,'proThumb-selected')){
					removeClass(item,'proThumb-selected');
				}
			}
			addClass(e.path[1],'proThumb-selected');
			e.path[5].children[0].children[0].children[0].src = e.path[0].src;
		},true)
	})
}
// 滚动
function productThumb(){
	var aPro = document.getElementsByClassName("productThumb");
	[].forEach.call(aPro,function(btn){
		var to_left = btn.getElementsByClassName("proThumb-prev")[0],
			to_right = btn.getElementsByClassName("proThumb-next")[0],
			aUl = btn.getElementsByClassName("ks-switchable-content")[0],
			aLi = aUl.getElementsByTagName("li");
		if(aLi.length<=5){
			to_left.style.display = 'none';
			to_right.style.display = 'none';
		}else{
			to_left.onclick = function(){
				proMove(0,3,btn)
			}
			to_right.onclick = function(){
				proMove(1,3,btn)
			}
		}
		
	})
}
// direction 0为左, 1为右
// num 点击切换的数量
// 父级元素
function proMove(direction,num,parent) {
	var aContent = parent.getElementsByClassName("proThumb-wrap")[0],
		aUl = aContent.getElementsByClassName("ks-switchable-content")[0],
		aLi = aUl.getElementsByTagName("li"),
		distance = (aLi) && (aLi[0].offsetWidth+3),
		viewNumber = ~~(aContent.offsetWidth / aLi[0].offsetWidth),
		speed = 5;
	aContent.tabNumber = aContent.tabNumber || 0;
	if(direction){
		aContent.tabNumber -= num;
		aContent.tabNumber = Math.max(aContent.tabNumber,-aLi.length+viewNumber);
	}else{
		aContent.tabNumber += num;
		aContent.tabNumber = Math.min(aContent.tabNumber,0);
	}
	aUl.style.left = aUl.style.left || '0px';
	clearTimeout( aContent.timer);
	(function move(){
		if(direction){
			if(parseInt(aUl.style.left) >= aContent.tabNumber *distance ){
				aUl.style.left = aUl.offsetLeft - speed +'px';
				aContent.timer = setTimeout(move);
			}else{
				return
			}
		}else{
			if(parseInt(aUl.style.left) <= aContent.tabNumber *distance ){
				aUl.style.left = aUl.offsetLeft + speed +'px';
				aContent.timer = setTimeout(move);
			}else{
				return
			}
		}
	})()
}