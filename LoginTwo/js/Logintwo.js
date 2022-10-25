function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("message").value,       
 };

 const serviceID="service_5tzq0ok";
 const templateID="template_j5pr8tc";

 emailjs.send(serviceID,templateID,params)
 .then(
    (res) =>{
       document.getElementById("name").value = "";
       document.getElementById("email").value = "";
       document.getElementById("phone").value = "";
       document.getElementById("message").value = "";
       console.log(res);
       alert("your message was sent");
    })
    .catch((err) => console.log(error));
}