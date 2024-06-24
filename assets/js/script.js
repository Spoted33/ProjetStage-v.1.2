fetch('header.html') // créer une requête pour récupérer le contenu du fichier header.html
.then(response => response.text()) // convertir la réponse en texte
.then(data => { // une fois que le texte est récupéré
  document.getElementById('header').innerHTML = data; // insérer le texte dans la div au dessus ;-)
});

fetch('footer.html') // créer une requête pour récupérer le contenu du fichier footer.html
.then(response => response.text()) // convertir la réponse en texte
.then(data => { // une fois que le texte est récupéré
  document.getElementById('footer').innerHTML = data; // insérer le texte dans la div au dessus ;-)

});

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('theme') === 'dark') {
    document.getElementById('footer').classList.add('dark-mode');
  }

  const toggleButton = document.getElementById('toggle-dark-mode');
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      document.getElementById('footer').classList.toggle('dark-mode');

  if (document.getElementById('footer').classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
})};
});