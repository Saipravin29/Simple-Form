const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("E-mail");
const password=document.getElementById("password");
const password1=document.getElementById("password2");

String.prototype.isEmail=function(){
    return !! this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

function checkRequired(inputs){
    inputs.forEach((input) => {
        if(input.value.trim()=== ""){
            errorInput(input,`${getName(input)} is Required`);
        }else{
            successInput(input);
        }    
    });
}

function getName(input){
    return input.id;
}

function errorInput(input,message){
    const formGroup = input.parentElement;
    formGroup.className="form-group error";
    const p=formGroup.querySelector("p");
    p.innerHTML=message;
}

function successInput(input){
    const formGroup = input.parentElement;
    formGroup.className="form-group success";
    const p=formGroup.querySelector("p");
    p.innerHTML="";
}

function checkLength(input,min,max){
    const data =input.value.trim().length;
    if(data<min){
        errorInput(input,`${getName(input)} must be atleast greater than ${min} characters`);
    }else if(data>max){
        errorInput(input,`${getName(input)} must be lesser than ${max} characters`);
    }
}

function checkConfirmPass(input1,input2){
    if(input1.value!=input2.value){
        errorInput(input2,`${getName(input2)} does not match`)
    }
}

function checkEmail(input){
    if(!input.value.trim().isEmail()){
        errorInput(input,`this is not a valid email adderes`);
    }
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([username,email,password,password1]);
    checkLength(username,5,20);
    checkLength(password,5,10);
    checkConfirmPass(password,password1);
    checkEmail(email);
});