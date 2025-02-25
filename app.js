document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    // Criação de um objeto com os dados
    const userData = {
        name: name,
        email: email,
        login: login,
        password: password
    };

    // Salva os dados no LocalStorage
    localStorage.setItem(login, JSON.stringify(userData));

    // Limpa o formulário
    document.getElementById('registrationForm').reset();
    
    alert('Cadastrado com sucesso!');
});

// Lógica para o botão "Já cadastrado"
document.getElementById('alreadyRegistered').addEventListener('click', function() {
    const login = prompt('Digite seu login:');

    if (login) {
        const storedUser = localStorage.getItem(login);
        
        if (storedUser) {
            const user = JSON.parse(storedUser);
            alert(`Bem-vindo de volta, ${user.name}!`);
        } else {
            alert('Usuário não encontrado.');
        }
    }
});