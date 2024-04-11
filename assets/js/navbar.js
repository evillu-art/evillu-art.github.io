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
        case "ar-exp-nav":
        loadPage("ar");
        break;
    case "silent-nav":
        removeAr();
        loadPage("silent-book");
        break;
    case "alszol-nav":
        removeAr();
        loadPage("te-jol-alszol");
        break;
    }
    makeActive(id);
}

const isActive = (id) => {
    return document.getElementById(id).classList.contains("active");
}

const makeActive = (id) => {
    ["ar-exp-nav","silent-nav","alszol-nav"].forEach((item) => {
        elem = document.getElementById(item);
        if (id == item) {
            elem.classList.add("active");
        } else {
            elem.classList.remove("active");
        }
    });
}