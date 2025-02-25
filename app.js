document.addEventListener('DOMContentLoaded', function () {
    // Cadastro de usuário
    document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const login = document.getElementById('login').value;
        const password = document.getElementById('senha').value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ name, email, login, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert('Cadastrado com sucesso!');
        document.getElementById('registrationForm').reset();
    });

    // Login de usuário
    document.getElementById('loginForm')?.addEventListener('submit', function(event) {
        event.preventDefault();

        const login = document.getElementById('loginInput').value;
        const password = document.getElementById('senhaInput').value;
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.login === login && u.password === password);

        if (user) {
            alert(`Bem-vindo de volta, ${user.name}!`);
        } else {
            alert('Login ou senha incorretos.');
        }
    });

    // Verificação de usuário já cadastrado
    document.getElementById('alreadyRegistered')?.addEventListener('click', function() {
        const login = prompt('Digite seu login:');
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.login === login);

        if (user) {
            alert(`Bem-vindo de volta, ${user.name}!`);
        } else {
            alert('Usuário não encontrado.');
        }
    });
});