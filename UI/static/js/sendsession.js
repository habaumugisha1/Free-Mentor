function sendsession(){
    const names = document.getElementById("names").value;
    const mails = document.getElementById("mails").value;
    const texts = document.getElementById("texts").value;

    localStorage.setItem('names', names)
    localStorage.setItem('mails', mails)
    localStorage.setItem('texts', texts)
    alert(`Dear ${names} Your session sent sucessful!!!!`);
    console.log(names);
};