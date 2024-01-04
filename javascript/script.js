// Elementos do DOM
const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

// Função para atualizar o valor exibido
const updateValue = () => {
  value.innerHTML = count;
};

// Variáveis de controle
let count = 0;
let intervalId = null;

// Função para iniciar o intervalo de incremento ou decremento
const startInterval = (operation) => {
  intervalId = setInterval(() => {
    operation(); // Executa a operação (incremento ou decremento)
    updateValue(); // Atualiza o valor exibido
  }, 100);
};

// Função para parar o intervalo
const stopInterval = () => {
  clearInterval(intervalId);
};

// Adiciona eventos de clique aos botões de mais e menos
plusButton.addEventListener('mousedown', () => {
  startInterval(() => count += 1); // Inicia o incremento
});

minusButton.addEventListener('mousedown', () => {
  startInterval(() => count -= 1); // Inicia o decremento
});

// Adiciona eventos de liberação de clique aos botões de mais e menos
[plusButton, minusButton].forEach(button => {
  button.addEventListener('mouseup', stopInterval); // Para o intervalo ao soltar o clique
});

// Adiciona eventos de toque aos botões de mais e menos
[plusButton, minusButton].forEach(button => {
  button.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Evita o comportamento padrão do toque
    startInterval(() => (button === plusButton) ? count += 1 : count -= 1);
  });

  button.addEventListener('touchend', stopInterval); // Para o intervalo ao tirar o dedo
});

// Adiciona evento de clique ao botão de reset
resetButton.addEventListener('click', () => {
  count = 0;
  updateValue(); // Reseta o contador
});
