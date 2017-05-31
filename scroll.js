
(function scroll() {
    var tools = document.querySelector('.header_app_1');
    var check = document.querySelector('#hd-2');

    if (tools.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+
            tools.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            tools.addEventListener("mousewheel", onWheel);
        } else {
            // Firefox < 17
            tools.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else { // IE8-
        tools.attachEvent("onmousewheel", onWheel);
    }

    function onWheel(e) {
        e = e || window.event;

        var delta = e.deltaY || e.detail || e.wheelDelta;

        if (delta <= 0) {
            check.checked = false;
        } else {
            check.checked = true;
        }

    }

    document.onclick = function(e) {
        myDiv = document.getElementById('hd-1');
        if (e.target.id != myDiv.id)  {
            myDiv.checked = false;
            check.checked = false;
        }
    };

})();