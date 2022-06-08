const section = document.querySelector(".sections__section")


section.addEventListener("mouseover", (e) =>{
    if (e.target.classList.contains("imgLogo")) {
        e.target.style.transform = "scale(1.5)"
        // e.target.style.backgroundColor = "lightcyan"
        e.target.style.transition = "all 0.5s"
    }
})
section.addEventListener("mouseout", (e) =>{
    if (e.target.classList.contains("imgLogo")) {
        e.target.style.transform = "scale(1)"
        // e.target.style.backgroundColor = "white"
        e.target.style.transition = "all 0.5s"
    }
})