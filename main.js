function showPlaceInfo(imgSource, heading, description) {
    let disp = document.getElementById("display");
    let bod = document.getElementById("body");
    bod.style.overflow = "hidden";
    document.addEventListener('mousemove', trackCursorMovement);
    disp.style.left = event.clientX + 5 + "px";
    disp.style.top = event.clientY + 5 + "px";
    disp.innerHTML = "<div id = 'wrapper'><img id = 'imgid' src = '" + imgSource + "'>" + "<p id ='place'>" + heading + "</p>" + "<p id ='details'>" + description + "</p></div>";
}

function trackCursorMovement() {
    let show = document.getElementById('display');
    show.style.left = event.clientX + 5 + "px";
    show.style.top = event.clientY + 5 + "px";
}

function detachPlaceInfo() {
    let show = document.getElementById("display");
    let bod = document.getElementById("body");
    show.removeAttribute('style');
    bod.removeAttribute('style');
    document.removeEventListener('mousemove', trackCursorMovement);
    show.removeChild(show.childNodes[0]);
}

