var character1 = document.getElementById("char1"),
    character2 = document.getElementById("char2"),
    character3 = document.getElementById("char3"),

    placeholder = document.getElementById("char-placeholder");
    

character1.addEventListener("click", function() {
    
    placeholder.innerHTML = "<img src='img/char1.svg' class='charsize1 mx-auto d-block'>";
});

character2.addEventListener("click", function() {
    
    placeholder.innerHTML = "<img src='img/char2.svg' class='charsize2 mx-auto d-block'>";
    
});

character3.addEventListener("click", function() {
    
    placeholder.innerHTML = "<img src='img/char3.svg' class='charsize3 mx-auto d-block'>";
    
});