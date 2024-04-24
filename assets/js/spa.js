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
                confirm('Click "ok" to enable AR content.');
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
            });
        }
    };
    xhr.send();
}