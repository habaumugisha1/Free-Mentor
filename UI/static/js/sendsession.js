function sendsession(){
    const names = document.getElementById("names").value;
    const mails = document.getElementById("mails").value;
    const texts = document.getElementById("texts").value;
   if(names==='' || mails==='' || texts===''){
       alert('please fill all field no black field allowed!!')
       return false;
   }
    localStorage.setItem('names', names)
    localStorage.setItem('mails', mails)
    localStorage.setItem('texts', texts)
    alert(`Dear ${names} Your session sent sucessful!!!!`);
    console.log(names);
};