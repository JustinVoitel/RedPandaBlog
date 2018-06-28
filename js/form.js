window.addEventListener('DOMContentLoaded', validateForm,false);

function validateForm(){
    let
        errorList=document.getElementById("errorList"),
        checks=document.querySelectorAll('[type="checkbox"]'),
        radios=document.querySelectorAll('[type="radio"]'),
        form=document.querySelector('form');

    form.addEventListener('submit',function(e){enableGame();e.preventDefault();},false);

    function check(arr){
        let checkedArr=[];
        let len=arr.length;
        let i=0;

        for(i;i<len;i++){
            if(arr[i].checked){
                checkedArr.push(arr[i].id);
            }
        }
        let typeOfCheck=arr[0].type;

        if(checkedArr.length===0){
            const listItem = document.createElement("li");
            listItem.className = "error";
            const errorMsg = document.createTextNode("Error: Please click " + typeOfCheck);
            listItem.appendChild(errorMsg);
            errorList.appendChild(listItem);
            return false
        }
        else{
            return true
        }
    }
    function enableGame(){
        const checkbox = check(checks);
        const radio = check(radios);
        if(checkbox && radio){
            console.log("game freigeschaltet");
            let i = 0;
            let arr = document.getElementsByClassName("gameMenu");
            let len=arr.length;
            for(i; i<len;i++){
                arr[i].classList.remove("disabled");
            }
            window.location.replace("game.html");
        }else{

        }
    }
}