//For home page
const btnHideMenu = document.querySelector('#btnHide');
const btnShowMenu = document.querySelector('#btnShow');
const navLinks = document.querySelector('.nav-links');

btnShowMenu.addEventListener("click", function(){
    navLinks.style.right = "0";
    //console.log(123);
})

btnHideMenu.addEventListener("click", function(){
    navLinks.style.right = "-200px";
})

//For contact page

const btnSubmit = document.querySelector(".send-btn");
const userName = document.querySelector(".name");
const email = document.querySelector(".email");
const text_area = document.querySelector("textarea");
const alertSuccess = document.querySelector(".alert-success");
const alertError = document.querySelector(".alert-error");

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

alertError.addEventListener("click",function(){
    alertError.style.visibility = "hidden";
})

alertSuccess.addEventListener("click",function(){
    alertSuccess.style.visibility = "hidden";
})

btnSubmit.addEventListener("click", function(){
    //console.log(12);
    validicationForm();
    
})

function validicationForm(){
    
    if(userName.value == "" || text_area.value == "" || email.value == "")
    {
        alertError.innerHTML = "Please fill out all in the form!"
        alertError.style.visibility = "visible";
        alertSuccess.style.visibility = "hidden";  
        //console.log("acb");
    }
    else if(validicationEmail() == false)
    {   
        alertError.innerHTML = "Please fill out right email format!"
        alertError.style.visibility = "visible";
        alertSuccess.style.visibility = "hidden"; 
    }
    else{
        alertError.style.visibility = "hidden";
        alertSuccess.style.visibility = "visible";
    }
}

function validicationEmail(){
    if(email.value.match(mailformat))
    {
        return true;
    }
    else
    {
        return false; 
    }
}