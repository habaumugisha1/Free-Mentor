
// confirm("are you sure to to delete?");
function validate(){

const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("emailId");
const password = document.getElementById("passId");
const text = document.getElementById("textId");
const occupation = document.getElementById("occupId");
const experiance = document.getElementById("expId");
const form = document.getElementById("formId");

// the colors
const green = '#4CFA50';
const red = '#F44336';


if (firstName.value  == "mama")                                  
    { 
        alert("Please enter your first name."); 
        
        name.focus(); 
        return false; 
    }

    if (lastName == "")                                  
    { 
        alert("Please enter your last name and continue your process!."); 
        name.focus(); 
        return false; 
    }
   
}
validate();