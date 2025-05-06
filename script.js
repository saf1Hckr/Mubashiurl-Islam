function sendMail(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
      alert("Please fill out all fields before sending the message.");
      return; 
  }

  let parms = {
      name: name,
      email: email,
      subject: subject,
      message: message,
  };

  emailjs.send("service_lo8y6ge", "template_3137dfe", parms).then(() => {
          alert("Email Sent!");
      })
      .catch((error) => {
          console.error("Email sending failed:", error);
          alert("Failed to send email. Please try again later.");
      });
}