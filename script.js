(function(){

    "use strict"

    const shareIcon1 = document.querySelector(".share-icon1");

    shareIcon1.addEventListener("click", function(){

        const container = document.querySelector(".share-icon-container");
        if(container.classList.contains("hidden")){
            container.classList.remove("hidden")
        }else{
            container.classList.add("hidden")
        }
    })
}());