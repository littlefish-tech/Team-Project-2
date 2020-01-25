  
$(document).on("submit", "#registerBut", handleUserRegisterSubmit);



function handleUserRegisterSubmit(event) {
    event.preventDefault();

    if(!nameInput.val().trim() || !emailInput.val().trim() || !passwordInput.val().trim()) {
        return;
    }
    else{
        
    var nameInput = $("#inputName").val().trim();
    var emailInput = $("#inputEmail").val().trim();
    var passwordInput = $("#inputPassword").val().trim();


    var userData = {
        username: nameInput.val().trim(),
    
        email: emailInput.val().trim(),
    
        password: passwordInput.val().trim()
    };

    upsertUser(userData);

    }



}

function upsertUser(userData){
    $.post("/api/users", userData, function(){
        console.log("user inputted");
    });

}
