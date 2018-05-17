document.querySelector("form").addEventListener("submit", submitEmail);

function submitEmail(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("email"));
    event.target.reset();
    showMessage("We'll let you know when we have more details!");
}

function showMessage(message){
    document.querySelector(".message").textContent = message;
}
