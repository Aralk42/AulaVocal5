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

function changeTextLanguage(el){
    let all_texts_valencia = document.getElementsByClassName("TextValencia");
    
    let all_texts_castella = document.getElementsByClassName("TextCastella");

    if(el.innerHTML === "Valencià"){
        for(let i =0; i< all_texts_castella.length; i++){
            all_texts_castella[i].style.display = "none";
        }
        for(let i =0; i< all_texts_valencia.length; i++){
            all_texts_valencia[i].style.display = "block";
        }
        el.innerHTML = "Castellano";
        
    }else if (el.innerHTML === "Castellano"){
        for(let i =0; i< all_texts_valencia.length; i++){
            all_texts_valencia[i].style.display = "none";
        }
        for(let i =0; i< all_texts_castella.length; i++){
            all_texts_castella[i].style.display = "block";
        }
        el.innerHTML = "Valencià"; 
    }
}
