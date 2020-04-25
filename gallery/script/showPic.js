function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    }else{
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChile == targetElement) {
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function prepareplaceholder() {
    var placeholder = document.createElement("img");
    var description = document.createElement("p");
    var desctext = document.createTextNode("Choose an image");
    var gallery = document.getElementById("imagegallery");

    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.png");
    placeholder.setAttribute("alt", "my image gallery")

    description.setAttribute("id", "description");
    description.appendChild(desctext);

    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

function prepareGallery() {
    if(!document.getElementsByTagName || !document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; ++i){
        links[i].onclick = function() {
            return !showPic(this);
        }
    }
}

function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title");
        var description = document.getElementById("description");
        description.firstChild.nodeValue = text;
    }
    return true;
}
addLoadEvent(prepareGallery);
addLoadEvent(prepareplaceholder);
