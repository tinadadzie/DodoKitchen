function validate(){
    var user = document.getElementById("user1").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var confirmPass = document.getElementById("confirmPwd").value;
    if(user == ""){
        document.getElementById("examUser").innerHTML = " ** Please enter username";
        return false;
    }
     if((user.length <= 2)||(user.length>20)){
         document.getElementById("examUser").innerHTML = "** username length must be bettween two to 20";
         return false;

 }
 if (!isNaN(user)){
    document.getElementById("examUser").innerHTML = "** only characters are alllowed";
     
    return false;
 }


    if(email == ""){
        document.getElementById("examEmail").innerHTML = "  ** Please enter email";
        return false;
    }
    if( email.indexOf('@') <= 0){
        document.getElementById("examEmail").innerHTML = "  ** @ is at an invalid poition";
        return false;
    
    }
    if((email.charAt(email.length-4)!= ".") && (email.charAt(email.length-3)!= ".")){
        document.getElementById("examEmail").innerHTML = "  ** . is at an invalid position ";
        return false;
    
    }

    if(password == ""){
        document.getElementById("examPwd").innerHTML = " ** Please enter password";
        return false;
    }

    if((password.length <= 5)||(password.length>20)){
        document.getElementById("examUser").innerHTML = "** password length must be bettween two to 20";
        return false;
    }
       if(password != confirmPass){
        document.getElementById("examConfirmPwd").innerHTML = " ** sorry password do not match";
        return false;
       }
 
    if( confirmPass == ""){
        document.getElementById("examConfirmPwd").innerHTML = " ** Please retype your pasword";
        return false;
    }
    if(user && email && password && confirmPass){
     console.log(user, email, password, confirmPass) 
    }
    alert("signup completed");
}
 
function validation(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value; 

    if(email == ""){
        document.getElementById("examEmail").innerHTML = "  ** Please enter email";
        return false;
    }
    if(password == ""){
        document.getElementById("examPwd").innerHTML = " ** Please enter password";
        return false;
    }
  
}