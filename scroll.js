
(function scroll() {
    var tools = document.querySelector('.header_app_1');
    var check_1 = document.querySelector('#hd-1');
    var check_2 = document.querySelector('#hd-2');

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


    // Это решение предусматривает поддержку IE8-
    function onWheel(e) {
        e = e || window.event;

        // deltaY, detail содержат пиксели
        // wheelDelta не дает возможность узнать количество пикселей
        // onwheel || MozMousePixelScroll || onmousewheel
        var delta = e.deltaY || e.detail || e.wheelDelta;

        if (delta <= 0) {
            check_2.checked = false;
        } else {
            check_2.checked = true;
        }

    }


    document.onclick = function(e) {
        myDiv = document.getElementById('hd-1');
        if (e.target.id != myDiv.id)  {
            myDiv.checked = false;
            check_2.checked = false;
        }
        console.log("1")
    };


    document.querySelector('.key').onmouseover = document.querySelector('.key').onmouseout = handler;

    function handler(event) {

        if (event.type == 'mouseover') {
            event.target.style.background = 'pink'
        }
        if (event.type == 'mouseout') {
            event.target.style.background = ''
        }
    }

})();