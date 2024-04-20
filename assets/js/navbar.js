const openNav = () => {
    document.getElementById("navbar").style.width = "250px";
    const hamburger = document.getElementById("hamburger");
    hamburger.removeEventListener("click", openNav);
    hamburger.addEventListener("click", closeNav);
  }

const closeNav = () => {
    document.getElementById("navbar").style.width = "0";
    const hamburger = document.getElementById("hamburger");
    hamburger.removeEventListener("click", closeNav);
    hamburger.addEventListener("click", openNav);
}

const clickLink = (id) => {
    if (isActive(id)) {
        return;
    }

    switch (id) {
        case "ar":
            break;
        case "silent-book":
            removeAr();
            break;
        case "te-jol-alszol":
            removeAr();
            break;
        case "rolam":
            removeAr();
            break;
        default:
            console.log("Unknown page!")
            return;
    }
    loadPage(id);
    makeActive(id);
}

const isActive = (id) => {
    return document.getElementById(id).classList.contains("active");
}

const makeActive = (id) => {
    ["ar","silent-book","te-jol-alszol", "rolam"].forEach((item) => {
        elem = document.getElementById(item);
        if (id == item) {
            elem.classList.add("active");
        } else {
            elem.classList.remove("active");
        }
    });
}