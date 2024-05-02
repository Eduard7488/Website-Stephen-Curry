function buttonFarbeAendern() { //Simple Funktion um die Farbe eines Elements zu ändern
    var element = document.getElementById('punkteFuerJs');
    element.style.color="black";
}

let progressBar = document.querySelector(".progress-bar");
let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 
window.onscroll = function(){
   let progress = (scrollY / documentHeight) * 100;
   progressBar.style.width = progress + "%";
}

