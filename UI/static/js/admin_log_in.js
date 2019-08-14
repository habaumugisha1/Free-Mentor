function sign(){
const email = document.getElementById("mailId").value;
const password = document.getElementById("passwordId").value;

if (email === "admin@gmail.com" && password === "admin1" ){

    alert(` ${email} your login is sucessful!!!`)
    return true;

} else if (email == "") {
alert("please entre your email, no black field allowed!! ");
}


else if (password == ""){
    alert("no black field allowed");
    return false;
}

else {
    alert("please enter valid password and email.");
    return false; 
}


};