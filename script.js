// ===========================
// PROMO BANNER AUTO SLIDER
// ===========================

const promoSlides = document.querySelectorAll(".promo-slide");

let currentPromo = 0;

function showPromo(index){
    promoSlides.forEach((slide)=>{
        slide.style.display = "none";
    });

    promoSlides[index].style.display = "block";
}

if(promoSlides.length > 0){

    showPromo(currentPromo);

    setInterval(()=>{

        currentPromo++;

        if(currentPromo >= promoSlides.length){
            currentPromo = 0;
        }

        showPromo(currentPromo);

    },4000);

}

// ==========================
// LOADING SCREEN
// ==========================

window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 2000);
});
