document.addEventListener('DOMContentLoaded', function() {
  fetch('/ip')
    .then(response => response.json())
    .then(data => {
      alert(`Your IP Address is: ${data.ip}`);
    })
    .catch(error => console.error('Error fetching IP:', error));
});
