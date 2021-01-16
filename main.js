
function openslide(){
 document.querySelector('.slide').style.display = 'inline';
  document.querySelector('.slide').style.display = 'flex';
}
function closeslide(){
    document.querySelector('.slide').style.display = 'none';
}

function main(){
    document.getElementById('side-menu').style.width ='0';
}



function follow(){
    document.querySelector('.page-follow').innerHTML = 'following';
}

function sigin(){
    var a = document.querySelector('.login-form input');
    if(a !== null){
        document.querySelector('.demo').innerHTML = 'fill in the  form'
    }
}




/*
function store(){

    var name = document.getElementById('email');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var p = document.querySelector('.demo');

    if(name.value.length == 0){
        p.innerHTML='Please fill in email';

    }else if(pw.value.length == 0){
        p.innerHTML='Please fill in password';

    }else if(name.value.length == 0 && pw.value.length == 0){
        p.innerHTML='Please fill in email and password';

    }else if(pw.value.length > 8){
        p.innerHTML='max 8';

    }
    else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        p.innerHTML='Your account has been created';
    }

    
}

//checking
function check(){
    store();
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        console.log('You are logged in.');
    }else{
        console.log('Error on login');
    }


}

check();
*/