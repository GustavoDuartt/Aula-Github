document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Formcadastro');
    const resultBox = document.getElementById('result-box');
    const fecharBtn = document.getElementById('fechar');
    const seeBtn = document.getElementById('see');
    const itemList = document.getElementById('item-list');

    function showResults() {
        resultBox.classList.add('active');
    }

    function hideResults() {
        resultBox.classList.remove('active');
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (nome && email && senha) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span><b>NOME:</b>${nome} <b>EMAIL:</b>(${email}) <b>SENHA:</b>${senha}</span>
                <button class="delete-btn" data-name="${nome}">
                    <img src="delete.png" alt="Excluir">
                </button>
            `;

            itemList.appendChild(listItem);
            form.reset();
        }
    });

    seeBtn.addEventListener('click', showResults);
    fecharBtn.addEventListener('click', hideResults);

    itemList.addEventListener('click', function(event) {
        if (event.target.closest('.delete-btn')) {
            const itemToRemove = event.target.closest('li');
            itemList.removeChild(itemToRemove);
        }
    });
});
