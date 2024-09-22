var i = 1;

function increment(e, v) {
    document.getElementById(e).value = ++i;

}


function decrement(e, v) {
    document.getElementById(e).value = --i;
    if (document.getElementById(e).value <= 0) {
        document.getElementById(e).value = 1;
    }

}

function deleteValue(e, v) {
    document.getElementById(v).remove();
}