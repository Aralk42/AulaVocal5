function hideall(){
    document.getElementById("Inicio").style.display = "none";
    document.getElementById("Conciertos").style.display = "none";
    document.getElementById("Directores").style.display = "none"; 
    document.getElementById("Informacion").style.display = "none";
}
function showInit(){
    hideall()
    document.getElementById("Inicio").style.display = "block";
    document.getElementById("titulo").innerHTML = "Aula Vocal 5";
}

function showDirectors(){
    hideall()
    document.getElementById("Directores").style.display = "block"; 
    document.getElementById("titulo").innerHTML = "Directors";
}

function showConcerts(){
    hideall()
    document.getElementById("Conciertos").style.display = "block";
    document.getElementById("titulo").innerHTML = "Concerts";
}

function showInformation(){
    hideall()
    document.getElementById("Informacion").style.display = "block";
    document.getElementById("titulo").innerHTML = "Informació";
}