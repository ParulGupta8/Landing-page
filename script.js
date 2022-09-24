myName=document.getElementById("name").value;
myEmail=document.getElementById("email").value;
subscribe=document.getElementById("subs_btn");
nm=document.getElementById("nm");
em=document.getElementById("em");
msg=document.getElementById("msg");

let regexMail = /^([\w !#$%&*-+=\.]+)+@(\w)+.([a-z\.]{2,5})$/; //regular expression for email
let name_reg=/^[a-zA-Z]*$/;
let bool= false;

function check(){
if(bool==false){
    if( (myName.length == 0) && !(myName.match(name_reg)) )
        nm.innerHTML = "Please enter the name";  
    else 
        nm.innerHTML = "";

    if (mail.length == 0) 
        em.innerHTML = "Please enter the email";
    else if (regexMail.test(mail) == true) 
        em.innerHTML = "";
    else 
        em.innerHTML = "Enter a valid mail"; 

    bool=true;
    return false;
}

if(bool==true){
    msg.innerHTML= "Thank You !";
    bool=false;
}

}