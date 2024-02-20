document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;

            // Verifica se la risposta cliccata è già aperta
            const isAlreadyActive = answer.classList.contains('active');

            // Chiudi tutte le risposte
            document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                otherAnswer.classList.remove('active');
                otherAnswer.style.maxHeight = 0; // Chiude l'elemento
            });

            // Se la risposta cliccata non era aperta, aprila
            if (!isAlreadyActive) {
                answer.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                // Se era già aperta e clicchi di nuovo, la chiude
                answer.style.maxHeight = 0;
            }
        });
    });

   
});
