document.addEventListener('DOMContentLoaded', () => {
    // Seletor para as abas
    const tabs = document.querySelectorAll('.tab-link');
    // Seletor para o conteúdo das abas
    const tabContents = document.querySelectorAll('.tab-content');

    // Função para exibir o conteúdo da aba selecionada
    function showTab(tabId) {
        // Ocultar todos os conteúdos das abas
        tabContents.forEach(content => {
            content.style.display = 'none';
        });

        // Exibir o conteúdo da aba selecionada
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.style.display = 'block';
        }
    }

    // Adiciona o evento de clique para cada aba
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            const tabId = tab.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    // Inicializa a primeira aba visível
    if (tabs.length > 0) {
        const firstTab = tabs[0];
        const firstTabId = firstTab.getAttribute('data-tab');
        showTab(firstTabId);
    }
});





