/*
* @Author: lenovo
* @Date:   2018-09-13 11:59:00
* @Last Modified by:   lenovo
* @Last Modified time: 2018-09-18 21:22:37
*/
window.onload=function(){
	let add=document.querySelectorAll(".tianjia")[0];
	let rem=document.querySelectorAll(".jianqu")[0];
	let num=document.querySelector(".times");
	let nums=document.querySelector(".timess");
	let newmoney=document.querySelector(".newmoney");
	let dis=document.querySelector(".blockk");
	let no=document.querySelector(".nonee");
	let money=document.querySelector(".price");
	let carbig=document.querySelector(".car");
	let car=document.querySelector(".icon-gouwuche");
	let rbottom=document.querySelector(".bottom-right");
	let cover=document.querySelector(".zhezhao");
	let covadd=document.querySelector(".covadd");
	let covrem=document.querySelector(".covrem");
	let number=0;

		add.onclick=function(){
		number++;
		rem.style.display="block";
		num.style.display="block";
		num.innerHTML=number;
		dis.style.display="block";
		no.style.display="none";
		money.innerHTML=8*number;
		carbig.style.background="#FFDD23";
		car.style.color="#000";
		
		
		if (money.innerHTML>=20) {
			rbottom.style.background="#FFDD23";
			rbottom.style.color="#000";
			rbottom.onclick=function(){
				nums.innerHTML=number;
				newmoney.innerHTML=money.innerHTML;
				cover.style.display="block";
			}
		}
		

	}
	
	rem.onclick=function(){
		number--;
		money.innerHTML=8*number;
		num.innerHTML=number;
		if (number==0) {
		dis.style.display="none";
		no.style.display="block";	
		rem.style.display="none";
		num.style.display="none";
		carbig.style.background="#5E5252";
		car.style.color="#fff";
		rbottom.style.background="#5D5151";
		rbottom.style.color="#fff";
		}	
		if (money.innerHTML<20) {
			rbottom.style.background="#5D5151";
			rbottom.style.color="#fff";
		}
	}
	covadd.onclick=function(){
		number++;
		nums.innerHTML=number;
		newmoney.innerHTML=8*number;
	}
	covrem.onclick=function(){
		number--;
		nums.innerHTML=number;
		newmoney.innerHTML=8*number;
		if (number==0) {
			cover.style.display="none";
		}
	}










}
