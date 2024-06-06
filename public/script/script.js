let index_page = document.getElementById("indexBody");
let forgot_Block = document.getElementById("forgot-block");
let forgotPassword = document.getElementById("forgot-password");
 
let forgot_button_cancel = document.getElementById("forgot-button_cancel");



forgot_button_cancel.addEventListener('click' , () =>{
    index_page.style.display = 'block';
    forgot_Block.style.display = 'none';
});