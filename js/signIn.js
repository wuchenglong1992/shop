window.onload = function() {
	var oLog = document.getElementsByClassName('login');
	var oPassWord = document.getElementsByClassName('forgot-password');
	var oReg = document.getElementsByClassName('registered');
	var oChang = document.getElementsByClassName('change-password');
	click(oLog,0);
	click(oPassWord,1);
	click(oReg,2);
	click(oChang,3);
}
function click(obj,index) {
	var ostat = document.getElementsByClassName('static-form'),
		obj = obj;
	[].forEach.call(obj,function(btn){
		btn.addEventListener("click",function(){
			for(var i=0;i<ostat.length;i++){
				ostat[i].style.display = 'none';
			}
			ostat[index].style.display = 'block';
		})
	})
}