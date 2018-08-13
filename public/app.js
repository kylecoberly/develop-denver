const $form = document.querySelector("form");
const $message = document.querySelector(".message");

$form.addEventListener("submit", submitEmail);

function submitEmail(event){
    event.preventDefault();

    const email = event.target.querySelector("[name=email]").value;
    addToCampaign(email)
        .then(parseResponse)
        .then(handleResponse)
        .catch(handleError);
}

function addToCampaign(email){
    const url = `https://dvlp-emails.herokuapp.com`
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email_address: email,
        }),
    });
}

function parseResponse(response){
    if (response.status >= 400){
        throw new Error(error);
    }
    return response.json();
}

function handleResponse(response){
    const message = "We'll let you know when we have more details!";
    showMessage(message);
}

function handleError(error){
    console.error(error.message);
    const errorMessage = "There was a problem processing your email, sorry!";
    showMessage(errorMessage);
}

function showMessage(message){
    hideForm();
    $message.textContent = message;
}

function hideForm(){
    $form.style.visibility = "hidden";
}
