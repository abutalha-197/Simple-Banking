document.getElementById('login-submit').addEventListener('click',function(){
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField  = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if(userEmail == 'talha@gmail.com' && userPassword == '1234'){
        //console.log('OK');
        window.location.href = 'banking.html';
    }
})