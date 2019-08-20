
      const email = localStorage.getItem("email");
      const name = localStorage.getItem("firstName");
      const experiance = localStorage.getItem("experiance");
      const text = localStorage.getItem("text");
      //const message = `I'm 20years old<br> I have speciarized in javascripts<br> programming`;
    //   for(i=0; i < .value.length; i++ ){
      document.write(`<div id = "js">hey ${name}!,<br><br> your application was successful and you have<br> experiance of  ${experiance}<br> we will reply to ${email} <br><br>${text} <br><br> 
      <button id="reqbtn value="request session" onClick ="got()">request session</button></div>`);
      
      
     function got() {
         document.write(`<div id="reqsession"><form method ="post"> names<br>
         <input type ="text" id="nme" name="name"><br><br>
         message<br>
         <textArea id="area"> </textArea><br>
         <button id="rbtn value="send session" onClick ="send()">send session</button></form></div>`)
      
     };
    
     Document.getElementByTageName("body").appendChild("div");
//  <script src ="./submit.js"></script> 

