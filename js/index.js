
window.onload = function(){
//	var oPage = document.getElementById('page');
//	var oBanner_img = document.getElementById('banner_img');
//	var aLi = oPage.getElementsByTagName('li');
//	var aImg = oBanner_img.getElementsByTagName('img');
//	for( var i = 0; i<aLi.length; i++ ){
//		aLi[i].index = i;
//		aLi[i].onclick = function(){
//			for( var i = 0; i<aLi.length; i++ ){
//				aLi[i].className = '';
//				aImg[i].className = '';
//			}
//			this.className = 'active';
//			aImg[this.index].className = 'oblock';
//		}
//	}

	tab('page','li','banner_img','img');
	tab('dl_tab1','li','dl_tab2','div');
	tab('role_name','li','role_detail','img');
	tab('player','li','player_bottom','div');
	tab('media','li','media_bottom','div');
	tab('vision','li','vision_bottom','ul');
	
	function tab(a,b,c,d){
		var oA = document.getElementById(a);
		var aB = oA.getElementsByTagName(b);
		var oC = document.getElementById(c);
		var aD = oC.getElementsByTagName(d);
		for( var i = 0; i<aB.length; i++ ){
			aB[i].index = i;
			aB[i].onclick = function(){
				for( var i = 0; i<aB.length; i++ ){
					aB[i].className = '';
					aD[i].className = '';
				}
				this.className = 'active';
				aD[this.index].className = 'oblock';
			}
		}
	}
	
}
