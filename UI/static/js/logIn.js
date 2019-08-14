function valid() {
const email = document.getElementById("mailId");
const password = document.getElementById("passId");

if(email.Value.trim()=="" || password.Value.trim() == ""){
    alert("no blanck fields allowed!")
    return false;
}
else {
return true;
}
}