function enabel(){
    document.querySelector('button').disabled=false;
}

function coPassword(){
    let nsp = document.getElementById("password").value;
    let rpt = document.getElementById("confirm_password").value;
    if(nsp !==rpt){
        document.querySelector('button').disabled=true;
        document.getElementById("messageNot").innerHTML = "please enter the correct password"
    }
    if((nsp ===rpt)&&(nsp.length !==0 || rpt.length!==0)){
        document.getElementById("messageOk").innerHTML = "correct password"
    }
}