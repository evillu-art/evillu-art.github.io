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
                document.getElementsByClassName("mindar-ui-scanning")[0].setAttribute("onClick", "closeNav()");
            });
        } else if (page=="silent-book" || page=="te-jol-alszol") {
            new Flickity( '.main-carousel', {
                "fullscreen": true,
                "draggable": false,
                "wrapAround": false
            });
        }
    };
    xhr.send();
}