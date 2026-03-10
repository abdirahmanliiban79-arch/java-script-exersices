const form = document.querySelector('#resgistrationForm')

   const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');

    const err = document.querySelector('#err');
    const success = document.querySelector('#success');


    form.addEventListener("submit", function(event){
        err.textContent = ''
        success.textContent = ''

        event.preventDefault();

        const isValidateUsername = validateUsername();
        const isEmailValidate = validateEmail();
        const isPasswordValidate = validatePassword();
        const isConfirmPassword = validateConfirmPassword();

        if(!isValidateUsername){
            email.focus();
            username.focus();
            return
        }else if(!isEmailValidate){
            email.focus();
            return
        }else if(!isPasswordValidate){
            password.focus();
            return
        }else if(!isConfirmPassword){
            confirmPassword.focus();
            return
        }


        success.textContent = 'registration Successfully'

    })

    function validateUsername(){
        if(username.value.trim() === ''){
            // err
            setErr(username,'Username is required')
            return false
        }else{
            // success
            setSuccess(username)
            return true
        }
    }


    function validateEmail(){
         const emailpattern = /^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

         if(!email.value.match(emailpattern)){
            setErr(email, 'have a look on your current eamil')
            return false
         }else{
            setSuccess(email)
            return true
         }
    }

    function validatePassword(){
        if(password.value.length < 8){
            setErr(password, "password must be 8 characters long")
            return false
        }else{
            setSuccess(password)
            return true
        }
    }

    function validateConfirmPassword(){
        if(password.value.trim() === ""  || confirmPassword.value.trim() === ""){
            setErr(confirmPassword, "make sure your password is right")
            return false
        }

        if(password.value !== confirmPassword.value){
            setErr(confirmPassword, "make sure your password is right")
            return false
        }else{
            setSuccess(confirmPassword)
            return true
        }
    }

    function setErr(element,message){
        element.classList.add('invalid')
        element.classList.remove('valid')
       err.textContent = message;
    }

    function setSuccess(element){
        element.classList.add('valid')
        element.classList.remove('invalid')
    }
