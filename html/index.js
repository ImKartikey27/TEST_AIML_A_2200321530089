const validUsername = 'kartikey_2710';
const validPassword = '2200321530089';

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {

        alert('Login successful! Redirecting to Currency Converter Dashboard');
        window.location.href = "currency-convertor.html"; 
    } else {
        alert('Login failed! Incorrect username or password.');
    }
}