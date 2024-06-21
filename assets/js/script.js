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