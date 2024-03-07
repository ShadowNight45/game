document.addEventListener('DOMContentLoaded', function () {
    var bouton = document.getElementById('connecter');
       
    bouton.addEventListener('click', function() {
        // Récupérer les valeurs des champs utilisateur et password au moment du clic
         var utilisateur = document.getElementById('utilisateur').value;
         var password = document.getElementById('password').value;
    
        if (utilisateur === "BD-89" && password === "ABCD") {
            window.location.href = 'https://www.filecrypt.cc/Container/650D711AAB.html';
        } else {
            alert("Mauvaise Combinaison");
        }
    });
});
