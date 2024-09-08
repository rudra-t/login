let signupBtn = document.getElementById("signupbtn")
let signinBtn = document.getElementById("signinbtn")
let nameField = document.getElementById("namefield")
let title = document.getElementById("title")
let underline = document.getElementById("underline")
let text = document.querySelector("p")

signinBtn.addEventListener('click', () =>{
    nameField.style.maxHeight='0';
    title.innerHTML = "Sign Up";
    text.innerHTML = "Forgot Password";
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
    underline.style.transform = "translateX(35px)";
})
signupBtn.addEventListener('click', () =>{
    nameField.style.maxHeight='50px';
    title.innerHTML = "Sign In";
    text.innerHTML = "Password suggestions";
    signupBtn.classList.remove('disable');
    signinBtn.classList.add('disable');
    underline.style.transform = "translateX(0)";
})
