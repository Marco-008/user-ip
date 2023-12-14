document.addEventListener('DOMContentLoaded', function() {
  const ipAddressElement = document.getElementById('ip-address');

  fetch('/ip')
    .then(response => response.json())
    .then(data => {
      ipAddressElement.innerText = data.ip;
    })
    .catch(error => console.error('Error fetching IP:', error));
});
