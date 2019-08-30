

function store() {
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("emailId");
const password = document.getElementById("passId");
const text = document.getElementById("textId");
const occupation = document.getElementById("occupId");
const experiance = document.getElementById("expId");
const form = document.getElementById("formId");


  if((firstName ==="") || (lastName ==="") || (email.value ==="") || (password.value ==="") || (text.value === "") || (occupation.value ==="") || (experiance.value ==="")){
 alert('please fill all field, No black fields are allowed!!!!! ')
 return false
  } else{
    localStorage.setItem('firstName',firstName.value);
    localStorage.setItem('lastName',lastName.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('password',password.value.hidden);
    localStorage.setItem('text',text.value);
    localStorage.setItem('occupation',occupation.value);


  alert(` dear ${firstName.value}! Your registration successful!!!`)
  location.href = "login.html";
}
};
