/*
* @Author: lenovo
* @Date:   2018-09-09 15:05:50
* @Last Modified by:   lenovo
* @Last Modified time: 2018-09-09 16:40:49
*/
window.onload=function(){
	let lis=document.querySelector(".listsmall");
	let lis1=document.querySelector(".listbig");
	let yes=document.querySelector(".yes");
	let choose=document.querySelectorAll(".isuccess");
	let chooseboth=document.querySelectorAll(".choosebig")
	let choosetop=document.querySelector(".choosetop");
	// 点击确认订单
	yes.onclick=function(){
		lis.style.top=0.1+"rem";
		lis1.style.height=8.7+"rem";
	}
	// 点击上方选择支付方式
	choosetop.onclick=function(){
		lis.style.top=0.1+"rem";
		lis1.style.height=8.7+"rem";
	}
	// 更换选择状态
	for(let i=0;i<chooseboth.length;i++){
		chooseboth[i].onclick=function(){
			for(let j=0;j<choose.length;j++){
				choose[j].classList.remove("icolor");	
			}
				choose[i].classList.add("icolor");
		}
	}
}
