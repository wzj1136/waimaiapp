window.onload=function () {
    let erroy1=document.querySelector(".erroy1");
    let erroy2=document.querySelector(".erroy2");
    let user=document.querySelector(".user");
    let pass=document.querySelector(".pass");
    let btn=document.querySelector("button");
    let num=document.querySelector(".yanzhengma");
    let btn1=document.querySelector(".yanz");
    let dui1=document.querySelectorAll(".icon-duigou")[0];
    let dui2=document.querySelectorAll(".icon-duigou")[1];
    let dui3=document.querySelectorAll(".icon-duigou")[2];
    console.log(dui1,dui2);

    btn.onclick=function () {
        if(user.value.length!=11 && pass.value.length!=6){
            erroy1.style.display="flex";
            erroy2.style.display="flex";
        }else if (user.value.length!=11 && pass.value.length==6){
            erroy1.style.display="flex";
            erroy2.style.display="none";
        }else if (user.value.length==11 && pass.value.length!=6){
            erroy2.style.display="flex";
            erroy1.style.display="none";
        }
        if(user.value.length==11 && pass.value.length==6 && num.value.length!=4){
            erroy2.style.display="none";
            erroy1.style.display="none";
        }if ((user.value.length==11 && pass.value.length==6 && num.value.length==4)) {
            window.open("food.html");
        }
    }
    
    user.onblur=function(){
        if (user.value.length==11) {
            dui1.style.display="block";
        }
        if (user.value.length==11 && pass.value.length==6 && num.value.length==4) {
            btn.classList.add("but-color");
        }
    }
    pass.onblur=function(){
        if (pass.value.length==6) {
            dui3.style.display="block";
        }
        if (user.value.length==11 && pass.value.length==6 && num.value.length==4) {
            btn.classList.add("but-color");
        }
    }
    num.onblur=function(){
        if (num.value.length==4) {
            dui2.style.display="block";
        }
        if (user.value.length==11 && pass.value.length==6 && num.value.length==4) {
            btn.classList.add("but-color");
        }
    }

}