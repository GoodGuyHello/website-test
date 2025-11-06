document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.getElementById('show-budget-btn');
    const budgetContainer = document.getElementById('budget-container');
    const budgetInput = document.getElementById('budget-input');

    showButton.addEventListener('click', () => {
        
        showButton.style.display = 'none';
        budgetContainer.classList.remove('hidden');
        budgetInput.focus();
    });

});