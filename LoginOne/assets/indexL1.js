function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

const serviceID ="service_ifahzyr";
const templateID="template_j5pr8tc";

emailjs.send(serviceID, templateID, params)
.then(res =>{
      document.getElementById("name").value = ""; 
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Thank you for your submission")
    })
    .catch(err =>console.log(error));

}