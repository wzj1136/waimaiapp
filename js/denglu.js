window.onload=function () {
    let erroy1=document.querySelector(".erroy1");
    let erroy2=document.querySelector(".erroy2");
    let user=document.querySelector(".user");
    let pass=document.querySelector(".pass");
    let btn=document.querySelectorAll("button");
    let dui1=document.querySelectorAll(".icon-duigou")[0];
    let dui2=document.querySelectorAll(".icon-duigou")[1];
    

    btn[0].onclick=function () {
        if(user.value.length==11 && pass.value.length==6){
            window.open("food.html");
        }else if (user.value.length!=11 && pass.value.length==6){
            erroy1.style.display="flex";
            erroy2.style.display="none";
        }else if (user.value.length==11 && pass.value.length!=6){
            erroy2.style.display="flex";
            erroy1.style.display="none";
        }
        else{
            erroy1.style.display="flex";
            erroy2.style.display="flex";
        }
    }
    user.onblur=function(){
        if (user.value.length==11) {
            dui1.style.display="block";
        }
        // if (user.value.length==11 && pass.value.length==6) {
        //     btn.classList.add("but-color");
        // }
    }
    pass.onblur=function(){
        if (pass.value.length==6) {
            dui2.style.display="block";
        }
        // if (user.value.length==11 && pass.value.length==6) {
        //     btn.classList.add("but-color");
        // }
    }
    
}