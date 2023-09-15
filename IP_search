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
