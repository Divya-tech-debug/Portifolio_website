const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

function validateForm(){
    var name=document.forms["myform"]["name"].value;
    var email=document.forms["myform"]["email"].value;
    if(name ==="" || email ==="" || subject ==="")
    {
        alert("please fill in all the required fields");
        return false;
    } else{
         alert("Thank you for connecting me");
            
        }

    }









