// Gestion de la Modal
const modal = document.getElementById("bookingModal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Fermer si on clique en dehors de la fenêtre
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Logique de soumission du formulaire
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Demande de réservation envoyée ! Nous vous contacterons bientôt.");
    closeModal();
});

// Effet au scroll sur la navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "10px 50px";
        nav.style.borderBottom = "1px solid rgba(217, 119, 6, 0.3)";
    } else {
        nav.style.padding = "20px 50px";
        nav.style.borderBottom = "none";
    }
});