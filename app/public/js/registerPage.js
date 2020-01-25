$(document).ready(function(){
    var nameInput = $("#inputName");
    var emailInput = $("#inputEmail");
    var passwordInput = $("#inputPassword");

$(document).on("submit", "#registerBut", handleUserRegisterSubmit);

getUsers();

function handleUserRegisterSubmit(event) {
    event.preventDefault();

    if(!nameInput.val().trim() || !emailInput.val().trim() || !passwordInput.val().trim()) {
        return;
    }
upsertUser({
    username: nameInput
    .val()
    .trim(),

    email: emailInput
    .val()
    .trim(),

    password: passwordInput
    .val()
    .trim()
});

}

function upsertUser(userData){
    $.post("/api/users", userData)
    .then(getUsers);

}
})