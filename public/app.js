const $form = document.querySelector("form");
const $message = document.querySelector(".message");

$form.addEventListener("submit", submitEmail);

function submitEmail(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("email"));
    event.target.reset();
    showMessage("We'll let you know when we have more details!");
}

function showMessage(message){
    hideForm();
    $message.textContent = message;
}

function hideForm(){
    $form.style.display = "none";
}
