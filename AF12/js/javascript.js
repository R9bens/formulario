document.getElementById('cadenaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var frase = document.getElementById('frase').value;
    var palabraBuscar = document.getElementById('palabraBuscar').value;
    var palabraReemplazar = document.getElementById('palabraReemplazar').value;
    var patron = document.getElementById('patron').value;

    // Muestra la frase 
    var resultadoHTML = '<p><strong>Frase original:</strong> ' + frase + '</p>';

    // Muestra las veces que aparece la palabra a buscar de la frase 
    var regex = new RegExp('\\b' + palabraBuscar + '\\b', 'gi');
    var veces = (frase.match(regex) || []).length;
    resultadoHTML += '<p><strong>Veces que aparece la palabra a buscar:</strong> ' + veces + '</p>';

    // Muestra la frase con las palabras cambiadas por el patrón de símbolos 
    var fraseReemplazada = frase.replace(new RegExp('\\b' + palabraReemplazar + '\\b', 'gi'), patron);
    resultadoHTML += '<p><strong>Frase con las palabras cambiadas:</strong> ' + fraseReemplazada + '</p>';

    // Muestra el resultado de la pagina
    document.getElementById('resultado').innerHTML = resultadoHTML;
});
