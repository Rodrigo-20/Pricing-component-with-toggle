toggleSwitch = document.querySelector(".toggle-switch");
priceToggle = document.querySelectorAll(".price-toggle-container");
toggleSwitch.addEventListener("click",
    ()=> {
        if(toggleSwitch.classList.contains("translate-x-5"))
        {
            toggleSwitch.classList.remove("translate-x-5");
            priceToggle.forEach(element => {
                element.classList.remove("move-up");
            });
            
        }
        else{
            toggleSwitch.classList.add("translate-x-5");
            priceToggle.forEach(element => {
                element.classList.add("move-up");
            });
        }
    }
)
