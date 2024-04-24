let enabledAr = false;
const loadPage = (page) => {
    var xhr= new XMLHttpRequest();
    xhr.open('GET', "components/" + page + ".html", true);
    xhr.onreadystatechange = function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        document.getElementById('main-container').innerHTML= this.responseText;
        if (page == "ar") {
            const sceneEl = document.querySelector('a-scene');
            sceneEl.addEventListener("arReady", (event) => {
                if (!enabledAr) {
                    is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent),
                    is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
                    if ( is_ios && is_safari ) {
                        if (confirm('Seems like you use Safari. Please navigate to a new page from the bottom left corner, then navigate back to "AR Experience".')) {
                            enabledAr = true;
                        }
                    }
                }
                document.getElementsByClassName("mindar-ui-scanning")[0].setAttribute("onClick", "closeNav()");
            });
        } else if (page=="silent-book" || page=="te-jol-alszol") {
            new Flickity( '.main-carousel', {
                "draggable": true,
                "wrapAround": true,
                "freeScroll": true,
                "pageDots": false,
                "adaptiveHeight": true,
                "lazyLoad": 2,
                "imagesLoaded": true
            });
        }
    };
    xhr.send();
}