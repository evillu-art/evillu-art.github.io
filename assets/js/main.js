const removeAr = () => {
    document.querySelectorAll('.mindar-ui-overlay').forEach( (element) => {
        element.parentNode.removeChild(element);
    });
    document.getElementsByTagName("html")[0].classList.remove("a-fullscreen");
}

const getHash = () => {
    var url = window.location.href;
    if (url.indexOf('#') !== -1) {
        var hashtag = url.split('#')[1];
        return hashtag;
    }
    return null;
}

window.addEventListener("DOMContentLoaded", () => {
    // Load AR Experience
    hashpage = getHash();
    if (hashpage !== null && ["ar", "rolam", "silent-book", "te-jol-alszol"].includes(hashpage)) {
        loadPage(hashpage)
        if (hashpage === "ar") {
            if (confirm("Click to load AR experience:")) {
                loadPage('ar');
                makeActive("ar");
            } else {
                loadPage("silent-book")
                makeActive("silent-book")
            }     
        }
    } else {
        if (confirm("Click to load AR experience:")) {
            loadPage('ar');
            makeActive("ar");
        } else {
            loadPage("silent-book")
            makeActive("silent-book")
        }       
    }

    // Make navbar working
    const navbar = document.getElementById("navbar");
    navbar.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            clickLink(event.target.id);
        }
    });
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", openNav);

    // Make pageclick close navbar
    const mainContainer = document.getElementById("main-container");
    const separator = document.getElementsByClassName("button-separator")[0];
    mainContainer.addEventListener("click", closeNav);
    separator.addEventListener("click", closeNav);

    // Make instagram logo clickable on every device
    const instaLogo = document.getElementById('instaLogo');
    instaLogo.addEventListener('click', () => {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            window.location.href = "instagram://user?username=_evillu";
        } else {
            window.open("https://www.instagram.com/_evillu/", '_blank');
        }
    });
}, false);