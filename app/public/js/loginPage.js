var name;
var id;
var userData;

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

        if (res === null){
            $(".loginPageText").text("Email not in our system");
        }
        else{
        
        if (res.password == passwordC){
            console.log("well technically you logged in");
            $(".loginPageText").text("YOU LOGGED IN!");

            var login = {
                first_name: res.first_name,
                last_name: res.last_name,
                email: res.email,
                password: res.password,
                isLoggedIn: 1
            }

            $.ajax({
                url: '/api/users/'+res.id,
                method: 'PUT',
                data: login

            }).then(function(result){
                console.log(result);
                
            })

            console.log(id);
            window.location.replace("./");
            name = res.email;
            id = res.id;
            userData = result;
            

        }
        else{
            console.log("wrong password");
            $(".loginPageText").text("Password/Email incorrect");
        }
        }

    })

});

if(name){
    loggedIn(name);
}
else{
    console.log("not logged in yet");
}

checkLogin(id);

console.log(userData);

function checkLogin(id){

    console.log("getting id? " +id);
    $.get("/api/users/", {
    where:{
        id: id
    }
        
    }).then(function(response){
        
        var num = parseInt(id-1);
        console.log(id);
        
        console.log(response);
})
}

function loggedIn(name){
    $(".logBut").hide();
    $("#username").text("Welcome, " + name);
    console.log(name);
}

