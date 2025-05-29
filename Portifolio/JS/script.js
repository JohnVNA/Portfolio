const toggle = document.getElementById('dark-mode-toggle');

// Verifica o localStorage ao carregar a página
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggle.textContent = '☀️';
} else {
  toggle.textContent = '🌙';
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Atualiza o ícone e salva no localStorage
  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

