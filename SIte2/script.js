function toggleMenu() {
    var menu = document.querySelector('#navbar ul');
    menu.classList.toggle('active');
}

function showPopup(popupId) {
    document.getElementById(popupId.toLowerCase() + '-popup').style.display = 'block';
}

for (let i = 1; i <= 5; i++) {
    dragElement(document.getElementById(`draggable-image-box-${i}`));
}


function closePopup(popupId) {
    document.getElementById(popupId.toLowerCase() + '-popup').style.display = 'none';
}

// ... (existing code) ...

function showPopup(popupId) {
    var popup = document.getElementById(popupId.toLowerCase() + '-popup');
    popup.style.display = 'block';
    // Make the popup draggable
    dragElement(popup);
}

function closePopup(popupId) {
    document.getElementById(popupId.toLowerCase() + '-popup').style.display = 'none';
}

// Make the element draggable
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "-header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when the mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

