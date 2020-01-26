

$(document).on("click", ".signInBut", function(){


    event.preventDefault();

    var email = $("#emailInput").val().trim();
    var passwordC = $("#passwordInput").val().trim();

    $.get("/api/users/"+email,{
        where:{
            password: passwordC
        }
    }  
    ).then(function(res){
        console.log(res);

        if (res.password == passwordC){
            console.log("well technically you logged in");
            $(".loginPageText").text("YOU LOGGED IN!");
        }
        else{
            console.log("wrong password");
            $(".loginPageText").text("Wrong Password");
        }

    })

});