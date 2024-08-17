let len = document.getElementById('pass').innerText;
let hide = document.getElementById("hide");
let pass = document.getElementById("pass");
let forgot= document.getElementById("forgot");
function check_password(){
  if(len.length <8){
    alert("Password must be at least 8 characters long")
    return false;
  }
}

hide.onclick = function(){
  if(pass.type == "password"){
    pass.type = "text";
    hide.classList.add("fa-eye");
    hide.classList.remove("fa-eye-slash")
  }else{
    pass.type = "password";
    hide.classList.add("fa-eye-slash");
    hide.classList.remove("fa-eye")
  }

  
}

forgot.onclick = function(){
  prompt("Enter the new password ....");
}