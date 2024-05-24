function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin') {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.h-container').style.display = 'block';
    } else {
    alert('Usuário ou senha incorretos!');
    }
    }