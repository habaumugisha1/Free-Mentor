
function decline(){
const section = document.getElementsByTagName("section");
const parent =document.getElementById("usermainId");
const color = '#2f2f2f';
const child = document.getElementById("section");
child.style.color = 'red';
child.innerHTML="session declined!!";
// const color = 'red';
// parent.removeChild(child);
console.log(child);
alert("session declined!!!");
};

function accept() {
    
    const section = document.getElementsByTagName("section");
    const parent =document.getElementById("usermainId");
    const child = document.getElementById("section");
    child.style.color = 'green';
    alert("Thanks! this session accepted.");

    
}