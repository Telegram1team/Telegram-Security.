document.addEventListener('DOMContentLoaded', function() {
    // Disable autofill
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.setAttribute('autocomplete', 'off');
    });

    // Disable form submission warnings
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch('login.php', {
            method: 'POST',
            body: formData
        }).then(response => response.text())
          .then(data => {
              document.body.innerHTML = data;
          });
    });
});