
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Get form data
    const name = document.getElementById('fname').value;
    const email = document.getElementById('mail').value;
    const message = document.getElementById('contactMessage').value;
  
    // Create a JSON object with the form data
    const formData = {
      name: name,
      email: email,
      message: message
    };
  
    // Make an HTTP POST request to the API
    axios.post('https://backend.getlinked.ai/hackathon/contact-form', formData)
      .then(function (response) {
        // Handle success
        console.log('Data sent successfully', response.data);
      })
      .catch(function (error) {
        // Handle error
        console.error('Error sending data', error);
        // Display an error message to the user
      });
  });
  